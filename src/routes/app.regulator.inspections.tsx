import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";

const inspections = [
  { farm: "FARM-MH-2025-00231", farmer: "Mahesh Patil", district: "Pune, MH", scheduled: "28 Jun 2025", inspector: "V. Rao", status: "scheduled" },
  { farm: "FARM-PB-2025-00088", farmer: "Sunita Devi", district: "Ludhiana, PB", scheduled: "25 Jun 2025", inspector: "S. Sandhu", status: "overdue" },
  { farm: "FARM-HR-2025-00112", farmer: "Rajesh Kumar", district: "Karnal, HR", scheduled: "02 Jul 2025", inspector: "V. Singh", status: "scheduled" },
  { farm: "FARM-AP-2025-00410", farmer: "Mohan Rao", district: "Guntur, AP", scheduled: "18 Jun 2025", inspector: "K. Reddy", status: "completed" },
];

export const Route = createFileRoute("/app/regulator/inspections")({
  component: () => (
    <div>
      <PageHeader title="Inspection Schedule" subtitle="Upcoming and overdue farm inspections." />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Farm</th>
              <th className="px-3 py-2.5 text-left font-semibold">Farmer</th>
              <th className="px-3 py-2.5 text-left font-semibold">District</th>
              <th className="px-3 py-2.5 text-left font-semibold">Scheduled</th>
              <th className="px-3 py-2.5 text-left font-semibold">Inspector</th>
              <th className="px-3 py-2.5 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {inspections.map((r, i) => (
              <tr key={r.farm} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5 font-mono text-xs">{r.farm}</td>
                <td className="px-3 py-2.5">{r.farmer}</td>
                <td className="px-3 py-2.5">{r.district}</td>
                <td className="px-3 py-2.5">{r.scheduled}</td>
                <td className="px-3 py-2.5">{r.inspector}</td>
                <td className="px-3 py-2.5">
                  <StatusBadge tone={r.status === "completed" ? "green" : r.status === "overdue" ? "red" : "blue"}>{r.status}</StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
