import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/app/admin/settings")({
  component: () => (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="System Settings" subtitle="Portal-wide configuration." />
      <div className="space-y-3 rounded-lg border bg-card p-6">
        {[
          ["Email Notifications", "Send alerts to officers when MRL violations are detected."],
          ["Auto-Generate Monthly Reports", "Schedule monthly compliance reports for all states."],
          ["Public AMU Dashboard", "Expose anonymized AMU stats on the public website."],
          ["Two-Factor Authentication", "Require 2FA for all admin and regulator accounts."],
        ].map(([title, desc]) => (
          <div key={title} className="flex items-start justify-between gap-4 rounded-md border p-4">
            <div>
              <Label className="text-sm font-semibold">{title}</Label>
              <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
            </div>
            <Switch defaultChecked />
          </div>
        ))}
      </div>
    </div>
  ),
});
