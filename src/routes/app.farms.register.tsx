import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useT } from "@/lib/i18n";

interface AnimalRow { species: string; breed: string; count: string; age: string; idMethod: string }

export const Route = createFileRoute("/app/farms/register")({
  component: RegisterFarm,
});

function RegisterFarm() {
  const navigate = useNavigate();
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [farmId] = useState(() => `FARM-MH-2025-${String(Math.floor(Math.random() * 90000) + 10000)}`);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [locating, setLocating] = useState(false);
  const [animals, setAnimals] = useState<AnimalRow[]>([
    { species: "Cattle", breed: "Gir", count: "12", age: "3", idMethod: "Ear Tag" },
  ]);

  function getLocation() {
    setLocating(true);
    const useMock = () => {
      // Pune, MH fallback
      const mockLat = (18.5204 + (Math.random() - 0.5) * 0.05).toFixed(6);
      const mockLng = (73.8567 + (Math.random() - 0.5) * 0.05).toFixed(6);
      setLat(mockLat);
      setLng(mockLng);
      setLocating(false);
      toast.success(t("Mock location applied (Pune, MH)."));
    };
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      useMock();
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLat(pos.coords.latitude.toFixed(6));
        setLng(pos.coords.longitude.toFixed(6));
        setLocating(false);
        toast.success(t("GPS coordinates captured."));
      },
      () => {
        toast.message(t("GPS unavailable — using mock coordinates."));
        useMock();
      },
      { timeout: 6000 },
    );
  }

  function addAnimal() {
    setAnimals((a) => [...a, { species: "", breed: "", count: "", age: "", idMethod: "Ear Tag" }]);
  }
  function removeAnimal(i: number) {
    setAnimals((a) => a.filter((_, idx) => idx !== i));
  }


  if (submitted) {
    return (
      <div className="mx-auto max-w-xl py-12 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-success" />
        <h1 className="mt-4 text-2xl font-bold">{t("Farm registered successfully")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("Your unique Farm ID has been generated:")}</p>
        <p className="mt-3 inline-block rounded-md border bg-card px-4 py-2 font-mono text-lg font-semibold text-primary">{farmId}</p>
        <div className="mt-6 flex justify-center gap-2">
          <Button variant="outline" onClick={() => setSubmitted(false)}>{t("Register Another")}</Button>
          <Button onClick={() => navigate({ to: "/app/farms" })}>{t("View Registry")}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader title="Register New Farm" subtitle="Add a new livestock farm to the national registry." />

      <form
        className="space-y-6"
        onSubmit={(e) => { e.preventDefault(); toast.success(t("Farm registered.")); setSubmitted(true); }}
      >
        <Section title="Farm Details">
          <Field label="Farm Name" required />
          <SelectField label="Farm Type" options={["Dairy", "Poultry", "Swine", "Mixed", "Aquaculture"]} />
          <SelectField label="State" options={["Maharashtra", "Punjab", "Andhra Pradesh", "Madhya Pradesh", "Haryana", "Tamil Nadu"]} />
          <SelectField label="District" options={["Pune", "Mumbai", "Nagpur", "Nashik"]} />
          <Field label="Block" />
          <Field label="Village" />
          <Field label="Pincode" />
          <div className="space-y-1.5 sm:col-span-2">
            <Label>{t("GPS Coordinates")}</Label>
            <div className="flex gap-2">
              <Input placeholder={t("Latitude")} value={lat} onChange={(e) => setLat(e.target.value)} />
              <Input placeholder={t("Longitude")} value={lng} onChange={(e) => setLng(e.target.value)} />
              <Button type="button" variant="outline" onClick={getLocation} disabled={locating}>
                <MapPin className="mr-1 h-4 w-4" /> {locating ? t("Locating…") : t("Get My Location")}
              </Button>
            </div>
          </div>
        </Section>

        <Section title="Owner Details">
          <Field label="Full Name" required />
          <Field label="Aadhaar Number" placeholder="XXXX XXXX XXXX" />
          <Field label="Mobile" type="tel" />
          <Field label="Email" type="email" />
          <div className="space-y-1.5 sm:col-span-2">
            <Label>Upload Aadhaar (PDF/Image)</Label>
            <div className="rounded-md border-2 border-dashed p-4 text-center text-xs text-muted-foreground">
              Click to upload file
            </div>
          </div>
        </Section>

        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-base font-semibold">Livestock Census</h2>
            <Button type="button" variant="outline" size="sm" onClick={addAnimal}>
              <Plus className="mr-1 h-3 w-3" /> Add Row
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Species</th>
                  <th className="px-3 py-2 text-left font-semibold">Breed</th>
                  <th className="px-3 py-2 text-left font-semibold">Count</th>
                  <th className="px-3 py-2 text-left font-semibold">Avg Age (yr)</th>
                  <th className="px-3 py-2 text-left font-semibold">ID Method</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {animals.map((a, i) => (
                  <tr key={i}>
                    <td className="p-2"><Input value={a.species} onChange={(e) => updateRow(setAnimals, i, "species", e.target.value)} /></td>
                    <td className="p-2"><Input value={a.breed} onChange={(e) => updateRow(setAnimals, i, "breed", e.target.value)} /></td>
                    <td className="p-2"><Input type="number" value={a.count} onChange={(e) => updateRow(setAnimals, i, "count", e.target.value)} /></td>
                    <td className="p-2"><Input type="number" value={a.age} onChange={(e) => updateRow(setAnimals, i, "age", e.target.value)} /></td>
                    <td className="p-2">
                      <select className="h-9 w-full rounded-md border bg-background px-2 text-sm" value={a.idMethod} onChange={(e) => updateRow(setAnimals, i, "idMethod", e.target.value)}>
                        <option>Ear Tag</option><option>RFID</option><option>Tattoo</option>
                      </select>
                    </td>
                    <td className="p-2 text-right">
                      <button type="button" onClick={() => removeAnimal(i)} className="text-destructive hover:opacity-70">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => navigate({ to: "/app/farms" })}>{t("Cancel")}</Button>
          <Button type="submit">{t("Register Farm")}</Button>
        </div>
      </form>
    </div>
  );
}

function updateRow<T>(setter: React.Dispatch<React.SetStateAction<T[]>>, i: number, key: keyof T, value: T[keyof T]) {
  setter((rows) => rows.map((r, idx) => (idx === i ? { ...r, [key]: value } : r)));
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="border-b p-4"><h2 className="text-base font-semibold"><TSpan k={title} /></h2></div>
      <div className="grid gap-4 p-4 sm:grid-cols-2">{children}</div>
    </div>
  );
}

function Field({ label, required, ...rest }: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <Label><TSpan k={label} />{required && <span className="text-destructive"> *</span>}</Label>
      <Input required={required} {...rest} />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-1.5">
      <Label><TSpan k={label} /></Label>
      <select className="h-9 w-full rounded-md border bg-background px-2 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function TSpan({ k }: { k: string }) {
  const t = useT();
  return <>{t(k)}</>;
}
