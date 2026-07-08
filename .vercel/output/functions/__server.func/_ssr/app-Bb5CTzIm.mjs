import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useI18n, n as LANG_LABELS } from "./i18n-CiAdQ8--.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { n as ROLE_LABELS } from "./mock-data-BQe2QilD.mjs";
import { t as useNotifications } from "./notifications-store-BbP5u6Ss.mjs";
import { i as useSession, t as clearSession } from "./session-CgT_EUhU.mjs";
import { N as useNavigate, f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Bell, C as History, G as TriangleAlert, I as Check, K as FilePlusCorner, N as ChevronRight, R as Building2, S as Languages, V as Beef, X as ChartColumn, _ as Menu, c as Settings, i as Upload, j as Circle, k as ClipboardList, m as Pill, n as Users, o as Stethoscope, q as FilePenLine, r as User, s as ShieldCheck, t as X, u as ScrollText, w as Globe, x as LayoutDashboard, y as LogOut, z as BookOpen } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-Bb5CTzIm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var NAV = {
	farmer: [
		{
			label: "Dashboard",
			to: "/app/farmer",
			icon: LayoutDashboard
		},
		{
			label: "My Animals",
			to: "/app/farmer/animals",
			icon: Beef
		},
		{
			label: "Log Treatment",
			to: "/app/log-treatment",
			icon: FilePlusCorner
		},
		{
			label: "Prescriptions",
			to: "/app/farmer/prescriptions",
			icon: Pill
		},
		{
			label: "Alerts",
			to: "/app/alerts",
			icon: TriangleAlert
		},
		{
			label: "Profile",
			to: "/app/profile",
			icon: User
		}
	],
	vet: [
		{
			label: "Dashboard",
			to: "/app/vet",
			icon: LayoutDashboard
		},
		{
			label: "My Patients",
			to: "/app/vet/patients",
			icon: Stethoscope
		},
		{
			label: "Issue Prescription",
			to: "/app/vet/issue",
			icon: FilePenLine
		},
		{
			label: "Treatment Logs",
			to: "/app/vet/logs",
			icon: ClipboardList
		},
		{
			label: "Compliance Tracker",
			to: "/app/vet/compliance",
			icon: ShieldCheck
		},
		{
			label: "Profile",
			to: "/app/profile",
			icon: User
		}
	],
	regulator: [
		{
			label: "Dashboard",
			to: "/app/regulator",
			icon: LayoutDashboard
		},
		{
			label: "Analytics & Reports",
			to: "/app/regulator/analytics",
			icon: ChartColumn
		},
		{
			label: "Farm Registry",
			to: "/app/farms",
			icon: Building2
		},
		{
			label: "Inspection Schedule",
			to: "/app/regulator/inspections",
			icon: ClipboardList
		},
		{
			label: "MRL Violations",
			to: "/app/regulator/violations",
			icon: TriangleAlert
		},
		{
			label: "Alerts",
			to: "/app/alerts",
			icon: Bell
		},
		{
			label: "Profile",
			to: "/app/profile",
			icon: User
		}
	],
	lab: [
		{
			label: "Dashboard",
			to: "/app/lab",
			icon: LayoutDashboard
		},
		{
			label: "Upload Results",
			to: "/app/lab/upload",
			icon: Upload
		},
		{
			label: "Test History",
			to: "/app/lab/history",
			icon: History
		},
		{
			label: "Drug Formulary",
			to: "/app/formulary",
			icon: BookOpen
		},
		{
			label: "Profile",
			to: "/app/profile",
			icon: User
		}
	],
	admin: [
		{
			label: "National Dashboard",
			to: "/app/admin",
			icon: Globe
		},
		{
			label: "User Management",
			to: "/app/admin/users",
			icon: Users
		},
		{
			label: "Farm Registry",
			to: "/app/farms",
			icon: Building2
		},
		{
			label: "Drug Formulary",
			to: "/app/formulary",
			icon: BookOpen
		},
		{
			label: "System Settings",
			to: "/app/admin/settings",
			icon: Settings
		},
		{
			label: "Reports",
			to: "/app/regulator/analytics",
			icon: ChartColumn
		},
		{
			label: "Audit Logs",
			to: "/app/admin/audit",
			icon: ScrollText
		},
		{
			label: "i18n Audit",
			to: "/app/admin/i18n",
			icon: Languages
		}
	]
};
function AppShell({ children }) {
	const session = useSession();
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [notifOpen, setNotifOpen] = (0, import_react.useState)(false);
	const { lang, setLang, t } = useI18n();
	const { items: notifs, unreadCount, markRead, markAllRead } = useNotifications();
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (!window.localStorage.getItem("dfmp.session")) navigate({ to: "/" });
		}
	}, [navigate]);
	const items = (0, import_react.useMemo)(() => session ? NAV[session.role] : [], [session]);
	function handleLogout() {
		clearSession();
		navigate({ to: "/" });
	}
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center text-sm text-muted-foreground",
		children: "Loading…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen w-full flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-gov-strip text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1600px] items-center justify-between px-4 py-1 text-[11px] font-medium tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "भारत सरकार | Government of India · Ministry of Fisheries, Animal Husbandry & Dairying" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:inline",
						children: ["DoAH&D · ", t("Digital Farm Management Portal")]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-[1600px] items-center gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden",
							onClick: () => setMobileOpen(true),
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beef, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold leading-tight",
									children: t("Digital Farm Management Portal")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground",
									children: t("AMU & MRL Monitoring")
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: lang,
									onChange: (e) => setLang(e.target.value),
									className: "hidden md:block h-8 rounded border bg-background px-2 text-xs",
									"aria-label": "Language",
									children: Object.keys(LANG_LABELS).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: l,
										children: LANG_LABELS[l]
									}, l))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setNotifOpen(true),
									className: "relative rounded-md p-2 hover:bg-muted",
									"aria-label": "Notifications",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground",
										children: unreadCount
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "flex items-center gap-2 rounded-md border px-2 py-1.5 hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
											children: session.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hidden sm:block text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold leading-tight",
												children: session.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground",
												children: t(ROLE_LABELS[session.role])
											})]
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
									align: "end",
									className: "w-48",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, { children: [
											t("Signed in as"),
											" ",
											session.username
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onClick: () => navigate({ to: "/app/profile" }),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-2 h-4 w-4" }),
												" ",
												t("Profile")
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
											onClick: handleLogout,
											className: "text-destructive",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }),
												" ",
												t("Logout")
											]
										})
									]
								})] })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-[1600px] flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden w-60 shrink-0 border-r bg-card lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "sticky top-[88px] flex flex-col gap-0.5 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
							children: t(ROLE_LABELS[session.role])
						}), items.map((item) => {
							const active = pathname === item.to || item.to !== "/app/farmer" && pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors", active ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), t(item.label)]
							}, item.to);
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-w-0 flex-1 p-4 sm:p-6",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: mobileOpen,
				onOpenChange: setMobileOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					className: "w-64 p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
						className: "border-b p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: t(ROLE_LABELS[session.role]) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col gap-0.5 p-3",
						children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							onClick: () => setMobileOpen(false),
							className: "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), t(item.label)]
						}, item.to))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: notifOpen,
				onOpenChange: setNotifOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "right",
					className: "w-full max-w-md p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, {
						className: "border-b p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: t("Notifications") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: markAllRead,
									className: "font-medium text-primary hover:underline",
									children: t("Mark all read")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/app/alerts",
									onClick: () => setNotifOpen(false),
									className: "font-medium text-muted-foreground hover:text-foreground hover:underline",
									children: t("Notification Preferences")
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 p-4",
						children: [notifs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-6 text-center text-xs text-muted-foreground",
							children: "No notifications match your preferences."
						}), notifs.map((n) => {
							const tone = n.type === "urgent" ? "border-destructive/30 bg-destructive/5" : n.type === "warning" ? "border-warning/30 bg-warning/5" : "border-success/30 bg-success/5";
							const icon = n.type === "urgent" ? "🔴" : n.type === "warning" ? "🟡" : "🟢";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("rounded-lg border p-3", tone, n.read && "opacity-60"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => markRead(n.id, !n.read),
										className: "text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm font-semibold",
												children: [
													!n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-1 inline-block h-2 w-2 rounded-full bg-primary" }),
													icon,
													" ",
													n.title
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-xs text-foreground/80",
												children: n.body
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[10px] text-muted-foreground",
												children: n.read ? t("Mark as unread") : t("Mark as read")
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										className: "shrink-0",
										onClick: () => {
											markRead(n.id, true);
											setNotifOpen(false);
											navigate({
												to: "/app/animals/$id",
												params: { id: n.animalId },
												search: { tab: n.tab }
											});
										},
										children: t("View")
									})]
								})
							}, n.id);
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1600px] px-4 py-3 text-center text-[11px] text-muted-foreground",
					children: "Ministry of Fisheries, Animal Husbandry & Dairying · Government of India"
				})
			})
		]
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
//#endregion
export { SplitComponent as component };
