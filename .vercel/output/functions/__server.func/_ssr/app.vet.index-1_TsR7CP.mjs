import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { _ as vetPatients } from "./mock-data-BQe2QilD.mjs";
import { N as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Clock, Y as CircleAlert, o as Stethoscope, q as FilePenLine, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as StatusBadge } from "./StatusBadge-B3Qlnitd.mjs";
import { t as StatCard } from "./StatCard-nNdbkh3C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.vet.index-1_TsR7CP.js
var import_jsx_runtime = require_jsx_runtime();
function VetDashboard() {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Veterinarian Dashboard",
			subtitle: "Issue prescriptions and monitor patient compliance.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => navigate({ to: "/app/vet/issue" }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePenLine, { className: "mr-1.5 h-4 w-4" }), "Issue Prescription"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Active Prescriptions",
					value: 18,
					icon: FilePenLine
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Patients in Withdrawal",
					value: 7,
					icon: Clock,
					tone: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Prescriptions This Month",
					value: 34,
					icon: Stethoscope,
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					label: "Compliance Rate",
					value: "88%",
					icon: ShieldCheck,
					tone: "success"
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
						children: "My Patients"
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
									children: "Farm ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Farmer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Animal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Drug"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Issued"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Withdrawal Ends"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-left font-semibold",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 text-right font-semibold",
									children: "Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: vetPatients.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: i % 2 ? "bg-muted/20" : "",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 font-mono text-xs",
									children: p.farmId
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5",
									children: p.farmer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/animals/$id",
										params: { id: p.animal },
										className: "text-primary hover:underline",
										children: p.animal
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-muted-foreground",
									children: p.drug
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-muted-foreground",
									children: p.issued
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-muted-foreground",
									children: p.endsOn
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: p.status === "compliant" ? "green" : p.status === "pending" ? "amber" : "red",
										children: p.status === "compliant" ? "Compliant" : p.status === "pending" ? "Pending" : "Non-Compliant"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs font-medium text-primary hover:underline",
										children: "Alert"
									})
								})
							]
						}, i)) })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: "Quick Prescription"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Farm ID",
							placeholder: "Search farms…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Animal ID",
							placeholder: "e.g. BR-001"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Drug",
							placeholder: "Search formulary…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Dose",
								placeholder: "mg/kg"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Duration",
								placeholder: "days"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "w-full",
							onClick: () => navigate({ to: "/app/vet/issue" }),
							children: "Issue Prescription"
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-lg border bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between border-b p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-base font-semibold flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-warning" }), " Flagged Entries — Unprescribed AMU"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y",
				children: [{
					farm: "FARM-MH-2025-00231",
					farmer: "Mahesh Patil",
					animal: "PT-118",
					drug: "Oxytetracycline",
					logged: "22 Jun 2025"
				}, {
					farm: "FARM-AP-2025-00077",
					farmer: "K. Reddy",
					animal: "BR-302",
					drug: "Tylosin",
					logged: "21 Jun 2025"
				}].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold",
						children: [
							f.animal,
							" · ",
							f.drug
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							f.farmer,
							" (",
							f.farm,
							") · Logged ",
							f.logged
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							children: "Review"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							children: "Contact Farmer"
						})]
					})]
				}, i))
			})]
		})
	] });
}
function Field({ label, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "w-full rounded-md border bg-background px-2.5 py-1.5 text-sm",
			placeholder
		})]
	});
}
//#endregion
export { VetDashboard as component };
