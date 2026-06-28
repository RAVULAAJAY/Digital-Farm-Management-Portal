import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FlaskConical, AlertTriangle, Clock, Building2, Upload } from "lucide-react";
import { drugs, labResults } from "@/lib/mock-data";
import { toast } from "sonner";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/app/lab/")({
  component: LabDashboard,
});

function LabDashboard() {
  const t = useT();
  const [drug, setDrug] = useState("Oxytetracycline");
  const [residue, setResidue] = useState("");
  const selected = useMemo(() => drugs.find((d) => d.name === drug), [drug]);
  // Use wpMeat as a stand-in MRL threshold (ppb) for demo
  const mrl = (selected?.wpMeat ?? 100) * 10;
  const compliant = residue ? Number(residue) <= mrl : null;

  return (
    <div>
      <PageHeader title="Lab Technician Dashboard" subtitle="Upload residue test results and track compliance." />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Tests This Month" value={48} icon={FlaskConical} />
        <StatCard label="MRL Violations" value={2} icon={AlertTriangle} tone="danger" />
        <StatCard label="Pending Reviews" value={5} icon={Clock} tone="warning" />
        <StatCard label="Farms Tested" value={31} icon={Building2} tone="info" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">Recent Results</h2></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2.5 text-left font-semibold">Test ID</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Farm</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Sample</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Drug</th>
                  <th className="px-3 py-2.5 text-right font-semibold">Result</th>
                  <th className="px-3 py-2.5 text-right font-semibold">MRL</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Status</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {labResults.map((r, i) => (
                  <tr key={r.id} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-3 py-2.5 font-mono text-[11px]">{r.id}</td>
                    <td className="px-3 py-2.5 font-mono text-[11px]">{r.farm}</td>
                    <td className="px-3 py-2.5">{r.sample}</td>
                    <td className="px-3 py-2.5">{r.drug}</td>
                    <td className="px-3 py-2.5 text-right">{r.residue}</td>
                    <td className="px-3 py-2.5 text-right text-muted-foreground">{r.limit}</td>
                    <td className="px-3 py-2.5"><StatusBadge tone={r.status === "PASS" ? "green" : "red"}>{r.status}</StatusBadge></td>
                    <td className="px-3 py-2.5 text-muted-foreground">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">Upload Test Result</h2></div>
          <div className="space-y-3 p-4">
            <Field label="Farm ID" defaultValue="FARM-MH-2025-00231" />
            <Field label="Animal / Batch ID" defaultValue="BR-201" />
            <div className="space-y-1.5">
              <Label>Sample Type</Label>
              <select className="h-9 w-full rounded-md border bg-background px-2 text-sm">
                <option>Milk</option><option>Meat</option><option>Egg</option><option>Honey</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label>Drug Tested</Label>
              <select value={drug} onChange={(e) => setDrug(e.target.value)} className="h-9 w-full rounded-md border bg-background px-2 text-sm">
                {drugs.map((d) => <option key={d.name}>{d.name}</option>)}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label>Residue (ppb)</Label>
              <Input type="number" value={residue} onChange={(e) => setResidue(e.target.value)} placeholder="e.g. 180" />
            </div>
            <Field label="MRL Threshold (ppb)" defaultValue={String(mrl)} readOnly />
            {compliant !== null && (
              <div className={`rounded-md border p-2 text-sm font-medium ${compliant ? "border-success/30 bg-success/5 text-success" : "border-destructive/30 bg-destructive/5 text-destructive"}`}>
                Result: {compliant ? "COMPLIANT (PASS)" : "NON-COMPLIANT (FAIL)"}
              </div>
            )}
            <Field label="Test Date" type="date" defaultValue={new Date().toISOString().slice(0, 10)} />
            <Field label="Lab Certificate Number" placeholder="LAB-CERT-…" />
            <div className="space-y-1.5">
              <Label>Upload Report</Label>
              <div className="flex items-center justify-center rounded-md border-2 border-dashed p-4 text-xs text-muted-foreground">
                <Upload className="mr-2 h-4 w-4" /> Click to upload PDF
              </div>
            </div>
            <Button className="w-full" onClick={() => toast.success(t("Test result uploaded successfully."))}>{t("Submit Result")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      <Input {...rest} />
    </div>
  );
}
