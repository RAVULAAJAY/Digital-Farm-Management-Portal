import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.admin.users-BRIMbV04.js
var import_jsx_runtime = require_jsx_runtime();
var users = [
	{
		name: "Rajesh Kumar",
		role: "Farmer",
		state: "Haryana",
		status: "active"
	},
	{
		name: "Dr. Anjali Sharma",
		role: "Veterinarian",
		state: "Maharashtra",
		status: "active"
	},
	{
		name: "Vikram Singh",
		role: "Regulatory Officer",
		state: "Punjab",
		status: "active"
	},
	{
		name: "Priya Menon",
		role: "Lab Technician",
		state: "Karnataka",
		status: "active"
	},
	{
		name: "Mahesh Patil",
		role: "Farmer",
		state: "Maharashtra",
		status: "suspended"
	}
];
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
	title: "User Management",
	subtitle: "Manage portal users across roles."
}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "overflow-x-auto rounded-lg border bg-card",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
			className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Role"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "State"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "px-3 py-2.5 text-left font-semibold",
					children: "Status"
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: users.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: i % 2 ? "bg-muted/20" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5 font-medium",
					children: u.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: u.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: u.state
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "px-3 py-2.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: u.status === "active" ? "green" : "red",
						children: u.status
					})
				})
			]
		}, i)) })]
	})
})] });
//#endregion
export { SplitComponent as component };
