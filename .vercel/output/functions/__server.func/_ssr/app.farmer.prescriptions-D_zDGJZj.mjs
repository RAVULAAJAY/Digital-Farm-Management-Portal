import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.farmer.prescriptions-D_zDGJZj.js
var import_jsx_runtime = require_jsx_runtime();
var prescriptions = [
	{
		id: "RX-2025-0412",
		vet: "Dr. Anjali Sharma",
		animal: "BR-001",
		drug: "Oxytetracycline",
		issued: "15 Jun 2025",
		endsOn: "13 Jul 2025",
		status: "active"
	},
	{
		id: "RX-2025-0411",
		vet: "Dr. Anjali Sharma",
		animal: "BR-045",
		drug: "Enrofloxacin",
		issued: "18 Jun 2025",
		endsOn: "02 Jul 2025",
		status: "active"
	},
	{
		id: "RX-2025-0399",
		vet: "Dr. R. Patel",
		animal: "CH-007",
		drug: "Amoxicillin",
		issued: "05 May 2025",
		endsOn: "15 May 2025",
		status: "completed"
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "Prescriptions",
	subtitle: "Digital prescriptions issued by your veterinarian."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "overflow-x-auto rounded-lg border bg-card",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Prescription ID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Veterinarian"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Animal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Drug"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Issued"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Withdrawal Ends"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Status"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: prescriptions.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5 font-medium",
					children: p.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5",
					children: p.vet
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5",
					children: p.animal
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5",
					children: p.drug
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5 text-muted-foreground",
					children: p.issued
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5 text-muted-foreground",
					children: p.endsOn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: p.status === "active" ? "blue" : "green",
						children: p.status === "active" ? "Active" : "Completed"
					})
				})
			]
		}, p.id)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
