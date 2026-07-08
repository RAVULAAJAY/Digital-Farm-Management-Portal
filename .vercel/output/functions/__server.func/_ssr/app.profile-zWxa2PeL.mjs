import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as ROLE_LABELS } from "./mock-data-BQe2QilD.mjs";
import { i as useSession } from "./session-CgT_EUhU.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.profile-zWxa2PeL.js
var import_jsx_runtime = require_jsx_runtime();
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border bg-muted/30 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 text-sm font-medium",
			children: value
		})]
	});
}
var SplitComponent = () => {
	const s = useSession();
	if (!s) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Profile",
			subtitle: "Your account details and role."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border bg-card p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground",
					children: s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: s.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: ROLE_LABELS[s.role]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Username",
						value: s.username
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Role",
						value: ROLE_LABELS[s.role]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Mobile",
						value: "+91 98XXX XXX42"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						value: `${s.username}@example.gov.in`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "State",
						value: "Haryana"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Aadhaar",
						value: "XXXX XXXX 4892"
					})
				]
			})]
		})]
	});
};
//#endregion
export { SplitComponent as component };
