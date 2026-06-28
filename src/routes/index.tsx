import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Beef, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { setSession } from "@/lib/session";
import { ROLE_HOMES, ROLE_LABELS, type Role } from "@/lib/mock-data";
import { toast } from "sonner";
import { LANG_LABELS, useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Login · Digital Farm Management Portal" },
      { name: "description", content: "Login to the Government of India's AMU & MRL monitoring portal for livestock farms." },
    ],
  }),
  component: LandingLogin,
});

function LandingLogin() {
  const navigate = useNavigate();
  const { lang, setLang, t } = useI18n();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("farmer");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password) {
      toast.error("Please enter your username and password.");
      return;
    }
    setSession(role, username);
    toast.success(`${t("Welcome,")} ${t(ROLE_LABELS[role])}`);
    navigate({ to: ROLE_HOMES[role] });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="bg-gov-strip text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 text-[11px] font-medium tracking-wide">
          <span>भारत सरकार | Government of India · Ministry of Fisheries, Animal Husbandry & Dairying</span>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="rounded bg-transparent text-[11px] text-primary-foreground outline-none"
          >
            {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
              <option key={l} value={l} className="text-foreground">{LANG_LABELS[l]}</option>
            ))}
          </select>
        </div>
      </div>

      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Beef className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">DoAH&D · Government of India</p>
            <h1 className="text-lg font-bold leading-tight">{t("Department of Animal Husbandry & Dairying")}</h1>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Leaf className="h-3.5 w-3.5" /> {t("National AMU & MRL Monitoring")}
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight">
              {t("Digital Farm Management Portal")}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              {t("Antimicrobial Usage & Maximum Residue Limits monitoring system for India's livestock sector — tracking treatments, prescriptions, and residue compliance from farm to consumer.")}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <FeatureCard icon={ShieldCheck} title={t("Withdrawal compliance")} desc={t("Real-time tracking of treatment withdrawal periods to prevent residue contamination.")} />
              <FeatureCard icon={Beef} title={t("4.8 lakh farms")} desc={t("Registered livestock farms across 28 states reporting AMU data.")} />
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold">{t("Sign in")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("Access your role-based dashboard.")}</p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="role">{t("Role")}</Label>
                <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                  <SelectTrigger id="role"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(Object.keys(ROLE_LABELS) as Role[]).map((r) => (
                      <SelectItem key={r} value={r}>{t(ROLE_LABELS[r])}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="username">{t("Username")}</Label>
                <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="e.g. rajesh.kumar" />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password">{t("Password")}</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              </div>

              <Button type="submit" className="w-full">{t("Sign in")}</Button>
              <Button type="button" variant="outline" className="w-full">
                {t("Login with DigiLocker")}
              </Button>

              <p className="pt-1 text-center text-[11px] text-muted-foreground">
                {t("Demo portal — any username/password works. Choose any role to explore.")}
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-muted-foreground">
          Ministry of Fisheries, Animal Husbandry & Dairying · Government of India
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: typeof ShieldCheck; title: string; desc: string }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
    </div>
  );
}
