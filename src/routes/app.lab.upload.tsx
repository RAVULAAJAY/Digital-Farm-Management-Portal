import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/app/lab/upload")({
  component: () => (
    <div className="mx-auto max-w-2xl">
      <PageHeader title="Upload Test Result" subtitle="Submit a new residue test result." />
      <div className="rounded-lg border bg-card p-6 text-sm text-muted-foreground">
        Use the upload form on the <Link to="/app/lab" className="text-primary hover:underline">dashboard</Link> sidebar.
        <div className="mt-4">
          <Button asChild><Link to="/app/lab">Open Dashboard</Link></Button>
        </div>
      </div>
    </div>
  ),
});
