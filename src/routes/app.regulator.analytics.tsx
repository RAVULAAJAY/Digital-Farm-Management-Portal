import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import { amuTrend, purposeBreakdown, speciesAMU, topDrugs, mrlViolations, drugs as drugRefs } from "@/lib/mock-data";
import { Download, X } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { exportCSV, exportPDF } from "@/lib/export";

const COLORS = ["#1A6B3C", "#0E7490", "#B45309", "#991B1B", "#166534"];

export const Route = createFileRoute("/app/regulator/analytics")({
  component: Analytics,
});

function Analytics() {
  const [drugFilter, setDrugFilter] = useState<string | null>(null);
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null);
  const [purposeFilter, setPurposeFilter] = useState<string | null>(null);

  // Build mock per-record dataset combining mrl violations + top drugs
  const records = useMemo(() => {
    const out: Array<{ date: string; drug: string; drugClass: string; species: string; purpose: string; farm: string; usage: number }> = [];
    const purposes = ["Therapeutic", "Prophylactic", "Metaphylactic"];
    const species = ["Cattle", "Poultry", "Swine", "Goat", "Aquaculture"];
    topDrugs.forEach((td, i) => {
      const cls = drugRefs.find((d) => d.name === td.drug)?.class ?? "Other";
      species.forEach((sp, j) => {
        out.push({
          date: `${10 + ((i + j) % 18)} Jun 2025`,
          drug: td.drug,
          drugClass: cls,
          species: sp,
          purpose: purposes[(i + j) % 3],
          farm: `FARM-${["MH", "PB", "AP", "HR", "TN"][(i + j) % 5]}-2025-${String(100 + i * 5 + j).padStart(5, "0")}`,
          usage: Math.round(td.count / 5 + j * 7),
        });
      });
    });
    mrlViolations.forEach((v) => out.push({ date: "22 Jun 2025", drug: v.drug, drugClass: drugRefs.find((d) => d.name === v.drug)?.class ?? "Other", species: "Cattle", purpose: "Therapeutic", farm: v.farm, usage: 1 }));
    return out;
  }, []);

  const filtered = useMemo(() => records.filter((r) =>
    (!drugFilter || r.drug === drugFilter) &&
    (!speciesFilter || r.species === speciesFilter) &&
    (!purposeFilter || r.purpose === purposeFilter)
  ), [records, drugFilter, speciesFilter, purposeFilter]);

  const hasFilter = drugFilter || speciesFilter || purposeFilter;

  return (
    <div>
      <PageHeader title="AMU Analytics & Reporting" subtitle="Filter, visualize, and export AMU compliance data." />

      <div className="rounded-lg border bg-card p-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          <NativeSelect label="State" options={["All India", "Maharashtra", "Punjab", "Andhra Pradesh", "Haryana", "Tamil Nadu"]} />
          <NativeSelect label="District" options={["All", "Pune", "Ludhiana", "Guntur", "Karnal"]} />
          <NativeSelect label="Species" options={["All", "Cattle", "Poultry", "Swine", "Goat"]} />
          <NativeSelect label="Drug Class" options={["All", "Tetracycline", "Penicillin", "Fluoroquinolone", "Macrolide"]} />
          <div className="space-y-1.5">
            <Label className="text-[10px] uppercase tracking-wider">Date range</Label>
            <Input type="date" />
          </div>
          <div className="flex items-end">
            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>
      </div>

      {hasFilter && (
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-xs">
          <span className="font-semibold text-primary">Drilldown:</span>
          {drugFilter && <Chip label={`Drug: ${drugFilter}`} onClear={() => setDrugFilter(null)} />}
          {speciesFilter && <Chip label={`Species: ${speciesFilter}`} onClear={() => setSpeciesFilter(null)} />}
          {purposeFilter && <Chip label={`Purpose: ${purposeFilter}`} onClear={() => setPurposeFilter(null)} />}
          <button
            onClick={() => { setDrugFilter(null); setSpeciesFilter(null); setPurposeFilter(null); }}
            className="ml-auto text-muted-foreground hover:text-foreground"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ChartCard title="Monthly AMU Trend">
          <ResponsiveContainer>
            <LineChart data={amuTrend} margin={{ top: 5, right: 10, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="month" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="Tetracycline" stroke="#1A6B3C" strokeWidth={2} />
              <Line type="monotone" dataKey="Penicillin" stroke="#0E7490" strokeWidth={2} />
              <Line type="monotone" dataKey="Fluoroquinolone" stroke="#B45309" strokeWidth={2} />
              <Line type="monotone" dataKey="Macrolide" stroke="#991B1B" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Top 10 Antimicrobials" hint="Click a bar to filter">
          <ResponsiveContainer>
            <BarChart data={topDrugs} layout="vertical" margin={{ top: 5, right: 10, bottom: 0, left: 30 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis type="number" fontSize={10} />
              <YAxis type="category" dataKey="drug" fontSize={10} width={100} />
              <Tooltip />
              <Bar
                dataKey="count"
                radius={[0, 4, 4, 0]}
                onClick={(d: { drug?: string }) => d?.drug && setDrugFilter(drugFilter === d.drug ? null : d.drug)}
                cursor="pointer"
              >
                {topDrugs.map((d) => (
                  <Cell key={d.drug} fill={drugFilter === d.drug ? "#991B1B" : "#1A6B3C"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Treatment Purpose" hint="Click a slice to filter">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={purposeBreakdown}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
                onClick={(d: { name?: string }) => d?.name && setPurposeFilter(purposeFilter === d.name ? null : d.name)}
                cursor="pointer"
              >
                {purposeBreakdown.map((p, i) => (
                  <Cell key={p.name} fill={purposeFilter === p.name ? "#991B1B" : COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Species-wise AMU" hint="Click a bar to filter">
          <ResponsiveContainer>
            <BarChart data={speciesAMU} margin={{ top: 5, right: 10, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="species" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Bar
                dataKey="count"
                radius={[4, 4, 0, 0]}
                onClick={(d: { species?: string }) => d?.species && setSpeciesFilter(speciesFilter === d.species ? null : d.species)}
                cursor="pointer"
              >
                {speciesAMU.map((s) => (
                  <Cell key={s.species} fill={speciesFilter === s.species ? "#991B1B" : "#0E7490"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="mt-6 rounded-lg border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <div>
            <h2 className="text-base font-semibold">Drilldown Results</h2>
            <p className="text-[11px] text-muted-foreground">{filtered.length} of {records.length} records</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => exportCSV("drilldown.csv", filtered)}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> CSV
            </Button>
            <Button variant="outline" size="sm" onClick={() => exportPDF("drilldown.pdf", "Analytics Drilldown", filtered, hasFilter ? `Filters — drug: ${drugFilter ?? "—"}, species: ${speciesFilter ?? "—"}, purpose: ${purposeFilter ?? "—"}` : undefined)}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> PDF
            </Button>
            {hasFilter && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => { setDrugFilter(null); setSpeciesFilter(null); setPurposeFilter(null); }}
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>
        <div className="max-h-80 overflow-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Date</th>
                <th className="px-3 py-2 text-left font-semibold">Farm</th>
                <th className="px-3 py-2 text-left font-semibold">Drug</th>
                <th className="px-3 py-2 text-left font-semibold">Class</th>
                <th className="px-3 py-2 text-left font-semibold">Species</th>
                <th className="px-3 py-2 text-left font-semibold">Purpose</th>
                <th className="px-3 py-2 text-right font-semibold">Usage</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 50).map((r, i) => (
                <tr key={i} className={cn(i % 2 && "bg-muted/20")}>
                  <td className="px-3 py-2">{r.date}</td>
                  <td className="px-3 py-2 font-mono text-[11px]">{r.farm}</td>
                  <td className="px-3 py-2 font-medium">{r.drug}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.drugClass}</td>
                  <td className="px-3 py-2">{r.species}</td>
                  <td className="px-3 py-2">{r.purpose}</td>
                  <td className="px-3 py-2 text-right">{r.usage}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-3 py-8 text-center text-xs text-muted-foreground">No records match the current drilldown.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-card p-5">
        <h2 className="text-base font-semibold">Report Generation</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-4">
          <NativeSelect label="Report type" options={["Monthly Compliance", "MRL Violations", "Drug Usage Summary", "Farm Inspection", "AMR Risk Report"]} />
          <NativeSelect label="Format" options={["PDF", "Excel"]} />
          <NativeSelect label="Schedule" options={["One-time", "Weekly", "Monthly"]} />
          <div className="flex items-end">
            <Button className="w-full" onClick={() => toast.success("Report queued for generation.")}>
              <Download className="mr-1.5 h-4 w-4" /> Generate Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <button onClick={onClear} className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary">
      {label} <X className="h-3 w-3" />
    </button>
  );
}

function ChartCard({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        {hint && <span className="text-[10px] text-muted-foreground">{hint}</span>}
      </div>
      <div className="mt-3 h-64">{children}</div>
    </div>
  );
}

function NativeSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-[10px] uppercase tracking-wider">{label}</Label>
      <select className="h-9 w-full rounded-md border bg-background px-2 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
