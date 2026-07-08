import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useI18n, n as LANG_LABELS } from "./i18n-CiAdQ8--.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { n as ROLE_LABELS, t as ROLE_HOMES } from "./mock-data-BQe2QilD.mjs";
import { r as setSession } from "./session-CgT_EUhU.mjs";
import { N as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as Beef, b as Leaf, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0-Rei2U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LandingLogin() {
	const navigate = useNavigate();
	const { lang, setLang, t } = useI18n();
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("farmer");
	function handleLogin(e) {
		e.preventDefault();
		if (!username || !password) {
			toast.error("Please enter your username and password.");
			return;
		}
		setSession(role, username);
		toast.success(`${t("Welcome,")} ${t(ROLE_LABELS[role])}`);
		navigate({ to: ROLE_HOMES[role] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-gov-strip text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-1 text-[11px] font-medium tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "भारत सरकार | Government of India · Ministry of Fisheries, Animal Husbandry & Dairying" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: lang,
						onChange: (e) => setLang(e.target.value),
						className: "rounded bg-transparent text-[11px] text-primary-foreground outline-none",
						children: Object.keys(LANG_LABELS).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: l,
							className: "text-foreground",
							children: LANG_LABELS[l]
						}, l))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beef, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "DoAH&D · Government of India"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-lg font-bold leading-tight",
						children: t("Department of Animal Husbandry & Dairying")
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex flex-1 items-center justify-center px-4 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid w-full max-w-6xl gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-3.5 w-3.5" }),
									" ",
									t("National AMU & MRL Monitoring")
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl font-bold leading-tight tracking-tight",
								children: t("Digital Farm Management Portal")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base text-muted-foreground",
								children: t("Antimicrobial Usage & Maximum Residue Limits monitoring system for India's livestock sector — tracking treatments, prescriptions, and residue compliance from farm to consumer.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
									icon: ShieldCheck,
									title: t("Withdrawal compliance"),
									desc: t("Real-time tracking of treatment withdrawal periods to prevent residue contamination.")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
									icon: Beef,
									title: t("4.8 lakh farms"),
									desc: t("Registered livestock farms across 28 states reporting AMU data.")
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border bg-card p-6 shadow-sm sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: t("Sign in")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t("Access your role-based dashboard.")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleLogin,
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "role",
											children: t("Role")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											value: role,
											onValueChange: (v) => setRole(v),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												id: "role",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: Object.keys(ROLE_LABELS).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
												value: r,
												children: t(ROLE_LABELS[r])
											}, r)) })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "username",
											children: t("Username")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "username",
											value: username,
											onChange: (e) => setUsername(e.target.value),
											placeholder: "e.g. rajesh.kumar"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "password",
											children: t("Password")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "password",
											type: "password",
											value: password,
											onChange: (e) => setPassword(e.target.value),
											placeholder: "••••••••"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "w-full",
										children: t("Sign in")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "outline",
										className: "w-full",
										children: t("Login with DigiLocker")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "pt-1 text-center text-[11px] text-muted-foreground",
										children: t("Demo portal — any username/password works. Choose any role to explore.")
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 py-4 text-center text-xs text-muted-foreground",
					children: "Ministry of Fisheries, Animal Husbandry & Dairying · Government of India"
				})
			})
		]
	});
}
function FeatureCard({ icon: Icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-muted-foreground",
				children: desc
			})
		]
	});
}
//#endregion
export { LandingLogin as component };
