import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as useT } from "./i18n-CiAdQ8--.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { a as animals, l as mockPrescriptions, o as drugs } from "./mock-data-BQe2QilD.mjs";
import { n as getSession } from "./session-CgT_EUhU.mjs";
import { N as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as Check, N as ChevronRight, P as ChevronLeft, d as ScanLine, f as QrCode, j as Circle, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { r as recordAudit } from "./audit-CwEdQxKq.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/@radix-ui/react-radio-group+[...].mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.log-treatment-BHzAbkfH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function LogTreatment() {
	const navigate = useNavigate();
	const t = useT();
	const [step, setStep] = (0, import_react.useState)(1);
	const [animalId, setAnimalId] = (0, import_react.useState)("BR-001");
	const [drug, setDrug] = (0, import_react.useState)("Oxytetracycline");
	const [manufacturer, setManufacturer] = (0, import_react.useState)("Pfizer Animal Health");
	const [batch, setBatch] = (0, import_react.useState)("");
	const [dose, setDose] = (0, import_react.useState)("10");
	const [doseUnit, setDoseUnit] = (0, import_react.useState)("mg/kg");
	const [route, setRoute] = (0, import_react.useState)("Injection");
	const [frequency, setFrequency] = (0, import_react.useState)("Once daily");
	const [startDate, setStartDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [duration, setDuration] = (0, import_react.useState)("5");
	const [purpose, setPurpose] = (0, import_react.useState)("Therapeutic");
	const [prescriptionId, setPrescriptionId] = (0, import_react.useState)("");
	const [noPrescription, setNoPrescription] = (0, import_react.useState)(false);
	const [scanOpen, setScanOpen] = (0, import_react.useState)(false);
	const [scanning, setScanning] = (0, import_react.useState)(false);
	function startScan() {
		setScanOpen(true);
		setScanning(true);
		setTimeout(() => {
			const pick = mockPrescriptions[Math.floor(Math.random() * mockPrescriptions.length)];
			setPrescriptionId(pick.id);
			setDrug(pick.drug);
			setAnimalId(pick.animal);
			setScanning(false);
			setScanOpen(false);
			recordAudit({
				type: "qr_linked",
				actor: getSession()?.username ?? "anon",
				animalId: pick.animal,
				summary: `Linked prescription ${pick.id} via QR scan.`
			});
			toast.success(`Prescription ${pick.id} linked via QR scan.`);
		}, 1400);
	}
	const selectedDrug = (0, import_react.useMemo)(() => drugs.find((d) => d.name === drug), [drug]);
	const withdrawalDays = selectedDrug?.wpMeat ?? 28;
	const safeDate = (0, import_react.useMemo)(() => {
		const d = new Date(startDate);
		d.setDate(d.getDate() + Number(duration || 0) + withdrawalDays);
		return d.toLocaleDateString("en-IN", {
			day: "2-digit",
			month: "short",
			year: "numeric"
		});
	}, [
		startDate,
		duration,
		withdrawalDays
	]);
	const steps = [
		"Select Animal",
		"Drug Details",
		"Prescription",
		"Confirmation"
	];
	function next() {
		setStep((s) => Math.min(4, s + 1));
	}
	function prev() {
		setStep((s) => Math.max(1, s - 1));
	}
	function submit() {
		recordAudit({
			type: "amu_logged",
			actor: getSession()?.username ?? "anon",
			animalId,
			summary: `Logged AMU: ${drug} · ${dose} ${doseUnit} · ${duration} days (${purpose}).`,
			meta: {
				withdrawalDays,
				prescriptionId: prescriptionId || "none"
			}
		});
		toast.success(t("Treatment recorded successfully."));
		navigate({ to: "/app/farmer" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Record Antimicrobial Usage",
				subtitle: "Log a new treatment administered to an animal on your farm."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex items-center gap-2",
				children: steps.map((label, i) => {
					const n = i + 1;
					const done = step > n;
					const active = step === n;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold", done && "border-success bg-success text-success-foreground", active && "border-primary bg-primary text-primary-foreground", !done && !active && "border-border bg-muted text-muted-foreground"),
								children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground",
									children: ["Step ", n]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("text-xs font-semibold", active && "text-primary"),
									children: label
								})]
							}),
							n < 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-px flex-1", done ? "bg-success" : "bg-border") })
						]
					}, label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border bg-card p-6",
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-semibold",
							children: "Step 1 — Select Animal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Animal ID" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: animalId,
									onValueChange: setAnimalId,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: animals.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: a.id,
										children: [
											a.id,
											" — ",
											a.species,
											" (",
											a.breed,
											")"
										]
									}, a.id)) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-xs font-medium text-primary hover:underline",
									children: "+ Add New Animal"
								})
							]
						})]
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "Step 2 — Drug Details"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 sm:col-span-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Drug Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: drug,
											onValueChange: setDrug,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: drugs.filter((d) => d.status !== "Banned").map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
												value: d.name,
												children: [
													d.name,
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted-foreground",
														children: ["— ", d.class]
													})
												]
											}, d.name)) })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Manufacturer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: manufacturer,
											onChange: (e) => setManufacturer(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Batch Number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: batch,
											onChange: (e) => setBatch(e.target.value),
											placeholder: "e.g. PFZ-2025-0042"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Dosage" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												value: dose,
												onChange: (e) => setDose(e.target.value)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: doseUnit,
												onValueChange: setDoseUnit,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "w-28",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "mg/kg",
														children: "mg/kg"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "mL",
														children: "mL"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
														value: "g",
														children: "g"
													})
												] })]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Route of Administration" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: route,
											onValueChange: setRoute,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Oral",
													children: "Oral"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Injection",
													children: "Injection"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Feed Additive",
													children: "Feed Additive"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Topical",
													children: "Topical"
												})
											] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Frequency" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: frequency,
											onValueChange: setFrequency,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Once daily",
													children: "Once daily"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Twice daily",
													children: "Twice daily"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Every 48hrs",
													children: "Every 48 hrs"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "Other",
													children: "Other"
												})
											] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Treatment Start Date" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "date",
											value: startDate,
											onChange: (e) => setStartDate(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Duration (days)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											value: duration,
											onChange: (e) => setDuration(e.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2 space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Treatment Purpose" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
											value: purpose,
											onValueChange: setPurpose,
											className: "flex flex-wrap gap-4",
											children: [
												"Therapeutic",
												"Prophylactic",
												"Metaphylactic"
											].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-2 text-sm",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
														value: p,
														id: p
													}),
													" ",
													p
												]
											}, p))
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-warning/30 bg-warning/5 p-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-semibold text-warning",
									children: [
										"Auto-calculated withdrawal: ",
										withdrawalDays,
										" days"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted-foreground",
									children: ["Safe to sell from: ", safeDate]
								})]
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "Step 3 — Prescription"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Prescription ID" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: prescriptionId,
											onChange: (e) => setPrescriptionId(e.target.value),
											placeholder: "RX-2025-…",
											disabled: noPrescription
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "outline",
											onClick: startScan,
											disabled: noPrescription,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "mr-1 h-4 w-4" }), " Scan QR"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Tip: scanning a prescription QR auto-fills drug, animal and ID."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: noPrescription,
									onChange: (e) => setNoPrescription(e.target.checked)
								}), "No prescription — flag this entry for veterinary review"]
							}),
							noPrescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive",
								children: "⚠ This treatment will be flagged for review by your assigned veterinarian."
							})
						]
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: "Step 4 — Confirmation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border bg-muted/30 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "grid grid-cols-2 gap-x-4 gap-y-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Animal"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium",
											children: animalId
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Drug"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
											className: "font-medium",
											children: [
												drug,
												" (",
												selectedDrug?.class,
												")"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Batch"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: batch || "—" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Dose"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
											dose,
											" ",
											doseUnit
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Route"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: route }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Frequency"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: frequency }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Start date"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: startDate }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Duration"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [duration, " days"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Purpose"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: purpose }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Prescription"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: noPrescription ? "Flagged — none linked" : prescriptionId || "—" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-warning/30 bg-warning/5 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-semibold text-warning",
									children: [
										"Withdrawal Period: ",
										withdrawalDays,
										" days"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground",
									children: ["Safe to sell from: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: safeDate
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-between border-t pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: prev,
							disabled: step === 1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "mr-1 h-4 w-4" }), " Back"]
						}), step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: next,
							children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 h-4 w-4" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: submit,
							children: "Submit Treatment"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: scanOpen,
				onOpenChange: setScanOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Scan Prescription QR" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Align the QR code from your prescription card inside the frame." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex aspect-square w-64 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-primary/40 bg-muted/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-40 w-40 grid-cols-8 gap-0.5 opacity-70",
								children: Array.from({ length: 64 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (i * 7 + 3) % 5 < 3 ? "bg-foreground" : "bg-transparent" }, i))
							}),
							scanning && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-4 top-4 h-0.5 animate-pulse bg-primary shadow-[0_0_12px_2px] shadow-primary",
								style: { animation: "scanline 1.4s ease-in-out infinite" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "absolute bottom-2 right-2 h-4 w-4 text-primary" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted-foreground",
						children: scanning ? "Scanning…" : "Detecting QR code…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => {
							setScanning(false);
							setScanOpen(false);
						},
						children: "Cancel"
					}) })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes scanline { 0% { transform: translateY(0); } 50% { transform: translateY(220px); } 100% { transform: translateY(0); } }` })
		]
	});
}
//#endregion
export { LogTreatment as component };
