import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const farms = [
  { id: "FARM-HR-2025-00112", name: "Kumar Dairy", owner: "Rajesh Kumar", type: "Dairy", district: "Karnal, HR", animals: 24 },
  { id: "FARM-PB-2025-00088", name: "Devi Poultry", owner: "Sunita Devi", type: "Poultry", district: "Ludhiana, PB", animals: 3400 },
  { id: "FARM-AP-2025-00410", name: "Rao Mixed Farm", owner: "Mohan Rao", type: "Mixed", district: "Guntur, AP", animals: 86 },
  { id: "FARM-MH-2025-00231", name: "Patil Goshala", owner: "Mahesh Patil", type: "Dairy", district: "Pune, MH", animals: 142 },
  { id: "FARM-TN-2025-00145", name: "Suresh Apiary", owner: "Suresh Iyer", type: "Aquaculture", district: "Coimbatore, TN", animals: 0 },
];

export const Route = createFileRoute("/app/farms/")({
  component: () => (
    <div>
      <PageHeader
        title="Farm Registry"
        subtitle="Registered livestock farms across India."
        actions={<Button asChild><Link to="/app/farms/register">+ Register New Farm</Link></Button>}
      />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Farm ID</th>
              <th className="px-3 py-2.5 text-left font-semibold">Name</th>
              <th className="px-3 py-2.5 text-left font-semibold">Owner</th>
              <th className="px-3 py-2.5 text-left font-semibold">Type</th>
              <th className="px-3 py-2.5 text-left font-semibold">District</th>
              <th className="px-3 py-2.5 text-right font-semibold">Animals</th>
            </tr>
          </thead>
          <tbody>
            {farms.map((f, i) => (
              <tr key={f.id} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5 font-mono text-[11px]">{f.id}</td>
                <td className="px-3 py-2.5 font-medium">{f.name}</td>
                <td className="px-3 py-2.5">{f.owner}</td>
                <td className="px-3 py-2.5">{f.type}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{f.district}</td>
                <td className="px-3 py-2.5 text-right">{f.animals.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
