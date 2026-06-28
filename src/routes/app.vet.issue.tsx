import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { drugs } from "@/lib/mock-data";
import { Download, MessageCircle, Send, QrCode } from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";
import { recordAudit } from "@/lib/audit";
import { getSession } from "@/lib/session";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/app/vet/issue")({
  component: IssuePrescription,
});

function IssuePrescription() {
  const t = useT();
  const [drug, setDrug] = useState("Oxytetracycline");
  const [issued, setIssued] = useState(false);
  const [farm, setFarm] = useState("FARM-HR-2025-00112");
  const [animal, setAnimal] = useState("BR-001");
  const [diagnosis, setDiagnosis] = useState("Bovine respiratory disease (J18.9)");
  const [dose, setDose] = useState("10 mg/kg");
  const [duration, setDuration] = useState("5");
  const [signed, setSigned] = useState(false);

  const selected = useMemo(() => drugs.find((d) => d.name === drug)!, [drug]);
  const wp = selected.wpMeat;

  const rxId = "RX-2025-0512";

  function submit() {
    if (!signed) {
      toast.error(t("Please certify the prescription with the digital signature checkbox."));
      return;
    }
    setIssued(true);
    recordAudit({
      type: "prescription_issued",
      actor: getSession()?.username ?? "dr.sharma",
      animalId: animal,
      farmId: farm,
      summary: `Issued prescription ${rxId} (${drug}, ${dose}, ${duration} days).`,
      meta: { withdrawalMeat: wp, withdrawalMilk: selected.wpMilk },
    });
    toast.success(t("Prescription issued. QR code generated."));
  }

  function downloadPdf() {
    const doc = new jsPDF({ unit: "pt", format: "a5" });
    const W = doc.internal.pageSize.getWidth();
    doc.setFillColor(26, 107, 60);
    doc.rect(0, 0, W, 50, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("GOVERNMENT OF INDIA · DoAH&D", 24, 22);
    doc.setFontSize(14);
    doc.text("Veterinary Prescription", 24, 40);

    doc.setTextColor(20, 20, 20);
    doc.setFontSize(10);
    let y = 80;
    const rows: [string, string][] = [
      ["Prescription ID", rxId],
      ["Issued", new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })],
      ["Veterinarian", "Dr. Anjali Sharma (VET-IND-44821)"],
      ["Farm ID", farm],
      ["Farmer", "Rajesh Kumar"],
      ["Animal", `${animal} · Cattle (Gir)`],
      ["Diagnosis", diagnosis],
      ["Drug", `${drug} (${selected.class})`],
      ["Dose", dose],
      ["Route / Frequency", "Injection · Once daily"],
      ["Duration", `${duration} days`],
      ["Withdrawal (meat)", `${wp} days`],
      ["Withdrawal (milk)", `${selected.wpMilk} days`],
    ];
    rows.forEach(([k, v]) => {
      doc.setFont("helvetica", "bold");
      doc.text(`${k}:`, 24, y);
      doc.setFont("helvetica", "normal");
      doc.text(String(v), 150, y, { maxWidth: W - 170 });
      y += 18;
    });

    y += 8;
    doc.setDrawColor(200);
    doc.line(24, y, W - 24, y);
    y += 16;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.text("Certified electronically. Scan QR on portal to verify authenticity.", 24, y);
    y += 30;
    // mock QR
    doc.setFillColor(20, 20, 20);
    const qx = W - 90, qy = y, sz = 64, cell = sz / 8;
    for (let i = 0; i < 64; i++) {
      if ((i * 7 + 3) % 5 < 3) {
        doc.rect(qx + (i % 8) * cell, qy + Math.floor(i / 8) * cell, cell, cell, "F");
      }
    }
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Verify: portal.doahd.gov.in", 24, y + sz - 4);

    doc.save(`${rxId}.pdf`);
    toast.success("Prescription PDF downloaded.");
  }

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title="Issue Veterinary Prescription" subtitle="Create a digital prescription with auto-calculated withdrawal period and QR." />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card p-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Vet Registration Number" value="VET-IND-44821" readOnly />
            <Field label="Farm ID" value={farm} onChange={setFarm} />
            <Field label="Farmer Name" value="Rajesh Kumar" readOnly />
            <Field label="Animal ID" value={animal} onChange={setAnimal} />
            <Field label="Species" value="Cattle (Gir)" readOnly />
            <div className="space-y-1.5">
              <Label>Diagnosis / Condition</Label>
              <Input value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label>Drug Name</Label>
              <Select value={drug} onValueChange={setDrug}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {drugs.filter((d) => d.status !== "Banned").map((d) => (
                    <SelectItem key={d.name} value={d.name}>{d.name} — {d.class}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Field label="Drug Class" value={selected.class} readOnly />
            <Field label="Dose" value={dose} onChange={setDose} />
            <Field label="Route" value="Injection" readOnly />
            <Field label="Frequency" value="Once daily" readOnly />
            <Field label="Duration (days)" value={duration} onChange={setDuration} />
          </div>

          <div className="rounded-md border border-warning/40 bg-warning/5 p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-warning">Mandatory Withdrawal Period</p>
            <p className="mt-1 text-2xl font-bold text-warning">{wp} days <span className="text-xs font-normal text-muted-foreground">(meat) · {selected.wpMilk} days (milk)</span></p>
          </div>

          <div className="space-y-1.5">
            <Label>Special Instructions</Label>
            <Textarea rows={3} defaultValue="Administer slowly via deep IM injection. Monitor for adverse reactions during first 48 hours." />
          </div>

          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" checked={signed} onChange={(e) => setSigned(e.target.checked)} className="mt-0.5" />
            <span>I certify this prescription is medically necessary and complies with national antimicrobial stewardship guidelines.</span>
          </label>

          <Button className="w-full" onClick={submit}>Issue Prescription</Button>
        </div>

        {/* Prescription card preview */}
        <div className="rounded-lg border-2 border-dashed border-primary/30 bg-card p-5">
          <div className="border-b border-primary/30 pb-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">Veterinary Prescription</p>
            <p className="text-sm font-bold">{issued ? rxId : "Preview"}</p>
          </div>
          <dl className="mt-3 space-y-2 text-xs">
            <Row k="Patient" v={`${animal} · Cattle`} />
            <Row k="Diagnosis" v={diagnosis} />
            <Row k="Drug" v={drug} />
            <Row k="Class" v={selected.class} />
            <Row k="Dose" v={dose} />
            <Row k="Duration" v={`${duration} days`} />
            <Row k="Withdrawal" v={`${wp} days (meat)`} />
            <Row k="Vet" v="Dr. Anjali Sharma" />
          </dl>
          <div className="mt-4 flex items-center justify-center rounded-md border bg-muted/30 p-4">
            <div className="grid h-32 w-32 grid-cols-8 gap-0.5">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className={`${((i * 7 + 3) % 5 < 3) ? "bg-foreground" : "bg-transparent"}`} />
              ))}
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] text-muted-foreground">
            <QrCode className="mr-1 inline h-3 w-3" />
            Scan to verify
          </p>
          {issued && (
            <div className="mt-4 space-y-2">
              <Button size="sm" className="w-full" onClick={downloadPdf}>
                <Download className="mr-1.5 h-3.5 w-3.5" /> Download PDF
              </Button>
              <div className="grid grid-cols-2 gap-1">
                <Button size="sm" variant="outline" onClick={() => toast.success("Sent via WhatsApp to farmer.")}>
                  <MessageCircle className="mr-1 h-3 w-3" /> WhatsApp
                </Button>
                <Button size="sm" variant="outline" onClick={() => toast.success("Sent via SMS to farmer.")}>
                  <Send className="mr-1 h-3 w-3" /> SMS
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, readOnly }: { label: string; value: string; onChange?: (v: string) => void; readOnly?: boolean }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Input value={value} onChange={(e) => onChange?.(e.target.value)} readOnly={readOnly} className={readOnly ? "bg-muted/30" : ""} />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-2 border-b pb-1.5">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}
