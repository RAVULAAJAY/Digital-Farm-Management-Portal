import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as LanguageProvider } from "./i18n-CiAdQ8--.mjs";
import { P as useRouter, c as HeadContent, d as createRouter, f as Outlet, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$29 } from "./app.animals._id-E6bGx-gS.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-_qiGW9Bl.js
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var styles_default = "/assets/styles-DD-Gvc8T.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$28 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Digital Farm Management Portal · DoAH&D" },
			{
				name: "description",
				content: "Government of India portal for monitoring antimicrobial usage (AMU) and maximum residue limits (MRL) across livestock farms."
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "shortcut icon",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$28.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LanguageProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })] })
	});
}
var $$splitComponentImporter$27 = () => import("./app-Bb5CTzIm.mjs");
var Route$27 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$27, "component") });
var $$splitComponentImporter$26 = () => import("./routes-B0-Rei2U.mjs");
var Route$26 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Login · Digital Farm Management Portal" }, {
		name: "description",
		content: "Login to the Government of India's AMU & MRL monitoring portal for livestock farms."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./app.profile-zWxa2PeL.mjs");
var Route$25 = createFileRoute("/app/profile")({ component: lazyRouteComponent($$splitComponentImporter$25, "component") });
var $$splitComponentImporter$24 = () => import("./app.log-treatment-BHzAbkfH.mjs");
var Route$24 = createFileRoute("/app/log-treatment")({ component: lazyRouteComponent($$splitComponentImporter$24, "component") });
var $$splitComponentImporter$23 = () => import("./app.formulary-CrYUGBnR.mjs");
var Route$23 = createFileRoute("/app/formulary")({ component: lazyRouteComponent($$splitComponentImporter$23, "component") });
var $$splitComponentImporter$22 = () => import("./app.alerts-CuuKXQhT.mjs");
var Route$22 = createFileRoute("/app/alerts")({ component: lazyRouteComponent($$splitComponentImporter$22, "component") });
var $$splitComponentImporter$21 = () => import("./app.vet.index-1_TsR7CP.mjs");
var Route$21 = createFileRoute("/app/vet/")({ component: lazyRouteComponent($$splitComponentImporter$21, "component") });
var $$splitComponentImporter$20 = () => import("./app.regulator.index-SfqiqBZy.mjs");
var Route$20 = createFileRoute("/app/regulator/")({ component: lazyRouteComponent($$splitComponentImporter$20, "component") });
var $$splitComponentImporter$19 = () => import("./app.lab.index-XZtartuO.mjs");
var Route$19 = createFileRoute("/app/lab/")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./app.farms.index-BfQACqN2.mjs");
var Route$18 = createFileRoute("/app/farms/")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./app.farmer.index-CBVCeA8W.mjs");
var Route$17 = createFileRoute("/app/farmer/")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./app.admin.index-ROrK7VJT.mjs");
var Route$16 = createFileRoute("/app/admin/")({ component: lazyRouteComponent($$splitComponentImporter$16, "component") });
var $$splitComponentImporter$15 = () => import("./app.vet.patients-Cb3hxAkd.mjs");
var Route$15 = createFileRoute("/app/vet/patients")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./app.vet.logs-Cd2zVreB.mjs");
var Route$14 = createFileRoute("/app/vet/logs")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./app.vet.issue-DTLLOuks.mjs");
var Route$13 = createFileRoute("/app/vet/issue")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./app.vet.compliance-BiSRTWTx.mjs");
var Route$12 = createFileRoute("/app/vet/compliance")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./app.regulator.violations-BzTKRWkA.mjs");
var Route$11 = createFileRoute("/app/regulator/violations")({ component: lazyRouteComponent($$splitComponentImporter$11, "component") });
var $$splitComponentImporter$10 = () => import("./app.regulator.inspections-CBnIYvvv.mjs");
var Route$10 = createFileRoute("/app/regulator/inspections")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./app.regulator.analytics-CvCZbPoB.mjs");
var Route$9 = createFileRoute("/app/regulator/analytics")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./app.lab.upload-DPYSLcgv.mjs");
var Route$8 = createFileRoute("/app/lab/upload")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./app.lab.history-DgSaiwyd.mjs");
var Route$7 = createFileRoute("/app/lab/history")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./app.farms.register-B2QfgiF9.mjs");
var Route$6 = createFileRoute("/app/farms/register")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./app.farmer.prescriptions-D_zDGJZj.mjs");
var Route$5 = createFileRoute("/app/farmer/prescriptions")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./app.farmer.animals-C_5WwKlM.mjs");
var Route$4 = createFileRoute("/app/farmer/animals")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./app.admin.users-BRIMbV04.mjs");
var Route$3 = createFileRoute("/app/admin/users")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./app.admin.settings-CwNqtOP2.mjs");
var Route$2 = createFileRoute("/app/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./app.admin.i18n-ifQRCoYU.mjs");
var Route$1 = createFileRoute("/app/admin/i18n")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./app.admin.audit-CL-fPp4W.mjs");
var Route = createFileRoute("/app/admin/audit")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var AppRoute = Route$27.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$28
});
var IndexRoute = Route$26.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$28
});
var AppProfileRoute = Route$25.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AppRoute
});
var AppLogTreatmentRoute = Route$24.update({
	id: "/log-treatment",
	path: "/log-treatment",
	getParentRoute: () => AppRoute
});
var AppFormularyRoute = Route$23.update({
	id: "/formulary",
	path: "/formulary",
	getParentRoute: () => AppRoute
});
var AppAlertsRoute = Route$22.update({
	id: "/alerts",
	path: "/alerts",
	getParentRoute: () => AppRoute
});
var AppVetIndexRoute = Route$21.update({
	id: "/vet/",
	path: "/vet/",
	getParentRoute: () => AppRoute
});
var AppRegulatorIndexRoute = Route$20.update({
	id: "/regulator/",
	path: "/regulator/",
	getParentRoute: () => AppRoute
});
var AppLabIndexRoute = Route$19.update({
	id: "/lab/",
	path: "/lab/",
	getParentRoute: () => AppRoute
});
var AppFarmsIndexRoute = Route$18.update({
	id: "/farms/",
	path: "/farms/",
	getParentRoute: () => AppRoute
});
var AppFarmerIndexRoute = Route$17.update({
	id: "/farmer/",
	path: "/farmer/",
	getParentRoute: () => AppRoute
});
var AppAdminIndexRoute = Route$16.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => AppRoute
});
var AppVetPatientsRoute = Route$15.update({
	id: "/vet/patients",
	path: "/vet/patients",
	getParentRoute: () => AppRoute
});
var AppVetLogsRoute = Route$14.update({
	id: "/vet/logs",
	path: "/vet/logs",
	getParentRoute: () => AppRoute
});
var AppVetIssueRoute = Route$13.update({
	id: "/vet/issue",
	path: "/vet/issue",
	getParentRoute: () => AppRoute
});
var AppVetComplianceRoute = Route$12.update({
	id: "/vet/compliance",
	path: "/vet/compliance",
	getParentRoute: () => AppRoute
});
var AppRegulatorViolationsRoute = Route$11.update({
	id: "/regulator/violations",
	path: "/regulator/violations",
	getParentRoute: () => AppRoute
});
var AppRegulatorInspectionsRoute = Route$10.update({
	id: "/regulator/inspections",
	path: "/regulator/inspections",
	getParentRoute: () => AppRoute
});
var AppRegulatorAnalyticsRoute = Route$9.update({
	id: "/regulator/analytics",
	path: "/regulator/analytics",
	getParentRoute: () => AppRoute
});
var AppLabUploadRoute = Route$8.update({
	id: "/lab/upload",
	path: "/lab/upload",
	getParentRoute: () => AppRoute
});
var AppLabHistoryRoute = Route$7.update({
	id: "/lab/history",
	path: "/lab/history",
	getParentRoute: () => AppRoute
});
var AppFarmsRegisterRoute = Route$6.update({
	id: "/farms/register",
	path: "/farms/register",
	getParentRoute: () => AppRoute
});
var AppFarmerPrescriptionsRoute = Route$5.update({
	id: "/farmer/prescriptions",
	path: "/farmer/prescriptions",
	getParentRoute: () => AppRoute
});
var AppFarmerAnimalsRoute = Route$4.update({
	id: "/farmer/animals",
	path: "/farmer/animals",
	getParentRoute: () => AppRoute
});
var AppAnimalsIdRoute = Route$29.update({
	id: "/animals/$id",
	path: "/animals/$id",
	getParentRoute: () => AppRoute
});
var AppAdminUsersRoute = Route$3.update({
	id: "/admin/users",
	path: "/admin/users",
	getParentRoute: () => AppRoute
});
var AppAdminSettingsRoute = Route$2.update({
	id: "/admin/settings",
	path: "/admin/settings",
	getParentRoute: () => AppRoute
});
var AppAdminI18nRoute = Route$1.update({
	id: "/admin/i18n",
	path: "/admin/i18n",
	getParentRoute: () => AppRoute
});
var AppRouteChildren = {
	AppAlertsRoute,
	AppFormularyRoute,
	AppLogTreatmentRoute,
	AppProfileRoute,
	AppAdminAuditRoute: Route.update({
		id: "/admin/audit",
		path: "/admin/audit",
		getParentRoute: () => AppRoute
	}),
	AppAdminI18nRoute,
	AppAdminSettingsRoute,
	AppAdminUsersRoute,
	AppAnimalsIdRoute,
	AppFarmerAnimalsRoute,
	AppFarmerPrescriptionsRoute,
	AppFarmsRegisterRoute,
	AppLabHistoryRoute,
	AppLabUploadRoute,
	AppRegulatorAnalyticsRoute,
	AppRegulatorInspectionsRoute,
	AppRegulatorViolationsRoute,
	AppVetComplianceRoute,
	AppVetIssueRoute,
	AppVetLogsRoute,
	AppVetPatientsRoute,
	AppAdminIndexRoute,
	AppFarmerIndexRoute,
	AppFarmsIndexRoute,
	AppLabIndexRoute,
	AppRegulatorIndexRoute,
	AppVetIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren)
};
var routeTree = Route$28._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
