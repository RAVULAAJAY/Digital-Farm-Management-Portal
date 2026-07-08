import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { g as topDrugs, h as states, i as amuTrend, s as flaggedFarms, u as mrlViolations } from "./mock-data-BQe2QilD.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ClipboardCheck, D as Download, E as FileText, G as TriangleAlert, O as Clock, R as Building2, s as ShieldCheck, t as X } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { n as exportPDF, t as exportCSV } from "./export-CgPjC2sD.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
import { t as StatCard } from "./StatCard-nNdbkh3C.mjs";
import { a as XAxis, d as ResponsiveContainer, f as Tooltip, i as YAxis, o as Line, p as Legend, r as LineChart, s as CartesianGrid } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.regulator.index-SfqiqBZy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function farmStateCode(id) {
	return id.match(/^FARM-([A-Z]{2})/)?.[1] ?? "";
}
var STATE_CODE = {
	Maharashtra: "MH",
	Punjab: "PB",
	"Andhra Pradesh": "AP",
	"Madhya Pradesh": "MP",
	Haryana: "HR",
	"Tamil Nadu": "TN",
	"Uttar Pradesh": "UP",
	Karnataka: "KA"
};
function RegulatorDashboard() {
	const [drugFilter, setDrugFilter] = (0, import_react.useState)(null);
	const [stateFilter, setStateFilter] = (0, import_react.useState)(null);
	const filteredViolations = (0, import_react.useMemo)(() => {
		return mrlViolations.filter((v) => {
			if (drugFilter && v.drug !== drugFilter) return false;
			if (stateFilter && farmStateCode(v.farm) !== STATE_CODE[stateFilter]) return false;
			return true;
		});
	}, [drugFilter, stateFilter]);
	const filteredFlagged = (0, import_react.useMemo)(() => {
		return flaggedFarms.filter((f) => {
			if (stateFilter && farmStateCode(f.id) !== STATE_CODE[stateFilter]) return false;
			if (drugFilter && !f.issue.toLowerCase().includes(drugFilter.toLowerCase())) return drugFilter === null;
			return true;
		});
	}, [drugFilter, stateFilter]);
	const hasFilter = drugFilter || stateFilter;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Regulatory Officer Dashboard",
			subtitle: "District- and state-level AMU monitoring and compliance oversight.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => exportCSV("flagged-farms.csv", filteredFlagged),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), " Flagged CSV"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => exportCSV("mrl-violations.csv", filteredViolations),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), " Violations CSV"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => exportPDF("regulator-report.pdf", "Regulator Report — Flagged Farms & MRL Violations", [...filteredFlagged, ...filteredViolations.map((v) => ({
							id: v.farm,
							farmer: v.animal,
							district: v.drug,
							issue: `Residue ${v.residue} (MRL ${v.limit})`,
							severity: v.status
						}))], hasFilter ? `Active filters — state: ${stateFilter ?? "—"}, drug: ${drugFilter ?? "—"}` : void 0),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mr-1.5 h-3.5 w-3.5" }), " PDF Report"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app/regulator/analytics",
							children: "Open Analytics"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Total Farms",
					value: "12,847",
					icon: Building2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "AMU Records (mo)",
					value: "3,421",
					icon: FileText,
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Active Withdrawals",
					value: 892,
					icon: Clock,
					tone: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "MRL Violations",
					value: 3,
					icon: TriangleAlert,
					tone: "danger"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Farms Inspected",
					value: 156,
					icon: ClipboardCheck
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Compliance Rate",
					value: "96.2%",
					icon: ShieldCheck,
					tone: "success"
				})
			]
		}),
		hasFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-primary",
					children: "Active filters:"
				}),
				stateFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setStateFilter(null),
					className: "inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary",
					children: [
						"State: ",
						stateFilter,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
					]
				}),
				drugFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setDrugFilter(null),
					className: "inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary",
					children: [
						"Drug: ",
						drugFilter,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setDrugFilter(null);
						setStateFilter(null);
					},
					className: "ml-auto text-muted-foreground hover:text-foreground",
					children: "Clear all"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-1 rounded-lg border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "AMU Trend (12 mo)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "By drug class · click a line legend to filter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-56",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: amuTrend,
									margin: {
										top: 5,
										right: 5,
										bottom: 0,
										left: -20
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											opacity: .3
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "month",
											fontSize: 10
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { fontSize: 10 }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 10 } }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "Tetracycline",
											stroke: "#1A6B3C",
											strokeWidth: 2,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "Penicillin",
											stroke: "#0E7490",
											strokeWidth: 2,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "Fluoroquinolone",
											stroke: "#B45309",
											strokeWidth: 2,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "Macrolide",
											stroke: "#991B1B",
											strokeWidth: 2,
											dot: false
										})
									]
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "District AMU Heatmap"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Click a state row to drill down"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-1.5",
							children: states.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setStateFilter(stateFilter === s.state ? null : s.state),
								className: cn("flex w-full items-center gap-2 rounded px-1.5 py-1 text-left transition hover:bg-muted/50", stateFilter === s.state && "bg-primary/10 ring-1 ring-primary/40"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-28 truncate text-[11px] font-medium",
									children: s.state
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-1 gap-1",
									children: Array.from({ length: 4 }).map((_, i) => {
										const intensity = Math.min(1, s.amu + (i - 1.5) * .08);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											title: `${s.state} dist ${i + 1} · AMU ${intensity.toFixed(2)}`,
											className: "aspect-square flex-1 rounded",
											style: { backgroundColor: `oklch(${.85 - intensity * .35} ${.1 + intensity * .1} ${152 - intensity * 130})` }
										}, i);
									})
								})]
							}, s.state))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between text-[10px] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Low" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-2 flex h-1.5 flex-1 rounded-full bg-gradient-to-r from-success/40 via-warning/60 to-destructive/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "High" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "Flagged Farms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted-foreground",
							children: [
								filteredFlagged.length,
								" of ",
								flaggedFarms.length
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "divide-y",
						children: [filteredFlagged.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "p-6 text-center text-xs text-muted-foreground",
							children: "No farms match the active filters."
						}), filteredFlagged.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold truncate",
											children: f.farmer
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-muted-foreground truncate",
											children: [
												f.id,
												" · ",
												f.district
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs",
											children: f.issue
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: f.severity === "high" ? "red" : "amber",
									children: f.severity
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									className: "h-7 text-xs",
									children: "Inspect"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									className: "h-7 text-xs",
									children: "Send Notice"
								})]
							})]
						}, f.id))]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Top 10 Drugs This Month"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: "Click a row to filter violations"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Drug"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-right font-semibold",
									children: "Usage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-right font-semibold",
									children: "Farms"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Alert"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: topDrugs.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							onClick: () => setDrugFilter(drugFilter === d.drug ? null : d.drug),
							className: cn("cursor-pointer transition hover:bg-primary/5", i % 2 && "bg-muted/20", drugFilter === d.drug && "bg-primary/10 ring-1 ring-inset ring-primary/40"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-medium",
									children: d.drug
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right",
									children: d.count.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right",
									children: d.farms
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: d.level === "high" ? "red" : d.level === "medium" ? "amber" : "green",
										children: d.level
									})
								})
							]
						}, d.drug)) })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Recent MRL Violations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] text-muted-foreground",
						children: [
							filteredViolations.length,
							" of ",
							mrlViolations.length
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Farm"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Animal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Drug"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-right font-semibold",
									children: "Residue"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-right font-semibold",
									children: "MRL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Status"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filteredViolations.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 6,
							className: "px-3 py-6 text-center text-xs text-muted-foreground",
							children: "No violations match the active filters."
						}) }), filteredViolations.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: cn(i % 2 && "bg-muted/20"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-mono text-[11px]",
									children: v.farm
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: v.animal
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: v.drug
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right font-semibold text-destructive",
									children: v.residue
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-right text-muted-foreground",
									children: v.limit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: "red",
										children: v.status
									})
								})
							]
						}, i))] })]
					})
				})]
			})]
		})
	] });
}
//#endregion
export { RegulatorDashboard as component };
