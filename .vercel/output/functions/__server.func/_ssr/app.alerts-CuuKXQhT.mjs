import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as useT } from "./i18n-CiAdQ8--.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as useNotifications } from "./notifications-store-BbP5u6Ss.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./PageHeader-B-XwOW-J.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.alerts-CuuKXQhT.js
var import_jsx_runtime = require_jsx_runtime();
function AlertsPage() {
	const t = useT();
	const { allItems, items, prefs, setPrefs, markRead, markAllRead } = useNotifications();
	const togglePref = (key) => setPrefs({
		...prefs,
		[key]: !prefs[key]
	});
	const hidden = allItems.length - items.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-5xl gap-6 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
					title: t("Alerts & Notifications"),
					subtitle: "Real-time withdrawal period and compliance alerts.",
					actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: markAllRead,
						children: t("Mark all read")
					})
				}),
				hidden > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3 rounded-md border border-muted bg-muted/30 px-3 py-2 text-xs text-muted-foreground",
					children: [
						hidden,
						" notification",
						hidden === 1 ? "" : "s",
						" hidden by your preferences."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-lg border bg-card p-6 text-center text-sm text-muted-foreground",
						children: "No notifications. Adjust preferences to see more."
					}), items.map((n) => {
						const tone = n.type === "urgent" ? "border-destructive/30 bg-destructive/5" : n.type === "warning" ? "border-warning/30 bg-warning/5" : "border-success/30 bg-success/5";
						const icon = n.type === "urgent" ? "🔴" : n.type === "warning" ? "🟡" : "🟢";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("rounded-lg border p-4 transition", tone, n.read && "opacity-60"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-semibold",
											children: [
												!n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1.5 inline-block h-2 w-2 rounded-full bg-primary align-middle" }),
												icon,
												" ",
												n.title
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-foreground/80",
											children: n.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-[11px] text-muted-foreground",
											children: [
												"Deep link → ",
												n.animalId,
												" · ",
												n.tab,
												" · ",
												new Date(n.timestamp).toLocaleString()
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex shrink-0 flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/app/animals/$id",
											params: { id: n.animalId },
											search: { tab: n.tab },
											children: t("View")
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										onClick: () => markRead(n.id, !n.read),
										className: "h-7 text-[11px]",
										children: n.read ? t("Mark as unread") : t("Mark as read")
									})]
								})]
							})
						}, n.id);
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "lg:sticky lg:top-24 lg:self-start",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border bg-card p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: t("Notification Preferences")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Choose which alerts and deep-link types reach you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "By severity"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefRow, {
								label: "🔴 Urgent (withdrawal breach)",
								checked: prefs.urgent,
								onChange: () => togglePref("urgent")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefRow, {
								label: "🟡 Warnings",
								checked: prefs.warning,
								onChange: () => togglePref("warning")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefRow, {
								label: "🟢 Cleared",
								checked: prefs.cleared,
								onChange: () => togglePref("cleared")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "By deep-link target"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefRow, {
								label: "Treatment alerts",
								checked: prefs.treatments,
								onChange: () => togglePref("treatments")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefRow, {
								label: "Lab test alerts",
								checked: prefs.tests,
								onChange: () => togglePref("tests")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrefRow, {
								label: "Timeline alerts",
								checked: prefs.timeline,
								onChange: () => togglePref("timeline")
							})
						]
					})
				]
			})
		})]
	});
}
function PrefRow({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center justify-between py-1.5 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange: onChange
		})]
	});
}
//#endregion
export { AlertsPage as component };
