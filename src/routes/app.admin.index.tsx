import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { states } from "@/lib/mock-data";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

export const Route = createFileRoute("/app/admin/")({
  component: AdminDashboard,
});

const districts = [
  { district: "Sangli", state: "MH", score: 0.94, risk: "high" },
  { district: "Ludhiana", state: "PB", score: 0.91, risk: "high" },
  { district: "Hisar", state: "HR", score: 0.86, risk: "medium" },
  { district: "Bareilly", state: "UP", score: 0.83, risk: "medium" },
  { district: "Guntur", state: "AP", score: 0.78, risk: "medium" },
];

const audit = [
  { time: "14:22", text: "New MRL violation registered — FARM-PB-2025-00088 (Enrofloxacin, 180 ppb)" },
  { time: "13:51", text: "State health officer approved AMR risk report for Punjab" },
  { time: "12:08", text: "Auto-generated monthly compliance report — Maharashtra" },
  { time: "11:34", text: "New farm registered — FARM-TN-2025-01402 (Coimbatore)" },
  { time: "10:17", text: "Drug formulary updated: Cefquinome reclassified to Restricted" },
];

function AdminDashboard() {
  return (
    <div>
      <PageHeader title="National Dashboard" subtitle="India-wide AMU and MRL compliance overview." />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <BigStat value="4,82,000" label="Farms Registered" />
        <BigStat value="18.3L" label="AMU Records" />
        <BigStat value="28" label="States Active" />
        <BigStat value="0.04%" label="MRL Violation Rate" tone="danger" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card p-4">
          <h2 className="text-base font-semibold">India AMU Heatmap</h2>
          <p className="text-xs text-muted-foreground">State-level intensity (click to drill down)</p>
          <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-7">
            {[...states, ...states.slice(0, 6)].map((s, i) => {
              const intensity = Math.min(1, s.amu);
              return (
                <button
                  key={i}
                  className="group relative aspect-square rounded text-left transition hover:scale-105 hover:shadow-md"
                  style={{
                    backgroundColor: `oklch(${0.82 - intensity * 0.35} ${0.08 + intensity * 0.12} ${152 - intensity * 130})`,
                  }}
                >
                  <span className="absolute inset-x-1 bottom-1 truncate text-[10px] font-bold text-white drop-shadow">
                    {s.state.slice(0, 8)}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Low AMU</span>
            <div className="mx-2 h-1.5 flex-1 rounded-full bg-gradient-to-r from-success/40 via-warning/60 to-destructive/70" />
            <span>High AMU</span>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">System Alerts</h2></div>
          <ul className="divide-y text-sm">
            {audit.map((a, i) => (
              <li key={i} className="px-4 py-2.5">
                <div className="flex items-start gap-2">
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono">{a.time}</span>
                  <span className="text-xs">{a.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">State-wise Compliance</h2></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">State</th>
                  <th className="px-3 py-2 text-right font-semibold">Farms</th>
                  <th className="px-3 py-2 text-right font-semibold">Compl%</th>
                  <th className="px-3 py-2 text-center font-semibold">Trend</th>
                </tr>
              </thead>
              <tbody>
                {states.map((s, i) => (
                  <tr key={s.state} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-3 py-2 font-medium">{s.state}</td>
                    <td className="px-3 py-2 text-right">{s.farms.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right">{s.compliance}%</td>
                    <td className="px-3 py-2 text-center">
                      {s.trend === "up" ? <ArrowUp className="inline h-3 w-3 text-success" /> :
                       s.trend === "down" ? <ArrowDown className="inline h-3 w-3 text-destructive" /> :
                       <Minus className="inline h-3 w-3 text-muted-foreground" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">Top AMR Risk Districts</h2></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">District</th>
                  <th className="px-3 py-2 text-left font-semibold">State</th>
                  <th className="px-3 py-2 text-right font-semibold">AMU</th>
                  <th className="px-3 py-2 text-left font-semibold">Risk</th>
                </tr>
              </thead>
              <tbody>
                {districts.map((d, i) => (
                  <tr key={d.district} className={i % 2 ? "bg-muted/20" : ""}>
                    <td className="px-3 py-2 font-medium">{d.district}</td>
                    <td className="px-3 py-2 text-muted-foreground">{d.state}</td>
                    <td className="px-3 py-2 text-right">{d.score.toFixed(2)}</td>
                    <td className="px-3 py-2">
                      <StatusBadge tone={d.risk === "high" ? "red" : "amber"}>{d.risk}</StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="border-b p-4"><h2 className="text-base font-semibold">Recent National Activity</h2></div>
          <ul className="divide-y text-sm">
            {audit.map((a, i) => (
              <li key={i} className="px-4 py-2.5 text-xs">
                <span className="text-muted-foreground">{a.time}</span> · {a.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BigStat({ value, label, tone }: { value: string; label: string; tone?: "danger" }) {
  return (
    <div className="rounded-lg border bg-card p-5">
      <p className={`text-3xl font-extrabold tracking-tight ${tone === "danger" ? "text-destructive" : "text-foreground"}`}>{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
