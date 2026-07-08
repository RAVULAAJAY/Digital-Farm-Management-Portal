import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { G as TriangleAlert, W as Activity, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatCard } from "./StatCard-nNdbkh3C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.vet.compliance-BiSRTWTx.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Compliance Tracker",
		subtitle: "Patient and farm compliance overview."
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
				label: "Compliant Patients",
				value: 42,
				icon: ShieldCheck,
				tone: "success"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
				label: "Pending Review",
				value: 6,
				icon: Activity,
				tone: "warning"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
				label: "Non-Compliant",
				value: 3,
				icon: TriangleAlert,
				tone: "danger"
			})
		]
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-6 rounded-lg border bg-card p-6 text-sm text-muted-foreground",
		children: "Detailed compliance breakdowns by farm, drug class, and treatment purpose will appear here."
	})
] });
//#endregion
export { SplitComponent as component };
