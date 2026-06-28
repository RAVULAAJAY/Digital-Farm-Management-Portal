import { useEffect, useState } from "react";
import { notifications as SEED_NOTIFS } from "./mock-data";

export type NotifType = "urgent" | "warning" | "cleared";

export interface NotifItem {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  animalId: string;
  tab: "treatments" | "tests" | "timeline";
  read: boolean;
  timestamp: string;
}

export interface NotifPrefs {
  urgent: boolean;
  warning: boolean;
  cleared: boolean;
  treatments: boolean;
  tests: boolean;
  timeline: boolean;
}

const N_KEY = "dfmp.notifs";
const P_KEY = "dfmp.notif.prefs";

const DEFAULT_PREFS: NotifPrefs = {
  urgent: true, warning: true, cleared: true,
  treatments: true, tests: true, timeline: true,
};

function seedNotifs(): NotifItem[] {
  return SEED_NOTIFS.map((n, i) => ({
    id: `N-${i + 1}`,
    type: n.type as NotifType,
    title: n.title,
    body: n.body,
    animalId: n.animalId,
    tab: n.tab,
    read: false,
    timestamp: new Date(Date.now() - i * 3600_000).toISOString(),
  }));
}

function readNotifs(): NotifItem[] {
  if (typeof window === "undefined") return seedNotifs();
  try {
    const raw = window.localStorage.getItem(N_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  const seeded = seedNotifs();
  window.localStorage.setItem(N_KEY, JSON.stringify(seeded));
  return seeded;
}

function writeNotifs(n: NotifItem[]) {
  if (typeof window !== "undefined") window.localStorage.setItem(N_KEY, JSON.stringify(n));
}

export function getPrefs(): NotifPrefs {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try {
    const raw = window.localStorage.getItem(P_KEY);
    if (raw) return { ...DEFAULT_PREFS, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return DEFAULT_PREFS;
}

export function savePrefs(p: NotifPrefs) {
  if (typeof window !== "undefined") window.localStorage.setItem(P_KEY, JSON.stringify(p));
  window.dispatchEvent(new Event("dfmp:notifs"));
}

const subs = new Set<() => void>();
function emit() {
  if (typeof window !== "undefined") window.dispatchEvent(new Event("dfmp:notifs"));
  subs.forEach((fn) => fn());
}

export function useNotifications() {
  const [items, setItems] = useState<NotifItem[]>([]);
  const [prefs, setPrefsState] = useState<NotifPrefs>(DEFAULT_PREFS);

  useEffect(() => {
    const refresh = () => { setItems(readNotifs()); setPrefsState(getPrefs()); };
    refresh();
    const fn = () => refresh();
    subs.add(fn);
    window.addEventListener("dfmp:notifs", fn);
    return () => { subs.delete(fn); window.removeEventListener("dfmp:notifs", fn); };
  }, []);

  const visible = items.filter((n) => prefs[n.type] && prefs[n.tab]);

  return {
    items: visible,
    allItems: items,
    prefs,
    unreadCount: visible.filter((n) => !n.read).length,
    setPrefs: (p: NotifPrefs) => { savePrefs(p); setPrefsState(p); },
    markRead: (id: string, read = true) => {
      const next = readNotifs().map((n) => (n.id === id ? { ...n, read } : n));
      writeNotifs(next); setItems(next); emit();
    },
    markAllRead: () => {
      const next = readNotifs().map((n) => ({ ...n, read: true }));
      writeNotifs(next); setItems(next); emit();
    },
  };
}
