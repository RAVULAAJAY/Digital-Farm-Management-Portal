import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { c as labResults } from "./mock-data-BQe2QilD.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.lab.history-DgSaiwyd.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "Test History",
	subtitle: "All residue tests you have uploaded."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "overflow-x-auto rounded-lg border bg-card",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Test ID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Farm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Sample"
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
					children: "MRL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Status"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Date"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: labResults.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-mono text-[11px]",
					children: r.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-mono text-[11px]",
					children: r.farm
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: r.sample
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: r.drug
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-right",
					children: r.residue
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-right text-muted-foreground",
					children: r.limit
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: r.status === "PASS" ? "green" : "red",
						children: r.status
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-muted-foreground",
					children: r.date
				})
			]
		}, r.id)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
