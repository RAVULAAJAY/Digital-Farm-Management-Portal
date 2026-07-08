import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.regulator.inspections-CBnIYvvv.js
var import_jsx_runtime = require_jsx_runtime();
var inspections = [
	{
		farm: "FARM-MH-2025-00231",
		farmer: "Mahesh Patil",
		district: "Pune, MH",
		scheduled: "28 Jun 2025",
		inspector: "V. Rao",
		status: "scheduled"
	},
	{
		farm: "FARM-PB-2025-00088",
		farmer: "Sunita Devi",
		district: "Ludhiana, PB",
		scheduled: "25 Jun 2025",
		inspector: "S. Sandhu",
		status: "overdue"
	},
	{
		farm: "FARM-HR-2025-00112",
		farmer: "Rajesh Kumar",
		district: "Karnal, HR",
		scheduled: "02 Jul 2025",
		inspector: "V. Singh",
		status: "scheduled"
	},
	{
		farm: "FARM-AP-2025-00410",
		farmer: "Mohan Rao",
		district: "Guntur, AP",
		scheduled: "18 Jun 2025",
		inspector: "K. Reddy",
		status: "completed"
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "Inspection Schedule",
	subtitle: "Upcoming and overdue farm inspections."
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
					children: "Farmer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "District"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Scheduled"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Inspector"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Status"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: inspections.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-mono text-xs",
					children: r.farm
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: r.farmer
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: r.district
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: r.scheduled
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: r.inspector
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: r.status === "completed" ? "green" : r.status === "overdue" ? "red" : "blue",
						children: r.status
					})
				})
			]
		}, r.farm)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
