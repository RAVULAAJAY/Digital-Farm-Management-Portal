import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useI18n, i as getCoverage, n as LANG_LABELS, t as APP_KEYS } from "./i18n-CiAdQ8--.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { D as Download, J as CircleCheck, S as Languages, Y as CircleAlert } from "../_libs/lucide-react.mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as exportCSV } from "./export-CgPjC2sD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.admin.i18n-ifQRCoYU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY_LOCATIONS = {
	"Sign in": "/",
	"Username": "/",
	"Password": "/",
	"Role": "/",
	"Login with DigiLocker": "/",
	"Welcome,": "/",
	"Dashboard": "AppShell",
	"My Animals": "AppShell",
	"Log Treatment": "AppShell",
	"Prescriptions": "AppShell",
	"Alerts": "AppShell",
	"Profile": "AppShell",
	"My Patients": "AppShell",
	"Issue Prescription": "AppShell",
	"Treatment Logs": "AppShell",
	"Compliance Tracker": "AppShell",
	"Analytics & Reports": "AppShell",
	"Farm Registry": "AppShell",
	"Inspection Schedule": "AppShell",
	"MRL Violations": "AppShell",
	"Upload Results": "AppShell",
	"Test History": "AppShell",
	"Drug Formulary": "AppShell",
	"National Dashboard": "AppShell",
	"User Management": "AppShell",
	"System Settings": "AppShell",
	"Reports": "AppShell",
	"Audit Logs": "AppShell",
	"Farmer Dashboard": "/app/farmer",
	"Veterinarian Dashboard": "/app/vet",
	"Regulatory Officer Dashboard": "/app/regulator",
	"Lab Technician Dashboard": "/app/lab",
	"Record Antimicrobial Usage": "/app/log-treatment",
	"Issue Veterinary Prescription": "/app/vet/issue",
	"Register New Farm": "/app/farms/register",
	"Upload Test Result": "/app/lab/upload",
	"Notification Preferences": "/app/alerts",
	"Audit Trail": "/app/admin/audit"
};
function I18nAuditPage() {
	const { lang, setLang } = useI18n();
	const [query, setQuery] = (0, import_react.useState)("");
	const [focusLang, setFocusLang] = (0, import_react.useState)(lang === "en" ? "hi" : lang);
	const coverages = (0, import_react.useMemo)(() => {
		return Object.keys(LANG_LABELS).map((l) => ({
			lang: l,
			...getCoverage(l)
		}));
	}, []);
	const focus = coverages.find((c) => c.lang === focusLang);
	const filteredMissing = focus.missing.filter((k) => k.toLowerCase().includes(query.toLowerCase()));
	function exportMissing() {
		exportCSV(`missing-${focusLang}.csv`, focus.missing.map((k) => ({
			key: k,
			english: k,
			[focusLang]: "",
			location: KEY_LOCATIONS[k] ?? "shared"
		})));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "i18n Audit",
			subtitle: "Translation coverage across all routes, components and supported languages.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				value: lang,
				onChange: (e) => setLang(e.target.value),
				className: "h-9 rounded-md border bg-background px-3 text-sm",
				children: Object.keys(LANG_LABELS).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
					value: l,
					children: ["Preview: ", LANG_LABELS[l]]
				}, l))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
			children: coverages.map((c) => {
				const pct = Math.round(c.translated / c.total * 100);
				const tone = pct >= 95 ? "text-success" : pct >= 60 ? "text-warning" : "text-destructive";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setFocusLang(c.lang),
					className: cn("rounded-lg border bg-card p-4 text-left transition hover:shadow-md", focusLang === c.lang && "ring-2 ring-primary"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold",
								children: LANG_LABELS[c.lang]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "h-4 w-4 text-muted-foreground" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: cn("mt-2 text-2xl font-extrabold", tone),
							children: [pct, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] text-muted-foreground",
							children: [
								c.translated,
								" / ",
								c.total,
								" keys"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 h-1.5 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("h-full", pct >= 95 ? "bg-success" : pct >= 60 ? "bg-warning" : "bg-destructive"),
								style: { width: `${pct}%` }
							})
						})
					]
				}, c.lang);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 rounded-lg border bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2 border-b p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-base font-semibold",
							children: [
								"Missing in ",
								LANG_LABELS[focusLang],
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-normal text-muted-foreground",
									children: [
										"(",
										focus.missing.length,
										")"
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: "These keys fall back to English. Click a row to jump to where it appears."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: exportMissing,
								disabled: focus.missing.length === 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-3.5 w-3.5" }), " Export CSV"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-b p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Filter missing keys…",
							className: "max-w-md"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-[28rem] overflow-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "sticky top-0 bg-muted/70 text-[10px] uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "English key"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left font-semibold",
									children: "Location"
								})] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [filteredMissing.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 2,
								className: "px-3 py-6 text-center text-xs text-muted-foreground",
								children: focus.missing.length === 0 ? "✓ Fully translated." : "No keys match your filter."
							}) }), filteredMissing.map((k) => {
								const loc = KEY_LOCATIONS[k];
								const linkable = loc && loc.startsWith("/");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b last:border-0 hover:bg-muted/30",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 font-medium",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-3 py-2 text-[11px] text-muted-foreground",
										children: linkable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: loc,
											className: "text-primary hover:underline",
											children: loc
										}) : loc ?? "shared / multiple"
									})]
								}, k);
							})] })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-semibold flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-success" }), " Coverage report"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-2 space-y-1 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Total registered keys:"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: APP_KEYS.length
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Translated:"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-success",
										children: focus.translated
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Missing (fallback to English):"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-destructive",
										children: focus.missing.length
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Extra keys (in dict but unused):"
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: focus.extras.length
									})
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border bg-card p-4 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-semibold flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-info" }), " How fallback works"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "When a key is missing in the active language, the app renders the English source string instead of an empty space. Switching language is global via React context — every mounted component re-renders instantly."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border bg-card p-4 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Manual translation needed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-muted-foreground",
							children: [
								"Use ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: "Export CSV"
								}),
								" to get the missing keys for the selected language, translate them, then paste back into ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono",
									children: ["DICT.", focusLang]
								}),
								" in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: "src/lib/i18n.tsx"
								}),
								"."
							]
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { I18nAuditPage as component };
