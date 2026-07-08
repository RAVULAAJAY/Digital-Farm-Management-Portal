import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as notifications } from "./mock-data-BQe2QilD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-store-BbP5u6Ss.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var N_KEY = "dfmp.notifs";
var P_KEY = "dfmp.notif.prefs";
var DEFAULT_PREFS = {
	urgent: true,
	warning: true,
	cleared: true,
	treatments: true,
	tests: true,
	timeline: true
};
function seedNotifs() {
	return notifications.map((n, i) => ({
		id: `N-${i + 1}`,
		type: n.type,
		title: n.title,
		body: n.body,
		animalId: n.animalId,
		tab: n.tab,
		read: false,
		timestamp: (/* @__PURE__ */ new Date(Date.now() - i * 36e5)).toISOString()
	}));
}
function readNotifs() {
	if (typeof window === "undefined") return seedNotifs();
	try {
		const raw = window.localStorage.getItem(N_KEY);
		if (raw) return JSON.parse(raw);
	} catch {}
	const seeded = seedNotifs();
	window.localStorage.setItem(N_KEY, JSON.stringify(seeded));
	return seeded;
}
function writeNotifs(n) {
	if (typeof window !== "undefined") window.localStorage.setItem(N_KEY, JSON.stringify(n));
}
function getPrefs() {
	if (typeof window === "undefined") return DEFAULT_PREFS;
	try {
		const raw = window.localStorage.getItem(P_KEY);
		if (raw) return {
			...DEFAULT_PREFS,
			...JSON.parse(raw)
		};
	} catch {}
	return DEFAULT_PREFS;
}
function savePrefs(p) {
	if (typeof window !== "undefined") window.localStorage.setItem(P_KEY, JSON.stringify(p));
	window.dispatchEvent(new Event("dfmp:notifs"));
}
var subs = /* @__PURE__ */ new Set();
function emit() {
	if (typeof window !== "undefined") window.dispatchEvent(new Event("dfmp:notifs"));
	subs.forEach((fn) => fn());
}
function useNotifications() {
	const [items, setItems] = (0, import_react.useState)([]);
	const [prefs, setPrefsState] = (0, import_react.useState)(DEFAULT_PREFS);
	(0, import_react.useEffect)(() => {
		const refresh = () => {
			setItems(readNotifs());
			setPrefsState(getPrefs());
		};
		refresh();
		const fn = () => refresh();
		subs.add(fn);
		window.addEventListener("dfmp:notifs", fn);
		return () => {
			subs.delete(fn);
			window.removeEventListener("dfmp:notifs", fn);
		};
	}, []);
	const visible = items.filter((n) => prefs[n.type] && prefs[n.tab]);
	return {
		items: visible,
		allItems: items,
		prefs,
		unreadCount: visible.filter((n) => !n.read).length,
		setPrefs: (p) => {
			savePrefs(p);
			setPrefsState(p);
		},
		markRead: (id, read = true) => {
			const next = readNotifs().map((n) => n.id === id ? {
				...n,
				read
			} : n);
			writeNotifs(next);
			setItems(next);
			emit();
		},
		markAllRead: () => {
			const next = readNotifs().map((n) => ({
				...n,
				read: true
			}));
			writeNotifs(next);
			setItems(next);
			emit();
		}
	};
}
//#endregion
export { useNotifications as t };
