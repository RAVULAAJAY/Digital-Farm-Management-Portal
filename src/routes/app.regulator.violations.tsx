import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { mrlViolations } from "@/lib/mock-data";

export const Route = createFileRoute("/app/regulator/violations")({
  component: () => (
    <div>
      <PageHeader title="MRL Violations" subtitle="Confirmed residue violations requiring follow-up." />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Farm</th>
              <th className="px-3 py-2.5 text-left font-semibold">Animal</th>
              <th className="px-3 py-2.5 text-left font-semibold">Drug</th>
              <th className="px-3 py-2.5 text-right font-semibold">Residue</th>
              <th className="px-3 py-2.5 text-right font-semibold">MRL Limit</th>
              <th className="px-3 py-2.5 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {mrlViolations.map((v, i) => (
              <tr key={i} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5 font-mono text-xs">{v.farm}</td>
                <td className="px-3 py-2.5">{v.animal}</td>
                <td className="px-3 py-2.5">{v.drug}</td>
                <td className="px-3 py-2.5 text-right font-semibold text-destructive">{v.residue}</td>
                <td className="px-3 py-2.5 text-right text-muted-foreground">{v.limit}</td>
                <td className="px-3 py-2.5"><StatusBadge tone="red">{v.status}</StatusBadge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
