import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Bell, LogOut, Menu, LayoutDashboard, Beef, FilePlus2, Pill, AlertTriangle,
  User, Stethoscope, FileSignature, ClipboardList, ShieldCheck, BarChart3,
  Upload, History, BookOpen, Globe, Users, Settings,
  ScrollText, Building2, Languages,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { clearSession, useSession } from "@/lib/session";
import { ROLE_LABELS, type Role } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANG_LABELS, useI18n, type Lang } from "@/lib/i18n";
import { useNotifications } from "@/lib/notifications-store";

type NavItem = { label: string; to: string; icon: typeof Bell };

const NAV: Record<Role, NavItem[]> = {
  farmer: [
    { label: "Dashboard", to: "/app/farmer", icon: LayoutDashboard },
    { label: "My Animals", to: "/app/farmer/animals", icon: Beef },
    { label: "Log Treatment", to: "/app/log-treatment", icon: FilePlus2 },
    { label: "Prescriptions", to: "/app/farmer/prescriptions", icon: Pill },
    { label: "Alerts", to: "/app/alerts", icon: AlertTriangle },
    { label: "Profile", to: "/app/profile", icon: User },
  ],
  vet: [
    { label: "Dashboard", to: "/app/vet", icon: LayoutDashboard },
    { label: "My Patients", to: "/app/vet/patients", icon: Stethoscope },
    { label: "Issue Prescription", to: "/app/vet/issue", icon: FileSignature },
    { label: "Treatment Logs", to: "/app/vet/logs", icon: ClipboardList },
    { label: "Compliance Tracker", to: "/app/vet/compliance", icon: ShieldCheck },
    { label: "Profile", to: "/app/profile", icon: User },
  ],
  regulator: [
    { label: "Dashboard", to: "/app/regulator", icon: LayoutDashboard },
    { label: "Analytics & Reports", to: "/app/regulator/analytics", icon: BarChart3 },
    { label: "Farm Registry", to: "/app/farms", icon: Building2 },
    { label: "Inspection Schedule", to: "/app/regulator/inspections", icon: ClipboardList },
    { label: "MRL Violations", to: "/app/regulator/violations", icon: AlertTriangle },
    { label: "Alerts", to: "/app/alerts", icon: Bell },
    { label: "Profile", to: "/app/profile", icon: User },
  ],
  lab: [
    { label: "Dashboard", to: "/app/lab", icon: LayoutDashboard },
    { label: "Upload Results", to: "/app/lab/upload", icon: Upload },
    { label: "Test History", to: "/app/lab/history", icon: History },
    { label: "Drug Formulary", to: "/app/formulary", icon: BookOpen },
    { label: "Profile", to: "/app/profile", icon: User },
  ],
  admin: [
    { label: "National Dashboard", to: "/app/admin", icon: Globe },
    { label: "User Management", to: "/app/admin/users", icon: Users },
    { label: "Farm Registry", to: "/app/farms", icon: Building2 },
    { label: "Drug Formulary", to: "/app/formulary", icon: BookOpen },
    { label: "System Settings", to: "/app/admin/settings", icon: Settings },
    { label: "Reports", to: "/app/regulator/analytics", icon: BarChart3 },
    { label: "Audit Logs", to: "/app/admin/audit", icon: ScrollText },
    { label: "i18n Audit", to: "/app/admin/i18n", icon: Languages },
  ],
};

