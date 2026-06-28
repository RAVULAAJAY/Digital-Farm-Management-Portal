import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Stethoscope, FileSignature, Clock, ShieldCheck, AlertCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { vetPatients } from "@/lib/mock-data";

export const Route = createFileRoute("/app/vet/")({
  component: VetDashboard,
});

function VetDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader
        title="Veterinarian Dashboard"
        subtitle="Issue prescriptions and monitor patient compliance."
        actions={<Button onClick={() => navigate({ to: "/app/vet/issue" })}><FileSignature className="mr-1.5 h-4 w-4" />Issue Prescription</Button>}
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Prescriptions" value={18} icon={FileSignature} />
        <StatCard label="Patients in Withdrawal" value={7} icon={Clock} tone="warning" />
        <StatCard label="Prescriptions This Month" value={34} icon={Stethoscope} tone="info" />
        <StatCard label="Compliance Rate" value="88%" icon={ShieldCheck} tone="success" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">My Patients</h2></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2.5 text-left font-semibold">Farm ID</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Farmer</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Animal</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Drug</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Issued</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Withdrawal Ends</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Status</th>
                  <th className="px-3 py-2.5 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {vetPatients.map((p, i) => (
                  <tr key={i} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-3 py-2.5 font-mono text-xs">{p.farmId}</td>
                    <td className="px-3 py-2.5">{p.farmer}</td>
                    <td className="px-3 py-2.5">
                      <Link to="/app/animals/$id" params={{ id: p.animal }} className="text-primary hover:underline">{p.animal}</Link>
                    </td>
                    <td className="px-3 py-2.5 text-muted-foreground">{p.drug}</td>
                    <td className="px-3 py-2.5 text-muted-foreground">{p.issued}</td>
                    <td className="px-3 py-2.5 text-muted-foreground">{p.endsOn}</td>
                    <td className="px-3 py-2.5">
                      <StatusBadge tone={p.status === "compliant" ? "green" : p.status === "pending" ? "amber" : "red"}>
                        {p.status === "compliant" ? "Compliant" : p.status === "pending" ? "Pending" : "Non-Compliant"}
                      </StatusBadge>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <button className="text-xs font-medium text-primary hover:underline">Alert</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">Quick Prescription</h2></div>
          <div className="space-y-3 p-4">
            <Field label="Farm ID" placeholder="Search farms…" />
            <Field label="Animal ID" placeholder="e.g. BR-001" />
            <Field label="Drug" placeholder="Search formulary…" />
            <div className="grid grid-cols-2 gap-2">
              <Field label="Dose" placeholder="mg/kg" />
              <Field label="Duration" placeholder="days" />
            </div>
            <Button className="w-full" onClick={() => navigate({ to: "/app/vet/issue" })}>
              Issue Prescription
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-base font-semibold flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-warning" /> Flagged Entries — Unprescribed AMU
          </h2>
        </div>
        <div className="divide-y">
          {[
            { farm: "FARM-MH-2025-00231", farmer: "Mahesh Patil", animal: "PT-118", drug: "Oxytetracycline", logged: "22 Jun 2025" },
            { farm: "FARM-AP-2025-00077", farmer: "K. Reddy", animal: "BR-302", drug: "Tylosin", logged: "21 Jun 2025" },
          ].map((f, i) => (
            <div key={i} className="flex items-center justify-between gap-2 p-4">
              <div>
                <p className="text-sm font-semibold">{f.animal} · {f.drug}</p>
                <p className="text-xs text-muted-foreground">{f.farmer} ({f.farm}) · Logged {f.logged}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Review</Button>
                <Button size="sm">Contact Farmer</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input className="w-full rounded-md border bg-background px-2.5 py-1.5 text-sm" placeholder={placeholder} />
    </div>
  );
}
