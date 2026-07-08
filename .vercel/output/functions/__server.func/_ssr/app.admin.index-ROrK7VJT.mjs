import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { h as states } from "./mock-data-BQe2QilD.mjs";
import { H as ArrowUp, U as ArrowDown, h as Minus } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.admin.index-ROrK7VJT.js
var import_jsx_runtime = require_jsx_runtime();
var districts = [
	{
		district: "Sangli",
		state: "MH",
		score: .94,
		risk: "high"
	},
	{
		district: "Ludhiana",
		state: "PB",
		score: .91,
		risk: "high"
	},
	{
		district: "Hisar",
		state: "HR",
		score: .86,
		risk: "medium"
	},
	{
		district: "Bareilly",
		state: "UP",
		score: .83,
		risk: "medium"
	},
	{
		district: "Guntur",
		state: "AP",
		score: .78,
		risk: "medium"
	}
];
var audit = [
	{
		time: "14:22",
		text: "New MRL violation registered — FARM-PB-2025-00088 (Enrofloxacin, 180 ppb)"
	},
	{
		time: "13:51",
		text: "State health officer approved AMR risk report for Punjab"
	},
	{
		time: "12:08",
		text: "Auto-generated monthly compliance report — Maharashtra"
	},
	{
		time: "11:34",
		text: "New farm registered — FARM-TN-2025-01402 (Coimbatore)"
	},
	{
		time: "10:17",
		text: "Drug formulary updated: Cefquinome reclassified to Restricted"
	}
];
function AdminDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "National Dashboard",
			subtitle: "India-wide AMU and MRL compliance overview."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, {
					value: "4,82,000",
					label: "Farms Registered"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, {
					value: "18.3L",
					label: "AMU Records"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, {
					value: "28",
					label: "States Active"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, {
					value: "0.04%",
					label: "MRL Violation Rate",
					tone: "danger"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 rounded-lg border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "India AMU Heatmap"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "State-level intensity (click to drill down)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-7",
						children: [...states, ...states.slice(0, 6)].map((s, i) => {
							const intensity = Math.min(1, s.amu);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "group relative aspect-square rounded text-left transition hover:scale-105 hover:shadow-md",
								style: { backgroundColor: `oklch(${.82 - intensity * .35} ${.08 + intensity * .12} ${152 - intensity * 130})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-x-1 bottom-1 truncate text-[10px] font-bold text-white drop-shadow",
									children: s.state.slice(0, 8)
								})
							}, i);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between text-[10px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Low AMU" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-2 h-1.5 flex-1 rounded-full bg-gradient-to-r from-success/40 via-warning/60 to-destructive/70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "High AMU" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "System Alerts"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y text-sm",
					children: audit.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-4 py-2.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono",
								children: a.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs",
								children: a.text
							})]
						})
					}, i))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "State-wise Compliance"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "State"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-right font-semibold",
										children: "Farms"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-right font-semibold",
										children: "Compl%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-center font-semibold",
										children: "Trend"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: states.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: i % 2 ? "bg-muted/20" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 font-medium",
										children: s.state
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-right",
										children: s.farms.toLocaleString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-3 py-2 text-right",
										children: [s.compliance, "%"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-center",
										children: s.trend === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "inline h-3 w-3 text-success" }) : s.trend === "down" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "inline h-3 w-3 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "inline h-3 w-3 text-muted-foreground" })
									})
								]
							}, s.state)) })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "Top AMR Risk Districts"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "District"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "State"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-right font-semibold",
										children: "AMU"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "Risk"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: districts.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: i % 2 ? "bg-muted/20" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 font-medium",
										children: d.district
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-muted-foreground",
										children: d.state
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-right",
										children: d.score.toFixed(2)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: d.risk === "high" ? "red" : "amber",
											children: d.risk
										})
									})
								]
							}, d.district)) })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "Recent National Activity"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y text-sm",
						children: audit.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "px-4 py-2.5 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: a.time
								}),
								" · ",
								a.text
							]
						}, i))
					})]
				})
			]
		})
	] });
}
function BigStat({ value, label, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `text-3xl font-extrabold tracking-tight ${tone === "danger" ? "text-destructive" : "text-foreground"}`,
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { AdminDashboard as component };
