import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { animals, activeTreatments, labResults } from "@/lib/mock-data";
import { getAuditFor } from "@/lib/audit";

type AnimalTab = "treatments" | "tests" | "timeline" | "audit";

export const Route = createFileRoute("/app/animals/$id")({
  validateSearch: (s: Record<string, unknown>): { tab: AnimalTab } => {
    const t = s.tab;
    return { tab: t === "tests" || t === "timeline" || t === "audit" ? t : "treatments" };
  },
  component: AnimalProfile,
});

function AnimalProfile() {
  const { id } = Route.useParams();
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();

  const animal = animals.find((a) => a.id === id) || {
    id, species: "Cattle", breed: "Unknown", status: "green" as const, lastTreatment: "—", age: "—", farm: "—",
  };

  const treatments = activeTreatments.filter((t) => t.animalId === id);
  const tests = labResults.filter((r) => r.farm.includes("FARM"));

  const timeline = [
    { date: "15 Jun 2025", type: "treatment", label: "Treatment started — Oxytetracycline (5d, IM)" },
    { date: "20 Jun 2025", type: "treatment", label: "Treatment completed — Withdrawal period began" },
    { date: "13 Jul 2025", type: "clearance", label: "Withdrawal ends — animal safe for sale/milk" },
    { date: "18 Jul 2025", type: "lab", label: "Routine MRL test scheduled" },
  ];

  return (
    <div>
      <PageHeader
        title={`Animal ${animal.id}`}
        subtitle={`${animal.species} · ${animal.breed} · ${animal.age} · ${animal.farm}`}
        actions={<StatusBadge tone={animal.status}>{animal.status === "red" ? "In Withdrawal" : animal.status === "amber" ? "Ending Soon" : "Cleared"}</StatusBadge>}
      />

      <Tabs value={tab} onValueChange={(v) => navigate({ search: { tab: v as AnimalTab } })}>
        <TabsList>
          <TabsTrigger value="treatments">Treatment History</TabsTrigger>
          <TabsTrigger value="tests">Test Results</TabsTrigger>
          <TabsTrigger value="timeline">Compliance Timeline</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
        </TabsList>

        <TabsContent value="treatments" className="rounded-lg border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2.5 text-left font-semibold">Date</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Drug</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Dose</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Route</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Duration</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Prescribed By</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Withdrawal End</th>
                </tr>
              </thead>
              <tbody>
                {(treatments.length ? treatments : activeTreatments.slice(0, 2)).map((t, i) => (
                  <tr key={i} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-3 py-2.5">{t.startDate}</td>
                    <td className="px-3 py-2.5 font-medium">{t.drug}</td>
                    <td className="px-3 py-2.5">{t.dose}</td>
                    <td className="px-3 py-2.5">{t.route}</td>
                    <td className="px-3 py-2.5">{t.durationDays}d</td>
                    <td className="px-3 py-2.5 text-muted-foreground">Dr. Anjali Sharma</td>
                    <td className="px-3 py-2.5">+{t.withdrawalDays}d</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="tests" className="rounded-lg border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2.5 text-left font-semibold">Date</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Sample</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Drug</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Result</th>
                  <th className="px-3 py-2.5 text-left font-semibold">MRL</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Lab</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Certificate</th>
                </tr>
              </thead>
              <tbody>
                {tests.slice(0, 3).map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-3 py-2.5">{r.date}</td>
                    <td className="px-3 py-2.5">{r.sample}</td>
                    <td className="px-3 py-2.5">{r.drug}</td>
                    <td className="px-3 py-2.5"><StatusBadge tone={r.status === "PASS" ? "green" : "red"}>{r.status}</StatusBadge></td>
                    <td className="px-3 py-2.5">{r.limit}</td>
                    <td className="px-3 py-2.5 text-muted-foreground">FSSAI Hyderabad</td>
                    <td className="px-3 py-2.5 font-mono text-[11px]">{r.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="rounded-lg border bg-card p-6">
          <ol className="relative ml-3 border-l-2 border-border">
            {timeline.map((t, i) => {
              const color = t.type === "treatment" ? "bg-info" : t.type === "clearance" ? "bg-success" : "bg-warning";
              return (
                <li key={i} className="mb-6 ml-6">
                  <span className={`absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full ${color} ring-4 ring-card`} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.date}</p>
                  <p className="mt-1 text-sm font-medium">{t.label}</p>
                </li>
              );
            })}
          </ol>
        </TabsContent>

        <TabsContent value="audit" className="rounded-lg border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2.5 text-left font-semibold">Timestamp</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Type</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Actor</th>
                  <th className="px-3 py-2.5 text-left font-semibold">Summary</th>
                </tr>
              </thead>
              <tbody>
                {getAuditFor({ animalId: id }).map((e, i) => (
                  <tr key={e.id} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-3 py-2.5 font-mono text-[11px]">{new Date(e.timestamp).toLocaleString()}</td>
                    <td className="px-3 py-2.5"><span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">{e.type.replace("_", " ")}</span></td>
                    <td className="px-3 py-2.5">{e.actor}</td>
                    <td className="px-3 py-2.5">{e.summary}</td>
                  </tr>
                ))}
                {getAuditFor({ animalId: id }).length === 0 && (
                  <tr><td colSpan={4} className="px-3 py-8 text-center text-xs text-muted-foreground">No audit events yet for this animal. Log a treatment or scan a prescription to populate.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Link to="/app/farmer" className="text-sm text-primary hover:underline">← Back to dashboard</Link>
      </div>
    </div>
  );
}
