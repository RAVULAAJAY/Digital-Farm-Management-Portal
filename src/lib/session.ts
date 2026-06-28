import { useEffect, useState } from "react";
import type { Role } from "./mock-data";

const KEY = "dfmp.session";

export interface Session {
  role: Role;
  name: string;
  username: string;
}

const defaultName: Record<Role, string> = {
  farmer: "Rajesh Kumar",
  vet: "Dr. Anjali Sharma",
  regulator: "Vikram Singh",
  lab: "Priya Menon",
  admin: "S. Narayanan",
};

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setSession(role: Role, username?: string): Session {
  const s: Session = { role, name: defaultName[role], username: username || role };
  window.localStorage.setItem(KEY, JSON.stringify(s));
  return s;
}

export function clearSession() {
  window.localStorage.removeItem(KEY);
}

export function useSession(): Session | null {
  const [s, setS] = useState<Session | null>(null);
  useEffect(() => {
    setS(getSession());
  }, []);
  return s;
}
