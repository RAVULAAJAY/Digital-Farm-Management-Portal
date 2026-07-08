import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.farms.index-BfQACqN2.js
var import_jsx_runtime = require_jsx_runtime();
var farms = [
	{
		id: "FARM-HR-2025-00112",
		name: "Kumar Dairy",
		owner: "Rajesh Kumar",
		type: "Dairy",
		district: "Karnal, HR",
		animals: 24
	},
	{
		id: "FARM-PB-2025-00088",
		name: "Devi Poultry",
		owner: "Sunita Devi",
		type: "Poultry",
		district: "Ludhiana, PB",
		animals: 3400
	},
	{
		id: "FARM-AP-2025-00410",
		name: "Rao Mixed Farm",
		owner: "Mohan Rao",
		type: "Mixed",
		district: "Guntur, AP",
		animals: 86
	},
	{
		id: "FARM-MH-2025-00231",
		name: "Patil Goshala",
		owner: "Mahesh Patil",
		type: "Dairy",
		district: "Pune, MH",
		animals: 142
	},
	{
		id: "FARM-TN-2025-00145",
		name: "Suresh Apiary",
		owner: "Suresh Iyer",
		type: "Aquaculture",
		district: "Coimbatore, TN",
		animals: 0
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "Farm Registry",
	subtitle: "Registered livestock farms across India.",
	actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/app/farms/register",
			children: "+ Register New Farm"
		})
	})
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "overflow-x-auto rounded-lg border bg-card",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Farm ID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Owner"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Type"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "District"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-right font-semibold",
					children: "Animals"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: farms.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-mono text-[11px]",
					children: f.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-medium",
					children: f.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: f.owner
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: f.type
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-muted-foreground",
					children: f.district
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-right",
					children: f.animals.toLocaleString()
				})
			]
		}, f.id)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
