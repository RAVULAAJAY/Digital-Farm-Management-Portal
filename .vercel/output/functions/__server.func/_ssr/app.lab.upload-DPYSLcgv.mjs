import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.lab.upload-DPYSLcgv.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-2xl",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Upload Test Result",
		subtitle: "Submit a new residue test result."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-6 text-sm text-muted-foreground",
		children: [
			"Use the upload form on the ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/app/lab",
				className: "text-primary hover:underline",
				children: "dashboard"
			}),
			" sidebar.",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app/lab",
						children: "Open Dashboard"
					})
				})
			})
		]
	})]
});
//#endregion
export { SplitComponent as component };
