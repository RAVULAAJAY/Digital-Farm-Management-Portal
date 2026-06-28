import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";

const users = [
  { name: "Rajesh Kumar", role: "Farmer", state: "Haryana", status: "active" },
  { name: "Dr. Anjali Sharma", role: "Veterinarian", state: "Maharashtra", status: "active" },
  { name: "Vikram Singh", role: "Regulatory Officer", state: "Punjab", status: "active" },
  { name: "Priya Menon", role: "Lab Technician", state: "Karnataka", status: "active" },
  { name: "Mahesh Patil", role: "Farmer", state: "Maharashtra", status: "suspended" },
];

export const Route = createFileRoute("/app/admin/users")({
  component: () => (
    <div>
      <PageHeader title="User Management" subtitle="Manage portal users across roles." />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Name</th>
              <th className="px-3 py-2.5 text-left font-semibold">Role</th>
              <th className="px-3 py-2.5 text-left font-semibold">State</th>
              <th className="px-3 py-2.5 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5 font-medium">{u.name}</td>
                <td className="px-3 py-2.5">{u.role}</td>
                <td className="px-3 py-2.5">{u.state}</td>
                <td className="px-3 py-2.5"><StatusBadge tone={u.status === "active" ? "green" : "red"}>{u.status}</StatusBadge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
