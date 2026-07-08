import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as useT } from "./i18n-CiAdQ8--.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { c as labResults, o as drugs } from "./mock-data-BQe2QilD.mjs";
import { G as TriangleAlert, O as Clock, R as Building2, T as FlaskConical, i as Upload } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as StatCard } from "./StatCard-nNdbkh3C.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.lab.index-XZtartuO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LabDashboard() {
	const t = useT();
	const [drug, setDrug] = (0, import_react.useState)("Oxytetracycline");
	const [residue, setResidue] = (0, import_react.useState)("");
	const mrl = ((0, import_react.useMemo)(() => drugs.find((d) => d.name === drug), [drug])?.wpMeat ?? 100) * 10;
	const compliant = residue ? Number(residue) <= mrl : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Lab Technician Dashboard",
			subtitle: "Upload residue test results and track compliance."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Tests This Month",
					value: 48,
					icon: FlaskConical
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "MRL Violations",
					value: 2,
					icon: TriangleAlert,
					tone: "danger"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Pending Reviews",
					value: 5,
					icon: Clock,
					tone: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Farms Tested",
					value: 31,
					icon: Building2,
					tone: "info"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 rounded-lg border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Recent Results"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-muted/50 text-[11px] uppercase tracking-wider text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Test ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Farm"
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
									className: "px-3 py-2.5 text-right font-semibold",
									children: "Result"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-right font-semibold",
									children: "MRL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Date"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: labResults.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: i % 2 ? "bg-muted/20" : "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 font-mono text-[11px]",
									children: r.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 font-mono text-[11px]",
									children: r.farm
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
									className: "px-3 py-2.5 text-right",
									children: r.residue
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right text-muted-foreground",
									children: r.limit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: r.status === "PASS" ? "green" : "red",
										children: r.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-muted-foreground",
									children: r.date
								})
							]
						}, r.id)) })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Upload Test Result"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Farm ID",
							defaultValue: "FARM-MH-2025-00231"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Animal / Batch ID",
							defaultValue: "BR-201"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sample Type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-9 w-full rounded-md border bg-background px-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Milk" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Meat" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Egg" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Honey" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Drug Tested" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: drug,
								onChange: (e) => setDrug(e.target.value),
								className: "h-9 w-full rounded-md border bg-background px-2 text-sm",
								children: drugs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d.name }, d.name))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Residue (ppb)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: residue,
								onChange: (e) => setResidue(e.target.value),
								placeholder: "e.g. 180"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "MRL Threshold (ppb)",
							defaultValue: String(mrl),
							readOnly: true
						}),
						compliant !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-md border p-2 text-sm font-medium ${compliant ? "border-success/30 bg-success/5 text-success" : "border-destructive/30 bg-destructive/5 text-destructive"}`,
							children: ["Result: ", compliant ? "COMPLIANT (PASS)" : "NON-COMPLIANT (FAIL)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Test Date",
							type: "date",
							defaultValue: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Lab Certificate Number",
							placeholder: "LAB-CERT-…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Upload Report" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center rounded-md border-2 border-dashed p-4 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-2 h-4 w-4" }), " Click to upload PDF"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							onClick: () => toast.success(t("Test result uploaded successfully.")),
							children: t("Submit Result")
						})
					]
				})]
			})]
		})
	] });
}
function Field({ label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { ...rest })]
	});
}
//#endregion
export { LabDashboard as component };
