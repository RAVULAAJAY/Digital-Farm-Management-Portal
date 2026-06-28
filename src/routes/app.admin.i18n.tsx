import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  APP_KEYS, LANG_LABELS, getCoverage, useI18n, type Lang,
} from "@/lib/i18n";
import { CheckCircle2, AlertCircle, Languages, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { exportCSV } from "@/lib/export";

export const Route = createFileRoute("/app/admin/i18n")({
  component: I18nAuditPage,
});

// Best-effort: which route file each key first appears on. Used to give the
// user a clickable hint where the missing translation will show up.
const KEY_LOCATIONS: Record<string, string> = {
  "Sign in": "/", "Username": "/", "Password": "/", "Role": "/",
  "Login with DigiLocker": "/", "Welcome,": "/",
  "Dashboard": "AppShell", "My Animals": "AppShell", "Log Treatment": "AppShell",
  "Prescriptions": "AppShell", "Alerts": "AppShell", "Profile": "AppShell",
  "My Patients": "AppShell", "Issue Prescription": "AppShell",
  "Treatment Logs": "AppShell", "Compliance Tracker": "AppShell",
  "Analytics & Reports": "AppShell", "Farm Registry": "AppShell",
  "Inspection Schedule": "AppShell", "MRL Violations": "AppShell",
  "Upload Results": "AppShell", "Test History": "AppShell", "Drug Formulary": "AppShell",
  "National Dashboard": "AppShell", "User Management": "AppShell",
  "System Settings": "AppShell", "Reports": "AppShell", "Audit Logs": "AppShell",
  "Farmer Dashboard": "/app/farmer", "Veterinarian Dashboard": "/app/vet",
  "Regulatory Officer Dashboard": "/app/regulator",
  "Lab Technician Dashboard": "/app/lab",
  "Record Antimicrobial Usage": "/app/log-treatment",
  "Issue Veterinary Prescription": "/app/vet/issue",
  "Register New Farm": "/app/farms/register",
  "Upload Test Result": "/app/lab/upload",
  "Notification Preferences": "/app/alerts",
  "Audit Trail": "/app/admin/audit",
};

function I18nAuditPage() {
  const { lang, setLang } = useI18n();
  const [query, setQuery] = useState("");
  const [focusLang, setFocusLang] = useState<Lang>(lang === "en" ? "hi" : lang);

  const coverages = useMemo(() => {
    return (Object.keys(LANG_LABELS) as Lang[]).map((l) => ({
      lang: l,
      ...getCoverage(l),
    }));
  }, []);

  const focus = coverages.find((c) => c.lang === focusLang)!;
  const filteredMissing = focus.missing.filter((k) => k.toLowerCase().includes(query.toLowerCase()));

  function exportMissing() {
    exportCSV(`missing-${focusLang}.csv`, focus.missing.map((k) => ({
      key: k,
      english: k,
      [focusLang]: "",
      location: KEY_LOCATIONS[k] ?? "shared",
    })));
  }

  return (
    <div>
      <PageHeader
        title="i18n Audit"
        subtitle="Translation coverage across all routes, components and supported languages."
        actions={
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="h-9 rounded-md border bg-background px-3 text-sm"
          >
            {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
              <option key={l} value={l}>Preview: {LANG_LABELS[l]}</option>
            ))}
          </select>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {coverages.map((c) => {
          const pct = Math.round((c.translated / c.total) * 100);
          const tone = pct >= 95 ? "text-success" : pct >= 60 ? "text-warning" : "text-destructive";
          return (
            <button
              key={c.lang}
              onClick={() => setFocusLang(c.lang)}
              className={cn(
                "rounded-lg border bg-card p-4 text-left transition hover:shadow-md",
                focusLang === c.lang && "ring-2 ring-primary",
              )}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold">{LANG_LABELS[c.lang]}</p>
                <Languages className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className={cn("mt-2 text-2xl font-extrabold", tone)}>{pct}%</p>
              <p className="text-[11px] text-muted-foreground">{c.translated} / {c.total} keys</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn("h-full",
                    pct >= 95 ? "bg-success" : pct >= 60 ? "bg-warning" : "bg-destructive")}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border bg-card">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b p-4">
            <div>
              <h2 className="text-base font-semibold">
                Missing in {LANG_LABELS[focusLang]}{" "}
                <span className="text-xs font-normal text-muted-foreground">({focus.missing.length})</span>
              </h2>
              <p className="text-[11px] text-muted-foreground">
                These keys fall back to English. Click a row to jump to where it appears.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={exportMissing} disabled={focus.missing.length === 0}>
                <Download className="mr-1.5 h-3.5 w-3.5" /> Export CSV
              </Button>
            </div>
          </div>

          <div className="border-b p-3">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter missing keys…"
              className="max-w-md"
            />
          </div>

          <div className="max-h-[28rem] overflow-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-muted/70 text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">English key</th>
                  <th className="px-3 py-2 text-left font-semibold">Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredMissing.length === 0 && (
                  <tr><td colSpan={2} className="px-3 py-6 text-center text-xs text-muted-foreground">
                    {focus.missing.length === 0 ? "✓ Fully translated." : "No keys match your filter."}
                  </td></tr>
                )}
                {filteredMissing.map((k) => {
                  const loc = KEY_LOCATIONS[k];
                  const linkable = loc && loc.startsWith("/");
                  return (
                    <tr key={k} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-3 py-2 font-medium">{k}</td>
                      <td className="px-3 py-2 text-[11px] text-muted-foreground">
                        {linkable ? (
                          <a href={loc} className="text-primary hover:underline">{loc}</a>
                        ) : (
                          loc ?? "shared / multiple"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border bg-card p-4">
            <h3 className="text-sm font-semibold flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-success" /> Coverage report</h3>
            <ul className="mt-2 space-y-1 text-xs">
              <li><span className="text-muted-foreground">Total registered keys:</span> <span className="font-semibold">{APP_KEYS.length}</span></li>
              <li><span className="text-muted-foreground">Translated:</span> <span className="font-semibold text-success">{focus.translated}</span></li>
              <li><span className="text-muted-foreground">Missing (fallback to English):</span> <span className="font-semibold text-destructive">{focus.missing.length}</span></li>
              <li><span className="text-muted-foreground">Extra keys (in dict but unused):</span> <span className="font-semibold">{focus.extras.length}</span></li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-4 text-xs">
            <h3 className="text-sm font-semibold flex items-center gap-1.5">
              <AlertCircle className="h-4 w-4 text-info" /> How fallback works
            </h3>
            <p className="mt-2 text-muted-foreground">
              When a key is missing in the active language, the app renders the English source string instead of an empty space. Switching language is global via React context — every mounted component re-renders instantly.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-4 text-xs">
            <h3 className="text-sm font-semibold">Manual translation needed</h3>
            <p className="mt-2 text-muted-foreground">
              Use <span className="font-mono">Export CSV</span> to get the missing keys for the selected language, translate them, then paste back into <span className="font-mono">DICT.{focusLang}</span> in <span className="font-mono">src/lib/i18n.tsx</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
