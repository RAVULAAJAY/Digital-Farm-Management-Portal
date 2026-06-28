import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNotifications, type NotifPrefs } from "@/lib/notifications-store";
import { Switch } from "@/components/ui/switch";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/app/alerts")({
  component: AlertsPage,
});

function AlertsPage() {
  const t = useT();
  const { allItems, items, prefs, setPrefs, markRead, markAllRead } = useNotifications();

  const togglePref = (key: keyof NotifPrefs) => setPrefs({ ...prefs, [key]: !prefs[key] });

  const hidden = allItems.length - items.length;

  return (
    <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <PageHeader
          title={t("Alerts & Notifications")}
          subtitle="Real-time withdrawal period and compliance alerts."
          actions={<Button variant="outline" size="sm" onClick={markAllRead}>{t("Mark all read")}</Button>}
        />
        {hidden > 0 && (
          <p className="mb-3 rounded-md border border-muted bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
            {hidden} notification{hidden === 1 ? "" : "s"} hidden by your preferences.
          </p>
        )}
        <div className="space-y-3">
          {items.length === 0 && (
            <p className="rounded-lg border bg-card p-6 text-center text-sm text-muted-foreground">
              No notifications. Adjust preferences to see more.
            </p>
          )}
          {items.map((n) => {
            const tone =
              n.type === "urgent"
                ? "border-destructive/30 bg-destructive/5"
                : n.type === "warning"
                  ? "border-warning/30 bg-warning/5"
                  : "border-success/30 bg-success/5";
            const icon = n.type === "urgent" ? "🔴" : n.type === "warning" ? "🟡" : "🟢";
            return (
              <div key={n.id} className={cn("rounded-lg border p-4 transition", tone, n.read && "opacity-60")}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold">
                      {!n.read && <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary align-middle" />}
                      {icon} {n.title}
                    </p>
                    <p className="mt-1 text-sm text-foreground/80">{n.body}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">
                      Deep link → {n.animalId} · {n.tab} · {new Date(n.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-1.5">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/app/animals/$id" params={{ id: n.animalId }} search={{ tab: n.tab }}>
                        {t("View")}
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => markRead(n.id, !n.read)} className="h-7 text-[11px]">
                      {n.read ? t("Mark as unread") : t("Mark as read")}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-lg border bg-card p-4">
          <h2 className="text-base font-semibold">{t("Notification Preferences")}</h2>
          <p className="mt-1 text-xs text-muted-foreground">Choose which alerts and deep-link types reach you.</p>

          <div className="mt-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">By severity</p>
            <PrefRow label="🔴 Urgent (withdrawal breach)" checked={prefs.urgent} onChange={() => togglePref("urgent")} />
            <PrefRow label="🟡 Warnings" checked={prefs.warning} onChange={() => togglePref("warning")} />
            <PrefRow label="🟢 Cleared" checked={prefs.cleared} onChange={() => togglePref("cleared")} />
          </div>

          <div className="mt-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">By deep-link target</p>
            <PrefRow label="Treatment alerts" checked={prefs.treatments} onChange={() => togglePref("treatments")} />
            <PrefRow label="Lab test alerts" checked={prefs.tests} onChange={() => togglePref("tests")} />
            <PrefRow label="Timeline alerts" checked={prefs.timeline} onChange={() => togglePref("timeline")} />
          </div>
        </div>
      </aside>
    </div>
  );
}

function PrefRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center justify-between py-1.5 text-sm">
      <span>{label}</span>
      <Switch checked={checked} onCheckedChange={onChange} />
    </label>
  );
}
