import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { ShieldCheck, AlertTriangle, Activity } from "lucide-react";

export const Route = createFileRoute("/app/vet/compliance")({
  component: () => (
    <div>
      <PageHeader title="Compliance Tracker" subtitle="Patient and farm compliance overview." />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Compliant Patients" value={42} icon={ShieldCheck} tone="success" />
        <StatCard label="Pending Review" value={6} icon={Activity} tone="warning" />
        <StatCard label="Non-Compliant" value={3} icon={AlertTriangle} tone="danger" />
      </div>
      <div className="mt-6 rounded-lg border bg-card p-6 text-sm text-muted-foreground">
        Detailed compliance breakdowns by farm, drug class, and treatment purpose will appear here.
      </div>
    </div>
  ),
});
