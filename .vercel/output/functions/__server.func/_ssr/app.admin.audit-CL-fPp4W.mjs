import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { D as Download, E as FileText } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as getAuditEvents } from "./audit-CwEdQxKq.mjs";
import { n as exportPDF, t as exportCSV } from "./export-CgPjC2sD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.admin.audit-CL-fPp4W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuditPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const events = (0, import_react.useMemo)(() => getAuditEvents(), []);
	const filtered = (0, import_react.useMemo)(() => {
		const t = q.toLowerCase().trim();
		if (!t) return events;
		return events.filter((e) => e.summary.toLowerCase().includes(t) || e.actor.toLowerCase().includes(t) || e.animalId?.toLowerCase().includes(t) || e.farmId?.toLowerCase().includes(t) || e.type.includes(t));
	}, [q, events]);
	const rows = filtered.map((e) => ({
		Timestamp: new Date(e.timestamp).toLocaleString(),
		Type: e.type,
		Actor: e.actor,
		Animal: e.animalId ?? "—",
		Farm: e.farmId ?? "—",
		Summary: e.summary
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Audit Logs",
			subtitle: "System-wide audit trail: AMU entries, prescriptions, status changes and QR links.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => exportCSV("audit-trail.csv", rows),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), " CSV"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					onClick: () => exportPDF("audit-trail.pdf", "Audit Trail", rows),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-1.5 h-3.5 w-3.5" }), " PDF"]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search by actor, animal, farm, action…",
				className: "max-w-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted-foreground",
				children: [
					filtered.length,
					" of ",
					events.length,
					" events"
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-lg border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2.5 text-left font-semibold",
							children: "Timestamp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2.5 text-left font-semibold",
							children: "Type"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2.5 text-left font-semibold",
							children: "Actor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2.5 text-left font-semibold",
							children: "Animal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2.5 text-left font-semibold",
							children: "Farm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2.5 text-left font-semibold",
							children: "Summary"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filtered.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: i % 2 ? "bg-muted/20" : "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2.5 font-mono text-[11px]",
							children: new Date(e.timestamp).toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary",
								children: e.type.replace("_", " ")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2.5",
							children: e.actor
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2.5 font-mono text-[11px] text-muted-foreground",
							children: e.animalId ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2.5 font-mono text-[11px] text-muted-foreground",
							children: e.farmId ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2.5",
							children: e.summary
						})
					]
				}, e.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-3 py-8 text-center text-xs text-muted-foreground",
					children: "No audit events match."
				}) })] })]
			})
		})
	] });
}
//#endregion
export { AuditPage as component };
