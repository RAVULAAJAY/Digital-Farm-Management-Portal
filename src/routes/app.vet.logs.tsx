import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { recentActivity } from "@/lib/mock-data";

export const Route = createFileRoute("/app/vet/logs")({
  component: () => (
    <div>
      <PageHeader title="Treatment Logs" subtitle="All AMU entries logged under your supervision." />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Date</th>
              <th className="px-3 py-2.5 text-left font-semibold">Animal</th>
              <th className="px-3 py-2.5 text-left font-semibold">Drug</th>
              <th className="px-3 py-2.5 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5">{r.date}</td>
                <td className="px-3 py-2.5">{r.animal}</td>
                <td className="px-3 py-2.5">{r.drug}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{r.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
