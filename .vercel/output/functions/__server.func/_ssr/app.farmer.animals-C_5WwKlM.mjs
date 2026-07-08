import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as animals } from "./mock-data-BQe2QilD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.farmer.animals-C_5WwKlM.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "My Animals",
	subtitle: "All livestock registered to your farm."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "overflow-x-auto rounded-lg border bg-card",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Animal ID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Species"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Breed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Age"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Status"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-4 py-2.5 text-left font-semibold",
					children: "Last Treatment"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: animals.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/animals/$id",
						params: { id: a.id },
						className: "font-medium text-primary hover:underline",
						children: a.id
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5",
					children: a.species
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5 text-muted-foreground",
					children: a.breed
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5 text-muted-foreground",
					children: a.age
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: a.status,
						children: a.status === "red" ? "In Withdrawal" : a.status === "amber" ? "Ending Soon" : "Cleared"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-4 py-2.5 text-muted-foreground",
					children: a.lastTreatment
				})
			]
		}, a.id)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
