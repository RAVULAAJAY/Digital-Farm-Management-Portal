import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as useT } from "./i18n-CiAdQ8--.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { N as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as CircleCheck, a as Trash2, p as Plus, v as MapPin } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.farms.register-B2QfgiF9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegisterFarm() {
	const navigate = useNavigate();
	const t = useT();
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [farmId] = (0, import_react.useState)(() => `FARM-MH-2025-${String(Math.floor(Math.random() * 9e4) + 1e4)}`);
	const [lat, setLat] = (0, import_react.useState)("");
	const [lng, setLng] = (0, import_react.useState)("");
	const [locating, setLocating] = (0, import_react.useState)(false);
	const [animals, setAnimals] = (0, import_react.useState)([{
		species: "Cattle",
		breed: "Gir",
		count: "12",
		age: "3",
		idMethod: "Ear Tag"
	}]);
	function getLocation() {
		setLocating(true);
		const useMock = () => {
			const mockLat = (18.5204 + (Math.random() - .5) * .05).toFixed(6);
			const mockLng = (73.8567 + (Math.random() - .5) * .05).toFixed(6);
			setLat(mockLat);
			setLng(mockLng);
			setLocating(false);
			toast.success(t("Mock location applied (Pune, MH)."));
		};
		if (typeof navigator === "undefined" || !navigator.geolocation) {
			useMock();
			return;
		}
		navigator.geolocation.getCurrentPosition((pos) => {
			setLat(pos.coords.latitude.toFixed(6));
			setLng(pos.coords.longitude.toFixed(6));
			setLocating(false);
			toast.success(t("GPS coordinates captured."));
		}, () => {
			toast.message(t("GPS unavailable — using mock coordinates."));
			useMock();
		}, { timeout: 6e3 });
	}
	function addAnimal() {
		setAnimals((a) => [...a, {
			species: "",
			breed: "",
			count: "",
			age: "",
			idMethod: "Ear Tag"
		}]);
	}
	function removeAnimal(i) {
		setAnimals((a) => a.filter((_, idx) => idx !== i));
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto h-16 w-16 text-success" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-2xl font-bold",
				children: t("Farm registered successfully")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: t("Your unique Farm ID has been generated:")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 inline-block rounded-md border bg-card px-4 py-2 font-mono text-lg font-semibold text-primary",
				children: farmId
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => setSubmitted(false),
					children: t("Register Another")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => navigate({ to: "/app/farms" }),
					children: t("View Registry")
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Register New Farm",
			subtitle: "Add a new livestock farm to the national registry."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "space-y-6",
			onSubmit: (e) => {
				e.preventDefault();
				toast.success(t("Farm registered."));
				setSubmitted(true);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Farm Details",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Farm Name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Farm Type",
							options: [
								"Dairy",
								"Poultry",
								"Swine",
								"Mixed",
								"Aquaculture"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "State",
							options: [
								"Maharashtra",
								"Punjab",
								"Andhra Pradesh",
								"Madhya Pradesh",
								"Haryana",
								"Tamil Nadu"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "District",
							options: [
								"Pune",
								"Mumbai",
								"Nagpur",
								"Nashik"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Village" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Pincode" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t("GPS Coordinates") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: t("Latitude"),
										value: lat,
										onChange: (e) => setLat(e.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: t("Longitude"),
										value: lng,
										onChange: (e) => setLng(e.target.value)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "outline",
										onClick: getLocation,
										disabled: locating,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mr-1 h-4 w-4" }),
											" ",
											locating ? t("Locating…") : t("Get My Location")
										]
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Owner Details",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Aadhaar Number",
							placeholder: "XXXX XXXX XXXX"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Mobile",
							type: "tel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Upload Aadhaar (PDF/Image)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md border-2 border-dashed p-4 text-center text-xs text-muted-foreground",
								children: "Click to upload file"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold",
							children: "Livestock Census"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: addAnimal,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-3 w-3" }), " Add Row"]
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
										children: "Species"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "Breed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "Count"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "Avg Age (yr)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-3 py-2 text-left font-semibold",
										children: "ID Method"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-3 py-2" })
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: animals.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: a.species,
										onChange: (e) => updateRow(setAnimals, i, "species", e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										value: a.breed,
										onChange: (e) => updateRow(setAnimals, i, "breed", e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										value: a.count,
										onChange: (e) => updateRow(setAnimals, i, "count", e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										value: a.age,
										onChange: (e) => updateRow(setAnimals, i, "age", e.target.value)
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "h-9 w-full rounded-md border bg-background px-2 text-sm",
										value: a.idMethod,
										onChange: (e) => updateRow(setAnimals, i, "idMethod", e.target.value),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ear Tag" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "RFID" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Tattoo" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-2 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => removeAnimal(i),
										className: "text-destructive hover:opacity-70",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
									})
								})
							] }, i)) })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => navigate({ to: "/app/farms" }),
						children: t("Cancel")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: t("Register Farm")
					})]
				})
			]
		})]
	});
}
function updateRow(setter, i, key, value) {
	setter((rows) => rows.map((r, idx) => idx === i ? {
		...r,
		[key]: value
	} : r));
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TSpan, { k: title })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 p-4 sm:grid-cols-2",
			children
		})]
	});
}
function Field({ label, required, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TSpan, { k: label }), required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-destructive",
			children: " *"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			required,
			...rest
		})]
	});
}
function SelectField({ label, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TSpan, { k: label }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			className: "h-9 w-full rounded-md border bg-background px-2 text-sm",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
		})]
	});
}
function TSpan({ k }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: useT()(k) });
}
//#endregion
export { RegisterFarm as component };
