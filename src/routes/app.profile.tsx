import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { useSession } from "@/lib/session";
import { ROLE_LABELS } from "@/lib/mock-data";

export const Route = createFileRoute("/app/profile")({
  component: () => {
    const s = useSession();
    if (!s) return null;
    return (
      <div className="mx-auto max-w-2xl">
        <PageHeader title="Profile" subtitle="Your account details and role." />
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
              {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div>
              <h2 className="text-xl font-bold">{s.name}</h2>
              <p className="text-sm text-muted-foreground">{ROLE_LABELS[s.role]}</p>
            </div>
          </div>
          <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
            <Field label="Username" value={s.username} />
            <Field label="Role" value={ROLE_LABELS[s.role]} />
            <Field label="Mobile" value="+91 98XXX XXX42" />
            <Field label="Email" value={`${s.username}@example.gov.in`} />
            <Field label="State" value="Haryana" />
            <Field label="Aadhaar" value="XXXX XXXX 4892" />
          </dl>
        </div>
      </div>
    );
  },
});

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border bg-muted/30 p-3">
      <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 text-sm font-medium">{value}</dd>
    </div>
  );
}
