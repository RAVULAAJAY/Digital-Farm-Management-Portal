import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StatusBadge-B3Qlnitd.js
var import_jsx_runtime = require_jsx_runtime();
var styles = {
	red: "bg-destructive/10 text-destructive border-destructive/20",
	amber: "bg-warning/10 text-warning border-warning/20",
	green: "bg-success/10 text-success border-success/20",
	blue: "bg-info/10 text-info border-info/20",
	gray: "bg-muted text-muted-foreground border-border"
};
function StatusBadge({ tone, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium", styles[tone], className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 w-1.5 rounded-full", {
			"bg-destructive": tone === "red",
			"bg-warning": tone === "amber",
			"bg-success": tone === "green",
			"bg-info": tone === "blue",
			"bg-muted-foreground": tone === "gray"
		}) }), children]
	});
}
//#endregion
export { StatusBadge as t };
