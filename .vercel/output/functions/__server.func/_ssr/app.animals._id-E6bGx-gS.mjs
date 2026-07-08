import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.animals._id-E6bGx-gS.js
var $$splitComponentImporter = () => import("./app.animals._id-3FjKpJVR.mjs");
var Route = createFileRoute("/app/animals/$id")({
	validateSearch: (s) => {
		const t = s.tab;
		return { tab: t === "tests" || t === "timeline" || t === "audit" ? t : "treatments" };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
