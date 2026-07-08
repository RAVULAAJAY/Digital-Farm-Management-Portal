import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { f as purposeBreakdown, g as topDrugs, i as amuTrend, m as speciesAMU, o as drugs, u as mrlViolations } from "./mock-data-BQe2QilD.mjs";
import { D as Download, t as X } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as exportPDF, t as exportCSV } from "./export-CgPjC2sD.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Pie, n as BarChart, o as Line, p as Legend, r as LineChart, s as CartesianGrid, t as PieChart, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.regulator.analytics-CvCZbPoB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"#1A6B3C",
	"#0E7490",
	"#B45309",
	"#991B1B",
	"#166534"
];
function Analytics() {
	const [drugFilter, setDrugFilter] = (0, import_react.useState)(null);
	const [speciesFilter, setSpeciesFilter] = (0, import_react.useState)(null);
	const [purposeFilter, setPurposeFilter] = (0, import_react.useState)(null);
	const records = (0, import_react.useMemo)(() => {
		const out = [];
		const purposes = [
			"Therapeutic",
			"Prophylactic",
			"Metaphylactic"
		];
		const species = [
			"Cattle",
			"Poultry",
			"Swine",
			"Goat",
			"Aquaculture"
		];
		topDrugs.forEach((td, i) => {
			const cls = drugs.find((d) => d.name === td.drug)?.class ?? "Other";
			species.forEach((sp, j) => {
				out.push({
					date: `${10 + (i + j) % 18} Jun 2025`,
					drug: td.drug,
					drugClass: cls,
					species: sp,
					purpose: purposes[(i + j) % 3],
					farm: `FARM-${[
						"MH",
						"PB",
						"AP",
						"HR",
						"TN"
					][(i + j) % 5]}-2025-${String(100 + i * 5 + j).padStart(5, "0")}`,
					usage: Math.round(td.count / 5 + j * 7)
				});
			});
		});
		mrlViolations.forEach((v) => out.push({
			date: "22 Jun 2025",
			drug: v.drug,
			drugClass: drugs.find((d) => d.name === v.drug)?.class ?? "Other",
			species: "Cattle",
			purpose: "Therapeutic",
			farm: v.farm,
			usage: 1
		}));
		return out;
	}, []);
	const filtered = (0, import_react.useMemo)(() => records.filter((r) => (!drugFilter || r.drug === drugFilter) && (!speciesFilter || r.species === speciesFilter) && (!purposeFilter || r.purpose === purposeFilter)), [
		records,
		drugFilter,
		speciesFilter,
		purposeFilter
	]);
	const hasFilter = drugFilter || speciesFilter || purposeFilter;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "AMU Analytics & Reporting",
			subtitle: "Filter, visualize, and export AMU compliance data."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border bg-card p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						label: "State",
						options: [
							"All India",
							"Maharashtra",
							"Punjab",
							"Andhra Pradesh",
							"Haryana",
							"Tamil Nadu"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						label: "District",
						options: [
							"All",
							"Pune",
							"Ludhiana",
							"Guntur",
							"Karnal"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						label: "Species",
						options: [
							"All",
							"Cattle",
							"Poultry",
							"Swine",
							"Goat"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						label: "Drug Class",
						options: [
							"All",
							"Tetracycline",
							"Penicillin",
							"Fluoroquinolone",
							"Macrolide"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-[10px] uppercase tracking-wider",
							children: "Date range"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { type: "date" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							children: "Apply Filters"
						})
					})
				]
			})
		}),
		hasFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-xs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-primary",
					children: "Drilldown:"
				}),
				drugFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					label: `Drug: ${drugFilter}`,
					onClear: () => setDrugFilter(null)
				}),
				speciesFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					label: `Species: ${speciesFilter}`,
					onClear: () => setSpeciesFilter(null)
				}),
				purposeFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					label: `Purpose: ${purposeFilter}`,
					onClear: () => setPurposeFilter(null)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setDrugFilter(null);
						setSpeciesFilter(null);
						setPurposeFilter(null);
					},
					className: "ml-auto text-muted-foreground hover:text-foreground",
					children: "Clear all"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Monthly AMU Trend",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: amuTrend,
						margin: {
							top: 5,
							right: 10,
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 11 } }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "Tetracycline",
								stroke: "#1A6B3C",
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "Penicillin",
								stroke: "#0E7490",
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "Fluoroquinolone",
								stroke: "#B45309",
								strokeWidth: 2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "Macrolide",
								stroke: "#991B1B",
								strokeWidth: 2
							})
						]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Top 10 Antimicrobials",
					hint: "Click a bar to filter",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: topDrugs,
						layout: "vertical",
						margin: {
							top: 5,
							right: 10,
							bottom: 0,
							left: 30
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								opacity: .3
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								type: "number",
								fontSize: 10
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								type: "category",
								dataKey: "drug",
								fontSize: 10,
								width: 100
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "count",
								radius: [
									0,
									4,
									4,
									0
								],
								onClick: (d) => d?.drug && setDrugFilter(drugFilter === d.drug ? null : d.drug),
								cursor: "pointer",
								children: topDrugs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: drugFilter === d.drug ? "#991B1B" : "#1A6B3C" }, d.drug))
							})
						]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Treatment Purpose",
					hint: "Click a slice to filter",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
							data: purposeBreakdown,
							dataKey: "value",
							nameKey: "name",
							cx: "50%",
							cy: "50%",
							outerRadius: 90,
							label: true,
							onClick: (d) => d?.name && setPurposeFilter(purposeFilter === d.name ? null : d.name),
							cursor: "pointer",
							children: purposeBreakdown.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: purposeFilter === p.name ? "#991B1B" : COLORS[i % COLORS.length] }, p.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 11 } })
					] }) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartCard, {
					title: "Species-wise AMU",
					hint: "Click a bar to filter",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: speciesAMU,
						margin: {
							top: 5,
							right: 10,
							bottom: 0,
							left: -20
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								opacity: .3
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "species",
								fontSize: 10
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { fontSize: 10 }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "count",
								radius: [
									4,
									4,
									0,
									0
								],
								onClick: (d) => d?.species && setSpeciesFilter(speciesFilter === d.species ? null : d.species),
								cursor: "pointer",
								children: speciesAMU.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: speciesFilter === s.species ? "#991B1B" : "#0E7490" }, s.species))
							})
						]
					}) })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-lg border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold",
					children: "Drilldown Results"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] text-muted-foreground",
					children: [
						filtered.length,
						" of ",
						records.length,
						" records"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => exportCSV("drilldown.csv", filtered),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), " CSV"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => exportPDF("drilldown.pdf", "Analytics Drilldown", filtered, hasFilter ? `Filters — drug: ${drugFilter ?? "—"}, species: ${speciesFilter ?? "—"}, purpose: ${purposeFilter ?? "—"}` : void 0),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), " PDF"]
						}),
						hasFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => {
								setDrugFilter(null);
								setSpeciesFilter(null);
								setPurposeFilter(null);
							},
							children: "Clear filters"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-80 overflow-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "sticky top-0 bg-muted/70 text-[11px] uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left font-semibold",
								children: "Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left font-semibold",
								children: "Farm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left font-semibold",
								children: "Drug"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left font-semibold",
								children: "Class"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left font-semibold",
								children: "Species"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-left font-semibold",
								children: "Purpose"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 text-right font-semibold",
								children: "Usage"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filtered.slice(0, 50).map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: cn(i % 2 && "bg-muted/20"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: r.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-mono text-[11px]",
								children: r.farm
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 font-medium",
								children: r.drug
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-muted-foreground",
								children: r.drugClass
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: r.species
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2",
								children: r.purpose
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-3 py-2 text-right",
								children: r.usage
							})
						]
					}, i)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 7,
						className: "px-3 py-8 text-center text-xs text-muted-foreground",
						children: "No records match the current drilldown."
					}) })] })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-lg border bg-card p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold",
				children: "Report Generation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						label: "Report type",
						options: [
							"Monthly Compliance",
							"MRL Violations",
							"Drug Usage Summary",
							"Farm Inspection",
							"AMR Risk Report"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						label: "Format",
						options: ["PDF", "Excel"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NativeSelect, {
						label: "Schedule",
						options: [
							"One-time",
							"Weekly",
							"Monthly"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full",
							onClick: () => toast.success("Report queued for generation."),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-4 w-4" }), " Generate Report"]
						})
					})
				]
			})]
		})
	] });
}
function Chip({ label, onClear }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: onClear,
		className: "inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary",
		children: [
			label,
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
		]
	});
}
function ChartCard({ title, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold",
				children: title
			}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] text-muted-foreground",
				children: hint
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 h-64",
			children
		})]
	});
}
function NativeSelect({ label, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-[10px] uppercase tracking-wider",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "h-9 w-full rounded-md border bg-background px-2 text-sm",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
		})]
	});
}
//#endregion
export { Analytics as component };