export function AppShell({ children }: { children: ReactNode }) {
  const session = useSession();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { items: notifs, unreadCount, markRead, markAllRead } = useNotifications();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem("dfmp.session");
      if (!raw) navigate({ to: "/" });
    }
  }, [navigate]);

  const items = useMemo(() => (session ? NAV[session.role] : []), [session]);

  function handleLogout() {
    clearSession();
    navigate({ to: "/" });
  }

  if (!session) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading…
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="bg-gov-strip text-primary-foreground">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-1 text-[11px] font-medium tracking-wide">
          <span>भारत सरकार | Government of India · Ministry of Fisheries, Animal Husbandry & Dairying</span>
          <span className="hidden sm:inline">DoAH&D · {t("Digital Farm Management Portal")}</span>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b bg-card">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-3 px-4">
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <Beef className="h-4 w-4" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight">{t("Digital Farm Management Portal")}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("AMU & MRL Monitoring")}</p>
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="hidden md:block h-8 rounded border bg-background px-2 text-xs"
              aria-label="Language"
            >
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <option key={l} value={l}>{LANG_LABELS[l]}</option>
              ))}
            </select>

            <button
              onClick={() => setNotifOpen(true)}
              className="relative rounded-md p-2 hover:bg-muted"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                  {unreadCount}
                </span>
              )}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-md border px-2 py-1.5 hover:bg-muted">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {session.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-semibold leading-tight">{session.name}</p>
                    <p className="text-[10px] text-muted-foreground">{t(ROLE_LABELS[session.role])}</p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>{t("Signed in as")} {session.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate({ to: "/app/profile" })}>
                  <User className="mr-2 h-4 w-4" /> {t("Profile")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" /> {t("Logout")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1600px] flex-1">
        <aside className="hidden w-60 shrink-0 border-r bg-card lg:block">
          <nav className="sticky top-[88px] flex flex-col gap-0.5 p-3">
            <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {t(ROLE_LABELS[session.role])}
            </p>
            {items.map((item) => {
              const active = pathname === item.to || (item.to !== "/app/farmer" && pathname.startsWith(item.to));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-6">{children}</main>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="border-b p-4">
            <SheetTitle>{t(ROLE_LABELS[session.role])}</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-0.5 p-3">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <item.icon className="h-4 w-4" />
                {t(item.label)}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <Sheet open={notifOpen} onOpenChange={setNotifOpen}>
        <SheetContent side="right" className="w-full max-w-md p-0">
          <SheetHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <SheetTitle>{t("Notifications")}</SheetTitle>
              <div className="flex gap-3 text-xs">
                <button onClick={markAllRead} className="font-medium text-primary hover:underline">
                  {t("Mark all read")}
                </button>
                <Link
                  to="/app/alerts"
                  onClick={() => setNotifOpen(false)}
                  className="font-medium text-muted-foreground hover:text-foreground hover:underline"
                >
                  {t("Notification Preferences")}
                </Link>
              </div>
            </div>
          </SheetHeader>
          <div className="flex flex-col gap-2 p-4">
            {notifs.length === 0 && (
              <p className="py-6 text-center text-xs text-muted-foreground">No notifications match your preferences.</p>
            )}
            {notifs.map((n) => {
              const tone =
                n.type === "urgent"
                  ? "border-destructive/30 bg-destructive/5"
                  : n.type === "warning"
                    ? "border-warning/30 bg-warning/5"
                    : "border-success/30 bg-success/5";
              const icon = n.type === "urgent" ? "🔴" : n.type === "warning" ? "🟡" : "🟢";
              return (
                <div key={n.id} className={cn("rounded-lg border p-3", tone, n.read && "opacity-60")}>
                  <div className="flex items-start justify-between gap-2">
                    <button onClick={() => markRead(n.id, !n.read)} className="text-left">
                      <p className="text-sm font-semibold">{!n.read && <span className="mr-1 inline-block h-2 w-2 rounded-full bg-primary" />}{icon} {n.title}</p>
                      <p className="mt-0.5 text-xs text-foreground/80">{n.body}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">{n.read ? t("Mark as unread") : t("Mark as read")}</p>
                    </button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="shrink-0"
                      onClick={() => {
                        markRead(n.id, true);
                        setNotifOpen(false);
                        navigate({ to: "/app/animals/$id", params: { id: n.animalId }, search: { tab: n.tab } });
                      }}
                    >
                      {t("View")}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-[1600px] px-4 py-3 text-center text-[11px] text-muted-foreground">
          Ministry of Fisheries, Animal Husbandry & Dairying · Government of India
        </div>
      </footer>
    </div>
  );
}
