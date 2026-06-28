import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { labResults } from "@/lib/mock-data";

export const Route = createFileRoute("/app/lab/history")({
  component: () => (
    <div>
      <PageHeader title="Test History" subtitle="All residue tests you have uploaded." />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Test ID</th>
              <th className="px-3 py-2.5 text-left font-semibold">Farm</th>
              <th className="px-3 py-2.5 text-left font-semibold">Sample</th>
              <th className="px-3 py-2.5 text-left font-semibold">Drug</th>
              <th className="px-3 py-2.5 text-right font-semibold">Residue</th>
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
  ),
});
