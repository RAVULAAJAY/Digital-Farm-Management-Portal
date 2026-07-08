import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as useT } from "./i18n-CiAdQ8--.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { o as drugs } from "./mock-data-BQe2QilD.mjs";
import { n as getSession } from "./session-CgT_EUhU.mjs";
import { D as Download, f as QrCode, g as MessageCircle, l as Send } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { r as recordAudit } from "./audit-CwEdQxKq.mjs";
import { t as require_jspdf_node_min } from "../_libs/jspdf.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.vet.issue-DTLLOuks.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_jspdf_node_min = /* @__PURE__ */ __toESM(require_jspdf_node_min());
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function IssuePrescription() {
	const t = useT();
	const [drug, setDrug] = (0, import_react.useState)("Oxytetracycline");
	const [issued, setIssued] = (0, import_react.useState)(false);
	const [farm, setFarm] = (0, import_react.useState)("FARM-HR-2025-00112");
	const [animal, setAnimal] = (0, import_react.useState)("BR-001");
	const [diagnosis, setDiagnosis] = (0, import_react.useState)("Bovine respiratory disease (J18.9)");
	const [dose, setDose] = (0, import_react.useState)("10 mg/kg");
	const [duration, setDuration] = (0, import_react.useState)("5");
	const [signed, setSigned] = (0, import_react.useState)(false);
	const selected = (0, import_react.useMemo)(() => drugs.find((d) => d.name === drug), [drug]);
	const wp = selected.wpMeat;
	const rxId = "RX-2025-0512";
	function submit() {
		if (!signed) {
			toast.error(t("Please certify the prescription with the digital signature checkbox."));
			return;
		}
		setIssued(true);
		recordAudit({
			type: "prescription_issued",
			actor: getSession()?.username ?? "dr.sharma",
			animalId: animal,
			farmId: farm,
			summary: `Issued prescription ${rxId} (${drug}, ${dose}, ${duration} days).`,
			meta: {
				withdrawalMeat: wp,
				withdrawalMilk: selected.wpMilk
			}
		});
		toast.success(t("Prescription issued. QR code generated."));
	}
	function downloadPdf() {
		const doc = new import_jspdf_node_min.default({
			unit: "pt",
			format: "a5"
		});
		const W = doc.internal.pageSize.getWidth();
		doc.setFillColor(26, 107, 60);
		doc.rect(0, 0, W, 50, "F");
		doc.setTextColor(255, 255, 255);
		doc.setFont("helvetica", "bold");
		doc.setFontSize(11);
		doc.text("GOVERNMENT OF INDIA · DoAH&D", 24, 22);
		doc.setFontSize(14);
		doc.text("Veterinary Prescription", 24, 40);
		doc.setTextColor(20, 20, 20);
		doc.setFontSize(10);
		let y = 80;
		[
			["Prescription ID", rxId],
			["Issued", (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
				day: "2-digit",
				month: "short",
				year: "numeric"
			})],
			["Veterinarian", "Dr. Anjali Sharma (VET-IND-44821)"],
			["Farm ID", farm],
			["Farmer", "Rajesh Kumar"],
			["Animal", `${animal} · Cattle (Gir)`],
			["Diagnosis", diagnosis],
			["Drug", `${drug} (${selected.class})`],
			["Dose", dose],
			["Route / Frequency", "Injection · Once daily"],
			["Duration", `${duration} days`],
			["Withdrawal (meat)", `${wp} days`],
			["Withdrawal (milk)", `${selected.wpMilk} days`]
		].forEach(([k, v]) => {
			doc.setFont("helvetica", "bold");
			doc.text(`${k}:`, 24, y);
			doc.setFont("helvetica", "normal");
			doc.text(String(v), 150, y, { maxWidth: W - 170 });
			y += 18;
		});
		y += 8;
		doc.setDrawColor(200);
		doc.line(24, y, W - 24, y);
		y += 16;
		doc.setFont("helvetica", "italic");
		doc.setFontSize(9);
		doc.text("Certified electronically. Scan QR on portal to verify authenticity.", 24, y);
		y += 30;
		doc.setFillColor(20, 20, 20);
		const qx = W - 90, qy = y, sz = 64, cell = sz / 8;
		for (let i = 0; i < 64; i++) if ((i * 7 + 3) % 5 < 3) doc.rect(qx + i % 8 * cell, qy + Math.floor(i / 8) * cell, cell, cell, "F");
		doc.setFont("helvetica", "normal");
		doc.setFontSize(8);
		doc.text("Verify: portal.doahd.gov.in", 24, y + sz - 4);
		doc.save(`${rxId}.pdf`);
		toast.success("Prescription PDF downloaded.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Issue Veterinary Prescription",
			subtitle: "Create a digital prescription with auto-calculated withdrawal period and QR."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 rounded-lg border bg-card p-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Vet Registration Number",
								value: "VET-IND-44821",
								readOnly: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Farm ID",
								value: farm,
								onChange: setFarm
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Farmer Name",
								value: "Rajesh Kumar",
								readOnly: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Animal ID",
								value: animal,
								onChange: setAnimal
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Species",
								value: "Cattle (Gir)",
								readOnly: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Diagnosis / Condition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: diagnosis,
									onChange: (e) => setDiagnosis(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5 sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Drug Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: drug,
									onValueChange: setDrug,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: drugs.filter((d) => d.status !== "Banned").map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: d.name,
										children: [
											d.name,
											" — ",
											d.class
										]
									}, d.name)) })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Drug Class",
								value: selected.class,
								readOnly: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Dose",
								value: dose,
								onChange: setDose
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Route",
								value: "Injection",
								readOnly: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Frequency",
								value: "Once daily",
								readOnly: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Duration (days)",
								value: duration,
								onChange: setDuration
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md border border-warning/40 bg-warning/5 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-warning",
							children: "Mandatory Withdrawal Period"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-2xl font-bold text-warning",
							children: [
								wp,
								" days ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-normal text-muted-foreground",
									children: [
										"(meat) · ",
										selected.wpMilk,
										" days (milk)"
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Special Instructions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							rows: 3,
							defaultValue: "Administer slowly via deep IM injection. Monitor for adverse reactions during first 48 hours."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-start gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: signed,
							onChange: (e) => setSigned(e.target.checked),
							className: "mt-0.5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I certify this prescription is medically necessary and complies with national antimicrobial stewardship guidelines." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: submit,
						children: "Issue Prescription"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border-2 border-dashed border-primary/30 bg-card p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-primary/30 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-wider text-primary",
							children: "Veterinary Prescription"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold",
							children: issued ? rxId : "Preview"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 space-y-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Patient",
								v: `${animal} · Cattle`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Diagnosis",
								v: diagnosis
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Drug",
								v: drug
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Class",
								v: selected.class
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Dose",
								v: dose
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Duration",
								v: `${duration} days`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Withdrawal",
								v: `${wp} days (meat)`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Vet",
								v: "Dr. Anjali Sharma"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex items-center justify-center rounded-md border bg-muted/30 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-32 w-32 grid-cols-8 gap-0.5",
							children: Array.from({ length: 64 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${(i * 7 + 3) % 5 < 3 ? "bg-foreground" : "bg-transparent"}` }, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-center text-[10px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-1 inline h-3 w-3" }), "Scan to verify"]
					}),
					issued && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "w-full",
							onClick: downloadPdf,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), " Download PDF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => toast.success("Sent via WhatsApp to farmer."),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mr-1 h-3 w-3" }), " WhatsApp"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => toast.success("Sent via SMS to farmer."),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-1 h-3 w-3" }), " SMS"]
							})]
						})]
					})
				]
			})]
		})]
	});
}
function Field({ label, value, onChange, readOnly }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			value,
			onChange: (e) => onChange?.(e.target.value),
			readOnly,
			className: readOnly ? "bg-muted/30" : ""
		})]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-2 border-b pb-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right font-medium",
			children: v
		})]
	});
}
//#endregion
export { IssuePrescription as component };
