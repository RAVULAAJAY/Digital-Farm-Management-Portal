import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as animals, c as labResults, r as activeTreatments } from "./mock-data-BQe2QilD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { n as getAuditFor } from "./audit-CwEdQxKq.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
import { t as Route } from "./app.animals._id-E6bGx-gS.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.animals._id-3FjKpJVR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
function AnimalProfile() {
	const { id } = Route.useParams();
	const { tab } = Route.useSearch();
	const navigate = Route.useNavigate();
	const animal = animals.find((a) => a.id === id) || {
		id,
		species: "Cattle",
		breed: "Unknown",
		status: "green",
		lastTreatment: "—",
		age: "—",
		farm: "—"
	};
	const treatments = activeTreatments.filter((t) => t.animalId === id);
	const tests = labResults.filter((r) => r.farm.includes("FARM"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: `Animal ${animal.id}`,
			subtitle: `${animal.species} · ${animal.breed} · ${animal.age} · ${animal.farm}`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: animal.status,
				children: animal.status === "red" ? "In Withdrawal" : animal.status === "amber" ? "Ending Soon" : "Cleared"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			value: tab,
			onValueChange: (v) => navigate({ search: { tab: v } }),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "treatments",
						children: "Treatment History"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "tests",
						children: "Test Results"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "timeline",
						children: "Compliance Timeline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
						value: "audit",
						children: "Audit Trail"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "treatments",
					className: "rounded-lg border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Drug"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Dose"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Route"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Duration"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Prescribed By"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Withdrawal End"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: (treatments.length ? treatments : activeTreatments.slice(0, 2)).map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: i % 2 ? "bg-muted/20" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: t.startDate
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5 font-medium",
										children: t.drug
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: t.dose
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: t.route
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-3 py-2.5",
										children: [t.durationDays, "d"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5 text-muted-foreground",
										children: "Dr. Anjali Sharma"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-3 py-2.5",
										children: [
											"+",
											t.withdrawalDays,
											"d"
										]
									})
								]
							}, i)) })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "tests",
					className: "rounded-lg border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Sample"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Drug"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Result"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "MRL"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Lab"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2.5 text-left font-semibold",
										children: "Certificate"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: tests.slice(0, 3).map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: i % 2 ? "bg-muted/20" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: r.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: r.sample
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: r.drug
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: r.status === "PASS" ? "green" : "red",
											children: r.status
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5",
										children: r.limit
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5 text-muted-foreground",
										children: "FSSAI Hyderabad"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2.5 font-mono text-[11px]",
										children: r.id
									})
								]
							}, i)) })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "timeline",
					className: "rounded-lg border bg-card p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative ml-3 border-l-2 border-border",
						children: [
							{
								date: "15 Jun 2025",
								type: "treatment",
								label: "Treatment started — Oxytetracycline (5d, IM)"
							},
							{
								date: "20 Jun 2025",
								type: "treatment",
								label: "Treatment completed — Withdrawal period began"
							},
							{
								date: "13 Jul 2025",
								type: "clearance",
								label: "Withdrawal ends — animal safe for sale/milk"
							},
							{
								date: "18 Jul 2025",
								type: "lab",
								label: "Routine MRL test scheduled"
							}
						].map((t, i) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "mb-6 ml-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full ${t.type === "treatment" ? "bg-info" : t.type === "clearance" ? "bg-success" : "bg-warning"} ring-4 ring-card` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
										children: t.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium",
										children: t.label
									})
								]
							}, i);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "audit",
					className: "rounded-lg border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
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
										children: "Summary"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [getAuditFor({ animalId: id }).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
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
										className: "px-3 py-2.5",
										children: e.summary
									})
								]
							}, e.id)), getAuditFor({ animalId: id }).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 4,
								className: "px-3 py-8 text-center text-xs text-muted-foreground",
								children: "No audit events yet for this animal. Log a treatment or scan a prescription to populate."
							}) })] })]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/app/farmer",
				className: "text-sm text-primary hover:underline",
				children: "← Back to dashboard"
			})
		})
	] });
}
//#endregion
export { AnimalProfile as component };
