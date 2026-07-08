import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { _ as vetPatients } from "./mock-data-BQe2QilD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.vet.patients-Cb3hxAkd.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "My Patients",
	subtitle: "All animals under your veterinary care."
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
					children: "Farmer"
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
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Issued"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Withdrawal Ends"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Status"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: vetPatients.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-mono text-xs",
					children: p.farmId
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: p.farmer
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/animals/$id",
						params: { id: p.animal },
						className: "text-primary hover:underline",
						children: p.animal
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-muted-foreground",
					children: p.drug
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-muted-foreground",
					children: p.issued
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 text-muted-foreground",
					children: p.endsOn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: p.status === "compliant" ? "green" : p.status === "pending" ? "amber" : "red",
						children: p.status === "compliant" ? "Compliant" : p.status === "pending" ? "Pending" : "Non-Compliant"
					})
				})
			]
		}, i)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
