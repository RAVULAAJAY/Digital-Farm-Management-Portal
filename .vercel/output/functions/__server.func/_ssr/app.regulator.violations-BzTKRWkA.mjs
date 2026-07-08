import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as mrlViolations } from "./mock-data-BQe2QilD.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.regulator.violations-BzTKRWkA.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "MRL Violations",
	subtitle: "Confirmed residue violations requiring follow-up."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "overflow-x-auto rounded-lg border bg-card",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Farm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Animal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Drug"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-right font-semibold",
					children: "Residue"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-right font-semibold",
					children: "MRL Limit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Status"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: mrlViolations.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-mono text-xs",
					children: v.farm
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: v.animal
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: v.drug
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-right font-semibold text-destructive",
					children: v.residue
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-right text-muted-foreground",
					children: v.limit
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "red",
						children: v.status
					})
				})
			]
		}, i)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
