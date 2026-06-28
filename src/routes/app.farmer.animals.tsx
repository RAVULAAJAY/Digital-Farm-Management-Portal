import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { animals } from "@/lib/mock-data";

export const Route = createFileRoute("/app/farmer/animals")({
  component: () => (
    <div>
      <PageHeader title="My Animals" subtitle="All livestock registered to your farm." />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-2.5 text-left font-semibold">Animal ID</th>
              <th className="px-4 py-2.5 text-left font-semibold">Species</th>
              <th className="px-4 py-2.5 text-left font-semibold">Breed</th>
              <th className="px-4 py-2.5 text-left font-semibold">Age</th>
              <th className="px-4 py-2.5 text-left font-semibold">Status</th>
              <th className="px-4 py-2.5 text-left font-semibold">Last Treatment</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((a, i) => (
              <tr key={a.id} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-4 py-2.5">
                  <Link to="/app/animals/$id" params={{ id: a.id }} className="font-medium text-primary hover:underline">{a.id}</Link>
                </td>
                <td className="px-4 py-2.5">{a.species}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{a.breed}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{a.age}</td>
                <td className="px-4 py-2.5">
                  <StatusBadge tone={a.status}>
                    {a.status === "red" ? "In Withdrawal" : a.status === "amber" ? "Ending Soon" : "Cleared"}
                  </StatusBadge>
                </td>
                <td className="px-4 py-2.5 text-muted-foreground">{a.lastTreatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
