import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Building2, FileText, Clock, AlertTriangle, ClipboardCheck, ShieldCheck, X, Download } from "lucide-react";
import {
  LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { amuTrend, flaggedFarms, mrlViolations, states, topDrugs } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { exportCSV, exportPDF } from "@/lib/export";

export const Route = createFileRoute("/app/regulator/")({
  component: RegulatorDashboard,
});

// derive state code from FARM-XX-... id
function farmStateCode(id: string) {
  const m = id.match(/^FARM-([A-Z]{2})/);
  return m?.[1] ?? "";
}
const STATE_CODE: Record<string, string> = {
  Maharashtra: "MH", Punjab: "PB", "Andhra Pradesh": "AP", "Madhya Pradesh": "MP",
  Haryana: "HR", "Tamil Nadu": "TN", "Uttar Pradesh": "UP", Karnataka: "KA",
};

function RegulatorDashboard() {
  const [drugFilter, setDrugFilter] = useState<string | null>(null);
  const [stateFilter, setStateFilter] = useState<string | null>(null);

  const filteredViolations = useMemo(() => {
    return mrlViolations.filter((v) => {
      if (drugFilter && v.drug !== drugFilter) return false;
      if (stateFilter && farmStateCode(v.farm) !== STATE_CODE[stateFilter]) return false;
      return true;
    });
  }, [drugFilter, stateFilter]);

  const filteredFlagged = useMemo(() => {
    return flaggedFarms.filter((f) => {
      if (stateFilter && farmStateCode(f.id) !== STATE_CODE[stateFilter]) return false;
      if (drugFilter && !f.issue.toLowerCase().includes(drugFilter.toLowerCase())) {
        // only filter flagged farms by drug if mentioned in issue text
        return drugFilter === null;
      }
      return true;
    });
  }, [drugFilter, stateFilter]);

  const hasFilter = drugFilter || stateFilter;

  return (
    <div>
      <PageHeader
        title="Regulatory Officer Dashboard"
        subtitle="District- and state-level AMU monitoring and compliance oversight."
        actions={
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => exportCSV("flagged-farms.csv", filteredFlagged)}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> Flagged CSV
            </Button>
            <Button variant="outline" size="sm" onClick={() => exportCSV("mrl-violations.csv", filteredViolations)}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> Violations CSV
            </Button>
            <Button variant="outline" size="sm" onClick={() => exportPDF("regulator-report.pdf", "Regulator Report — Flagged Farms & MRL Violations", [...filteredFlagged, ...filteredViolations.map((v) => ({ id: v.farm, farmer: v.animal, district: v.drug, issue: `Residue ${v.residue} (MRL ${v.limit})`, severity: v.status }))], hasFilter ? `Active filters — state: ${stateFilter ?? "—"}, drug: ${drugFilter ?? "—"}` : undefined)}>
              <FileText className="mr-1.5 h-3.5 w-3.5" /> PDF Report
            </Button>
            <Button asChild><Link to="/app/regulator/analytics">Open Analytics</Link></Button>
          </div>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard label="Total Farms" value="12,847" icon={Building2} />
        <StatCard label="AMU Records (mo)" value="3,421" icon={FileText} tone="info" />
        <StatCard label="Active Withdrawals" value={892} icon={Clock} tone="warning" />
        <StatCard label="MRL Violations" value={3} icon={AlertTriangle} tone="danger" />
        <StatCard label="Farms Inspected" value={156} icon={ClipboardCheck} />
        <StatCard label="Compliance Rate" value="96.2%" icon={ShieldCheck} tone="success" />
      </div>

      {hasFilter && (
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-xs">
          <span className="font-semibold text-primary">Active filters:</span>
          {stateFilter && (
            <button
              onClick={() => setStateFilter(null)}
              className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary"
            >
              State: {stateFilter} <X className="h-3 w-3" />
            </button>
          )}
          {drugFilter && (
            <button
              onClick={() => setDrugFilter(null)}
              className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary"
            >
              Drug: {drugFilter} <X className="h-3 w-3" />
            </button>
          )}
          <button
            onClick={() => { setDrugFilter(null); setStateFilter(null); }}
            className="ml-auto text-muted-foreground hover:text-foreground"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Trend chart */}
        <div className="lg:col-span-1 rounded-lg border bg-card p-4">
          <h2 className="text-base font-semibold">AMU Trend (12 mo)</h2>
          <p className="text-xs text-muted-foreground">By drug class · click a line legend to filter</p>
          <div className="mt-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={amuTrend} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 10 }} />
                <Line type="monotone" dataKey="Tetracycline" stroke="#1A6B3C" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Penicillin" stroke="#0E7490" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Fluoroquinolone" stroke="#B45309" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Macrolide" stroke="#991B1B" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heatmap — click a state row to filter */}
        <div className="rounded-lg border bg-card p-4">
          <h2 className="text-base font-semibold">District AMU Heatmap</h2>
          <p className="text-xs text-muted-foreground">Click a state row to drill down</p>
          <div className="mt-3 space-y-1.5">
            {states.map((s) => (
              <button
                key={s.state}
                onClick={() => setStateFilter(stateFilter === s.state ? null : s.state)}
                className={cn(
                  "flex w-full items-center gap-2 rounded px-1.5 py-1 text-left transition hover:bg-muted/50",
                  stateFilter === s.state && "bg-primary/10 ring-1 ring-primary/40",
                )}
              >
                <span className="w-28 truncate text-[11px] font-medium">{s.state}</span>
                <div className="flex flex-1 gap-1">
                  {Array.from({ length: 4 }).map((_, i) => {
                    const intensity = Math.min(1, s.amu + (i - 1.5) * 0.08);
                    return (
                      <div
                        key={i}
                        title={`${s.state} dist ${i + 1} · AMU ${intensity.toFixed(2)}`}
                        className="aspect-square flex-1 rounded"
                        style={{
                          backgroundColor: `oklch(${0.85 - intensity * 0.35} ${0.1 + intensity * 0.1} ${152 - intensity * 130})`,
                        }}
                      />
                    );
                  })}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Low</span>
            <div className="mx-2 flex h-1.5 flex-1 rounded-full bg-gradient-to-r from-success/40 via-warning/60 to-destructive/70" />
            <span>High</span>
          </div>
        </div>

        {/* Flagged farms (filtered) */}
        <div className="rounded-lg border bg-card">
          <div className="border-b p-4">
            <h2 className="text-base font-semibold">Flagged Farms</h2>
            <p className="text-[11px] text-muted-foreground">{filteredFlagged.length} of {flaggedFarms.length}</p>
          </div>
          <ul className="divide-y">
            {filteredFlagged.length === 0 && (
              <li className="p-6 text-center text-xs text-muted-foreground">No farms match the active filters.</li>
            )}
            {filteredFlagged.map((f) => (
              <li key={f.id} className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{f.farmer}</p>
                    <p className="text-[11px] text-muted-foreground truncate">{f.id} · {f.district}</p>
                    <p className="mt-1 text-xs">{f.issue}</p>
                  </div>
                  <StatusBadge tone={f.severity === "high" ? "red" : "amber"}>{f.severity}</StatusBadge>
                </div>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm" className="h-7 text-xs">Inspect</Button>
                  <Button size="sm" className="h-7 text-xs">Send Notice</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-card">
          <div className="border-b p-4">
            <h2 className="text-base font-semibold">Top 10 Drugs This Month</h2>
            <p className="text-[11px] text-muted-foreground">Click a row to filter violations</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Drug</th>
                  <th className="px-3 py-2 text-right font-semibold">Usage</th>
                  <th className="px-3 py-2 text-right font-semibold">Farms</th>
                  <th className="px-3 py-2 text-left font-semibold">Alert</th>
                </tr>
              </thead>
              <tbody>
                {topDrugs.map((d, i) => (
                  <tr
                    key={d.drug}
                    onClick={() => setDrugFilter(drugFilter === d.drug ? null : d.drug)}
                    className={cn(
                      "cursor-pointer transition hover:bg-primary/5",
                      i % 2 && "bg-muted/20",
                      drugFilter === d.drug && "bg-primary/10 ring-1 ring-inset ring-primary/40",
                    )}
                  >
                    <td className="px-3 py-2 font-medium">{d.drug}</td>
                    <td className="px-3 py-2 text-right">{d.count.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right">{d.farms}</td>
                    <td className="px-3 py-2">
                      <StatusBadge tone={d.level === "high" ? "red" : d.level === "medium" ? "amber" : "green"}>{d.level}</StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="border-b p-4">
            <h2 className="text-base font-semibold">Recent MRL Violations</h2>
            <p className="text-[11px] text-muted-foreground">{filteredViolations.length} of {mrlViolations.length}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Farm</th>
                  <th className="px-3 py-2 text-left font-semibold">Animal</th>
                  <th className="px-3 py-2 text-left font-semibold">Drug</th>
                  <th className="px-3 py-2 text-right font-semibold">Residue</th>
                  <th className="px-3 py-2 text-right font-semibold">MRL</th>
                  <th className="px-3 py-2 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredViolations.length === 0 && (
                  <tr><td colSpan={6} className="px-3 py-6 text-center text-xs text-muted-foreground">No violations match the active filters.</td></tr>
                )}
                {filteredViolations.map((v, i) => (
                  <tr key={i} className={cn(i % 2 && "bg-muted/20")}>
                    <td className="px-3 py-2 font-mono text-[11px]">{v.farm}</td>
                    <td className="px-3 py-2">{v.animal}</td>
                    <td className="px-3 py-2">{v.drug}</td>
                    <td className="px-3 py-2 text-right font-semibold text-destructive">{v.residue}</td>
                    <td className="px-3 py-2 text-right text-muted-foreground">{v.limit}</td>
                    <td className="px-3 py-2"><StatusBadge tone="red">{v.status}</StatusBadge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
