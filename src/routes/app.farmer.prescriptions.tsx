import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";

const prescriptions = [
  { id: "RX-2025-0412", vet: "Dr. Anjali Sharma", animal: "BR-001", drug: "Oxytetracycline", issued: "15 Jun 2025", endsOn: "13 Jul 2025", status: "active" },
  { id: "RX-2025-0411", vet: "Dr. Anjali Sharma", animal: "BR-045", drug: "Enrofloxacin", issued: "18 Jun 2025", endsOn: "02 Jul 2025", status: "active" },
  { id: "RX-2025-0399", vet: "Dr. R. Patel", animal: "CH-007", drug: "Amoxicillin", issued: "05 May 2025", endsOn: "15 May 2025", status: "completed" },
];

export const Route = createFileRoute("/app/farmer/prescriptions")({
  component: () => (
    <div>
      <PageHeader title="Prescriptions" subtitle="Digital prescriptions issued by your veterinarian." />
      <div className="overflow-x-auto rounded-lg border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-2.5 text-left font-semibold">Prescription ID</th>
              <th className="px-4 py-2.5 text-left font-semibold">Veterinarian</th>
              <th className="px-4 py-2.5 text-left font-semibold">Animal</th>
              <th className="px-4 py-2.5 text-left font-semibold">Drug</th>
              <th className="px-4 py-2.5 text-left font-semibold">Issued</th>
              <th className="px-4 py-2.5 text-left font-semibold">Withdrawal Ends</th>
              <th className="px-4 py-2.5 text-left font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((p, i) => (
              <tr key={p.id} className={i % 2 ? "bg-muted/20" : ""}>
                <td className="px-4 py-2.5 font-medium">{p.id}</td>
                <td className="px-4 py-2.5">{p.vet}</td>
                <td className="px-4 py-2.5">{p.animal}</td>
                <td className="px-4 py-2.5">{p.drug}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{p.issued}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{p.endsOn}</td>
                <td className="px-4 py-2.5">
                  <StatusBadge tone={p.status === "active" ? "blue" : "green"}>
                    {p.status === "active" ? "Active" : "Completed"}
                  </StatusBadge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ),
});
