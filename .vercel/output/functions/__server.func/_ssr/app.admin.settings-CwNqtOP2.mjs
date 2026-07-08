import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.admin.settings-CwNqtOP2.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-2xl",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "System Settings",
		subtitle: "Portal-wide configuration."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3 rounded-lg border bg-card p-6",
		children: [
			["Email Notifications", "Send alerts to officers when MRL violations are detected."],
			["Auto-Generate Monthly Reports", "Schedule monthly compliance reports for all states."],
			["Public AMU Dashboard", "Expose anonymized AMU stats on the public website."],
			["Two-Factor Authentication", "Require 2FA for all admin and regulator accounts."]
		].map(([title, desc]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-4 rounded-md border p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "text-sm font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: desc
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, { defaultChecked: true })]
		}, title))
	})]
});
//#endregion
export { SplitComponent as component };
