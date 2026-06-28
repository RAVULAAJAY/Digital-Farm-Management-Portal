import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { vetPatients } from "@/lib/mock-data";

export const Route = createFileRoute("/app/vet/patients")({
  component: () => (
    <div>
      <PageHeader title="My Patients" subtitle="All animals under your veterinary care." />
      <div className="overflow-x-auto rounded-lg border bg-card">
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
            </tr>
          </thead>
          <tbody>
            {vetPatients.map((p, i) => (
              <tr key={i} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5 font-mono text-xs">{p.farmId}</td>
                <td className="px-3 py-2.5">{p.farmer}</td>
                <td className="px-3 py-2.5"><Link to="/app/animals/$id" params={{ id: p.animal }} className="text-primary hover:underline">{p.animal}</Link></td>
                <td className="px-3 py-2.5 text-muted-foreground">{p.drug}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{p.issued}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{p.endsOn}</td>
                <td className="px-3 py-2.5">
                  <StatusBadge tone={p.status === "compliant" ? "green" : p.status === "pending" ? "amber" : "red"}>
                    {p.status === "compliant" ? "Compliant" : p.status === "pending" ? "Pending" : "Non-Compliant"}
                  </StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
