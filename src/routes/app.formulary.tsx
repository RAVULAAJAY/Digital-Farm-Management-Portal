import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Input } from "@/components/ui/input";
import { drugs } from "@/lib/mock-data";

export const Route = createFileRoute("/app/formulary")({
  component: Formulary,
});

function Formulary() {
  const [q, setQ] = useState("");
  const [klass, setKlass] = useState("All");
  const classes = useMemo(() => ["All", ...new Set(drugs.map((d) => d.class))], []);
  const filtered = drugs.filter(
    (d) => (klass === "All" || d.class === klass) &&
           (q === "" || d.name.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div>
      <PageHeader title="Approved Antimicrobial Formulary" subtitle="National database of approved, restricted, and banned veterinary antimicrobials." />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Input placeholder="Search drug…" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-xs" />
        <select value={klass} onChange={(e) => setKlass(e.target.value)} className="h-9 rounded-md border bg-background px-2 text-sm">
          {classes.map((c) => <option key={c}>{c}</option>)}
        </select>
        <span className="text-xs text-muted-foreground">{filtered.length} drugs</span>
      </div>

      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Drug Name</th>
              <th className="px-3 py-2.5 text-left font-semibold">Class</th>
              <th className="px-3 py-2.5 text-left font-semibold">Approved For</th>
              <th className="px-3 py-2.5 text-left font-semibold">Max Dose</th>
              <th className="px-3 py-2.5 text-right font-semibold">WP Meat (d)</th>
              <th className="px-3 py-2.5 text-right font-semibold">WP Milk (d)</th>
              <th className="px-3 py-2.5 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <tr key={d.name} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5 font-medium">{d.name}</td>
                <td className="px-3 py-2.5">{d.class}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{d.species.join(", ")}</td>
                <td className="px-3 py-2.5">{d.maxDose}</td>
                <td className="px-3 py-2.5 text-right">{d.wpMeat || "—"}</td>
                <td className="px-3 py-2.5 text-right">{d.wpMilk || "—"}</td>
                <td className="px-3 py-2.5">
                  <StatusBadge tone={d.status === "Approved" ? "green" : d.status === "Restricted" ? "amber" : "red"}>
                    {d.status}
                  </StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
