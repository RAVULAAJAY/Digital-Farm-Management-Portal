import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ChevronLeft, ChevronRight, QrCode, ScanLine } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { animals, drugs, mockPrescriptions } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { recordAudit } from "@/lib/audit";
import { getSession } from "@/lib/session";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/app/log-treatment")({
  component: LogTreatment,
});

function LogTreatment() {
  const navigate = useNavigate();
  const t = useT();
  const [step, setStep] = useState(1);
  const [animalId, setAnimalId] = useState("BR-001");
  const [drug, setDrug] = useState("Oxytetracycline");
  const [manufacturer, setManufacturer] = useState("Pfizer Animal Health");
  const [batch, setBatch] = useState("");
  const [dose, setDose] = useState("10");
  const [doseUnit, setDoseUnit] = useState("mg/kg");
  const [route, setRoute] = useState("Injection");
  const [frequency, setFrequency] = useState("Once daily");
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [duration, setDuration] = useState("5");
  const [purpose, setPurpose] = useState("Therapeutic");
  const [prescriptionId, setPrescriptionId] = useState("");
  const [noPrescription, setNoPrescription] = useState(false);
  const [scanOpen, setScanOpen] = useState(false);
  const [scanning, setScanning] = useState(false);

  function startScan() {
    setScanOpen(true);
    setScanning(true);
    setTimeout(() => {
      const pick = mockPrescriptions[Math.floor(Math.random() * mockPrescriptions.length)];
      setPrescriptionId(pick.id);
      setDrug(pick.drug);
      setAnimalId(pick.animal);
      setScanning(false);
      setScanOpen(false);
      recordAudit({
        type: "qr_linked",
        actor: getSession()?.username ?? "anon",
        animalId: pick.animal,
        summary: `Linked prescription ${pick.id} via QR scan.`,
      });
      toast.success(`Prescription ${pick.id} linked via QR scan.`);
    }, 1400);
  }

  const selectedDrug = useMemo(() => drugs.find((d) => d.name === drug), [drug]);
  const withdrawalDays = selectedDrug?.wpMeat ?? 28;
  const safeDate = useMemo(() => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + Number(duration || 0) + withdrawalDays);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  }, [startDate, duration, withdrawalDays]);

  const steps = ["Select Animal", "Drug Details", "Prescription", "Confirmation"];

  function next() { setStep((s) => Math.min(4, s + 1)); }
  function prev() { setStep((s) => Math.max(1, s - 1)); }
  function submit() {
    recordAudit({
      type: "amu_logged",
      actor: getSession()?.username ?? "anon",
      animalId,
      summary: `Logged AMU: ${drug} · ${dose} ${doseUnit} · ${duration} days (${purpose}).`,
      meta: { withdrawalDays, prescriptionId: prescriptionId || "none" },
    });
    toast.success(t("Treatment recorded successfully."));
    navigate({ to: "/app/farmer" });
  }

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title="Record Antimicrobial Usage" subtitle="Log a new treatment administered to an animal on your farm." />

      {/* Stepper */}
      <div className="mb-6 flex items-center gap-2">
        {steps.map((label, i) => {
          const n = i + 1;
          const done = step > n;
          const active = step === n;
          return (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                done && "border-success bg-success text-success-foreground",
                active && "border-primary bg-primary text-primary-foreground",
                !done && !active && "border-border bg-muted text-muted-foreground",
              )}>
                {done ? <Check className="h-4 w-4" /> : n}
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Step {n}</p>
                <p className={cn("text-xs font-semibold", active && "text-primary")}>{label}</p>
              </div>
              {n < 4 && <div className={cn("h-px flex-1", done ? "bg-success" : "bg-border")} />}
            </div>
          );
        })}
      </div>

      <div className="rounded-lg border bg-card p-6">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Step 1 — Select Animal</h2>
            <div className="space-y-1.5">
              <Label>Animal ID</Label>
              <Select value={animalId} onValueChange={setAnimalId}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {animals.map((a) => (
                    <SelectItem key={a.id} value={a.id}>{a.id} — {a.species} ({a.breed})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button className="text-xs font-medium text-primary hover:underline">+ Add New Animal</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Step 2 — Drug Details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-2">
                <Label>Drug Name</Label>
                <Select value={drug} onValueChange={setDrug}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {drugs.filter((d) => d.status !== "Banned").map((d) => (
                      <SelectItem key={d.name} value={d.name}>{d.name} <span className="text-muted-foreground">— {d.class}</span></SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Manufacturer</Label>
                <Input value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label>Batch Number</Label>
                <Input value={batch} onChange={(e) => setBatch(e.target.value)} placeholder="e.g. PFZ-2025-0042" />
              </div>
              <div className="space-y-1.5">
                <Label>Dosage</Label>
                <div className="flex gap-2">
                  <Input type="number" value={dose} onChange={(e) => setDose(e.target.value)} />
                  <Select value={doseUnit} onValueChange={setDoseUnit}>
                    <SelectTrigger className="w-28"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mg/kg">mg/kg</SelectItem>
                      <SelectItem value="mL">mL</SelectItem>
                      <SelectItem value="g">g</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Route of Administration</Label>
                <Select value={route} onValueChange={setRoute}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Oral">Oral</SelectItem>
                    <SelectItem value="Injection">Injection</SelectItem>
                    <SelectItem value="Feed Additive">Feed Additive</SelectItem>
                    <SelectItem value="Topical">Topical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Once daily">Once daily</SelectItem>
                    <SelectItem value="Twice daily">Twice daily</SelectItem>
                    <SelectItem value="Every 48hrs">Every 48 hrs</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Treatment Start Date</Label>
                <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label>Duration (days)</Label>
                <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
              </div>
              <div className="sm:col-span-2 space-y-1.5">
                <Label>Treatment Purpose</Label>
                <RadioGroup value={purpose} onValueChange={setPurpose} className="flex flex-wrap gap-4">
                  {["Therapeutic", "Prophylactic", "Metaphylactic"].map((p) => (
                    <label key={p} className="flex items-center gap-2 text-sm">
                      <RadioGroupItem value={p} id={p} /> {p}
                    </label>
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="rounded-md border border-warning/30 bg-warning/5 p-3 text-sm">
              <p className="font-semibold text-warning">Auto-calculated withdrawal: {withdrawalDays} days</p>
              <p className="text-muted-foreground">Safe to sell from: {safeDate}</p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Step 3 — Prescription</h2>
            <div className="space-y-1.5">
              <Label>Prescription ID</Label>
              <div className="flex gap-2">
                <Input value={prescriptionId} onChange={(e) => setPrescriptionId(e.target.value)} placeholder="RX-2025-…" disabled={noPrescription} />
                <Button type="button" variant="outline" onClick={startScan} disabled={noPrescription}>
                  <QrCode className="mr-1 h-4 w-4" /> Scan QR
                </Button>
              </div>
              <p className="text-[11px] text-muted-foreground">Tip: scanning a prescription QR auto-fills drug, animal and ID.</p>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={noPrescription} onChange={(e) => setNoPrescription(e.target.checked)} />
              No prescription — flag this entry for veterinary review
            </label>
            {noPrescription && (
              <div className="rounded-md border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive">
                ⚠ This treatment will be flagged for review by your assigned veterinarian.
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Step 4 — Confirmation</h2>
            <div className="rounded-lg border bg-muted/30 p-4">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="text-muted-foreground">Animal</dt><dd className="font-medium">{animalId}</dd>
                <dt className="text-muted-foreground">Drug</dt><dd className="font-medium">{drug} ({selectedDrug?.class})</dd>
                <dt className="text-muted-foreground">Batch</dt><dd>{batch || "—"}</dd>
                <dt className="text-muted-foreground">Dose</dt><dd>{dose} {doseUnit}</dd>
                <dt className="text-muted-foreground">Route</dt><dd>{route}</dd>
                <dt className="text-muted-foreground">Frequency</dt><dd>{frequency}</dd>
                <dt className="text-muted-foreground">Start date</dt><dd>{startDate}</dd>
                <dt className="text-muted-foreground">Duration</dt><dd>{duration} days</dd>
                <dt className="text-muted-foreground">Purpose</dt><dd>{purpose}</dd>
                <dt className="text-muted-foreground">Prescription</dt><dd>{noPrescription ? "Flagged — none linked" : prescriptionId || "—"}</dd>
              </dl>
            </div>
            <div className="rounded-md border border-warning/30 bg-warning/5 p-4">
              <p className="text-sm font-semibold text-warning">Withdrawal Period: {withdrawalDays} days</p>
              <p className="text-sm text-muted-foreground">Safe to sell from: <span className="font-semibold text-foreground">{safeDate}</span></p>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <Button variant="outline" onClick={prev} disabled={step === 1}>
            <ChevronLeft className="mr-1 h-4 w-4" /> Back
          </Button>
          {step < 4 ? (
            <Button onClick={next}>Next <ChevronRight className="ml-1 h-4 w-4" /></Button>
          ) : (
            <Button onClick={submit}>Submit Treatment</Button>
          )}
        </div>
      </div>

      <Dialog open={scanOpen} onOpenChange={setScanOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scan Prescription QR</DialogTitle>
            <DialogDescription>Align the QR code from your prescription card inside the frame.</DialogDescription>
          </DialogHeader>
          <div className="relative mx-auto flex aspect-square w-64 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-primary/40 bg-muted/30">
            <div className="grid h-40 w-40 grid-cols-8 gap-0.5 opacity-70">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className={(i * 7 + 3) % 5 < 3 ? "bg-foreground" : "bg-transparent"} />
              ))}
            </div>
            {scanning && (
              <div className="absolute inset-x-4 top-4 h-0.5 animate-pulse bg-primary shadow-[0_0_12px_2px] shadow-primary"
                   style={{ animation: "scanline 1.4s ease-in-out infinite" }} />
            )}
            <ScanLine className="absolute bottom-2 right-2 h-4 w-4 text-primary" />
          </div>
          <p className="text-center text-xs text-muted-foreground">{scanning ? "Scanning…" : "Detecting QR code…"}</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => { setScanning(false); setScanOpen(false); }}>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <style>{`@keyframes scanline { 0% { transform: translateY(0); } 50% { transform: translateY(220px); } 100% { transform: translateY(0); } }`}</style>
    </div>
  );
}
