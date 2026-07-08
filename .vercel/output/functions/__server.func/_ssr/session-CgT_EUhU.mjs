import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-CgT_EUhU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "dfmp.session";
var defaultName = {
	farmer: "Rajesh Kumar",
	vet: "Dr. Anjali Sharma",
	regulator: "Vikram Singh",
	lab: "Priya Menon",
	admin: "S. Narayanan"
};
function getSession() {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function setSession(role, username) {
	const s = {
		role,
		name: defaultName[role],
		username: username || role
	};
	window.localStorage.setItem(KEY, JSON.stringify(s));
	return s;
}
function clearSession() {
	window.localStorage.removeItem(KEY);
}
function useSession() {
	const [s, setS] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setS(getSession());
	}, []);
	return s;
}
//#endregion
export { useSession as i, getSession as n, setSession as r, clearSession as t };
