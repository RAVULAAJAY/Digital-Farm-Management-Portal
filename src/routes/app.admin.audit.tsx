import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, FileText } from "lucide-react";
import { getAuditEvents } from "@/lib/audit";
import { exportCSV, exportPDF } from "@/lib/export";

export const Route = createFileRoute("/app/admin/audit")({
  component: AuditPage,
});

function AuditPage() {
  const [q, setQ] = useState("");
  const events = useMemo(() => getAuditEvents(), []);
  const filtered = useMemo(() => {
    const t = q.toLowerCase().trim();
    if (!t) return events;
    return events.filter(
      (e) =>
        e.summary.toLowerCase().includes(t) ||
        e.actor.toLowerCase().includes(t) ||
        e.animalId?.toLowerCase().includes(t) ||
        e.farmId?.toLowerCase().includes(t) ||
        e.type.includes(t),
    );
  }, [q, events]);

  const rows = filtered.map((e) => ({
    Timestamp: new Date(e.timestamp).toLocaleString(),
    Type: e.type,
    Actor: e.actor,
    Animal: e.animalId ?? "—",
    Farm: e.farmId ?? "—",
    Summary: e.summary,
  }));

  return (
    <div>
      <PageHeader
        title="Audit Logs"
        subtitle="System-wide audit trail: AMU entries, prescriptions, status changes and QR links."
        actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => exportCSV("audit-trail.csv", rows)}>
              <Download className="mr-1.5 h-3.5 w-3.5" /> CSV
            </Button>
            <Button size="sm" onClick={() => exportPDF("audit-trail.pdf", "Audit Trail", rows)}>
              <FileText className="mr-1.5 h-3.5 w-3.5" /> PDF
            </Button>
          </div>
        }
      />

      <div className="mb-3 flex items-center gap-2">
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by actor, animal, farm, action…" className="max-w-sm" />
        <span className="text-xs text-muted-foreground">{filtered.length} of {events.length} events</span>
      </div>

      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold">Timestamp</th>
              <th className="px-3 py-2.5 text-left font-semibold">Type</th>
              <th className="px-3 py-2.5 text-left font-semibold">Actor</th>
              <th className="px-3 py-2.5 text-left font-semibold">Animal</th>
              <th className="px-3 py-2.5 text-left font-semibold">Farm</th>
              <th className="px-3 py-2.5 text-left font-semibold">Summary</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e, i) => (
              <tr key={e.id} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-3 py-2.5 font-mono text-[11px]">{new Date(e.timestamp).toLocaleString()}</td>
                <td className="px-3 py-2.5"><span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">{e.type.replace("_", " ")}</span></td>
                <td className="px-3 py-2.5">{e.actor}</td>
                <td className="px-3 py-2.5 font-mono text-[11px] text-muted-foreground">{e.animalId ?? "—"}</td>
                <td className="px-3 py-2.5 font-mono text-[11px] text-muted-foreground">{e.farmId ?? "—"}</td>
                <td className="px-3 py-2.5">{e.summary}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={6} className="px-3 py-8 text-center text-xs text-muted-foreground">No audit events match.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
