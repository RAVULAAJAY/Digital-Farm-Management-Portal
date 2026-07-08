import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as useT } from "./i18n-CiAdQ8--.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatCard-nNdbkh3C.js
var import_jsx_runtime = require_jsx_runtime();
function StatCard({ label, value, hint, icon: Icon, tone = "default" }) {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border bg-card p-4 shadow-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
						children: t(label)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-2xl font-bold text-foreground",
						children: value
					}),
					hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: t(hint)
					})
				]
			}), Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("rounded-md p-2", {
					default: "bg-primary/10 text-primary",
					success: "bg-success/10 text-success",
					warning: "bg-warning/10 text-warning",
					danger: "bg-destructive/10 text-destructive",
					info: "bg-info/10 text-info"
				}[tone]),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			})]
		})
	});
}
//#endregion
export { StatCard as t };
