import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Beef, Activity, CalendarClock, ShieldCheck, FilePlus2, AlertCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { animals, activeTreatments, recentActivity } from "@/lib/mock-data";

export const Route = createFileRoute("/app/farmer/")({
  component: FarmerDashboard,
});

function FarmerDashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader
        title="Farmer Dashboard"
        subtitle="Track your livestock treatments and withdrawal compliance."
        actions={
          <Button onClick={() => navigate({ to: "/app/log-treatment" })}>
            <FilePlus2 className="mr-1.5 h-4 w-4" /> Log New Treatment
          </Button>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Animals" value={24} icon={Beef} hint="Registered on farm" />
        <StatCard label="Active Treatments" value={3} icon={Activity} tone="warning" hint="In progress" />
        <StatCard label="Days to Next Clearance" value={4} icon={CalendarClock} tone="danger" hint="Animal BR-012" />
        <StatCard label="Compliance Score" value="94%" icon={ShieldCheck} tone="success" hint="Last 30 days" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Animals table */}
        <div className="lg:col-span-2 rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-base font-semibold">My Animals</h2>
            <Link to="/app/farmer/animals" className="text-xs font-medium text-primary hover:underline">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5 text-left font-semibold">Animal ID</th>
                  <th className="px-4 py-2.5 text-left font-semibold">Species</th>
                  <th className="px-4 py-2.5 text-left font-semibold">Breed</th>
                  <th className="px-4 py-2.5 text-left font-semibold">Status</th>
                  <th className="px-4 py-2.5 text-left font-semibold">Last Treatment</th>
                  <th className="px-4 py-2.5 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {animals.map((a, i) => (
                  <tr key={a.id} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-4 py-2.5">
                      <Link to="/app/animals/$id" params={{ id: a.id }} className="font-medium text-primary hover:underline">
                        {a.id}
                      </Link>
                    </td>
                    <td className="px-4 py-2.5">{a.species}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{a.breed}</td>
                    <td className="px-4 py-2.5">
                      <StatusBadge tone={a.status}>
                        {a.status === "red" ? "In Withdrawal" : a.status === "amber" ? "Ending Soon" : "Cleared"}
                      </StatusBadge>
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{a.lastTreatment}</td>
                    <td className="px-4 py-2.5 text-right">
                      <Link to="/app/animals/$id" params={{ id: a.id }} className="text-xs font-medium text-primary hover:underline">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active treatments */}
        <div className="rounded-lg border bg-card">
          <div className="border-b p-4">
            <h2 className="text-base font-semibold">Active Treatments</h2>
          </div>
          <div className="space-y-3 p-4">
            {activeTreatments.map((t) => {
              const pct = Math.max(0, Math.min(100, ((t.withdrawalDays - t.daysRemaining) / t.withdrawalDays) * 100));
              const urgent = t.daysRemaining <= 3;
              return (
                <div key={t.id} className="rounded-lg border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold">{t.animalId}</p>
                      <p className="text-xs text-muted-foreground">{t.drug} · {t.drugClass}</p>
                    </div>
                    {urgent && <StatusBadge tone="red">Urgent</StatusBadge>}
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1 text-[11px] text-muted-foreground">
                    <span>Dose: <span className="text-foreground">{t.dose}</span></span>
                    <span>Route: <span className="text-foreground">{t.route}</span></span>
                    <span>Start: <span className="text-foreground">{t.startDate}</span></span>
                    <span>Duration: <span className="text-foreground">{t.durationDays}d</span></span>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-between text-[11px]">
                      <span className="text-muted-foreground">Withdrawal progress</span>
                      <span className={urgent ? "font-semibold text-destructive" : "font-medium"}>
                        {t.daysRemaining} days remaining
                      </span>
                    </div>
                    <Progress value={pct} className="h-1.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-base font-semibold">Recent Activity</h2>
          <Link to="/app/alerts" className="text-xs font-medium text-primary hover:underline">
            <AlertCircle className="mr-1 inline h-3 w-3" />All alerts
          </Link>
        </div>
        <ul className="divide-y">
          {recentActivity.map((r, i) => (
            <li key={i} className="flex items-center justify-between px-4 py-2.5 text-sm">
              <div>
                <span className="font-medium">{r.action}</span>
                <span className="text-muted-foreground"> · {r.animal} {r.drug !== "—" && `· ${r.drug}`}</span>
              </div>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
