//#region node_modules/.nitro/vite/services/ssr/assets/audit-CwEdQxKq.js
var KEY = "dfmp.audit";
function read() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		if (raw) return JSON.parse(raw);
	} catch {}
	return SEED;
}
function write(events) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(KEY, JSON.stringify(events));
}
function getAuditEvents() {
	return read().slice().sort((a, b) => b.timestamp.localeCompare(a.timestamp));
}
function recordAudit(e) {
	const event = {
		id: `EVT-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
		timestamp: e.timestamp ?? (/* @__PURE__ */ new Date()).toISOString(),
		...e
	};
	const all = read();
	all.unshift(event);
	write(all.slice(0, 500));
	return event;
}
function getAuditFor(opts) {
	return getAuditEvents().filter((e) => (!opts.animalId || e.animalId === opts.animalId) && (!opts.farmId || e.farmId === opts.farmId));
}
var SEED = [
	{
		id: "EVT-S-1",
		timestamp: "2025-06-22T14:22:01Z",
		type: "status_change",
		actor: "system",
		farmId: "FARM-PB-2025-00088",
		summary: "MRL violation registered for Enrofloxacin."
	},
	{
		id: "EVT-S-2",
		timestamp: "2025-06-22T13:51:44Z",
		type: "inspection",
		actor: "v.singh",
		farmId: "FARM-PB-2025-00088",
		summary: "Approved AMR risk report (Punjab)."
	},
	{
		id: "EVT-S-3",
		timestamp: "2025-06-22T11:34:09Z",
		type: "status_change",
		actor: "s.menon",
		farmId: "FARM-TN-2025-01402",
		summary: "Registered new farm."
	},
	{
		id: "EVT-S-4",
		timestamp: "2025-06-21T18:02:55Z",
		type: "prescription_issued",
		actor: "dr.sharma",
		animalId: "BR-001",
		farmId: "FARM-HR-2025-00112",
		summary: "Issued prescription RX-2025-0512 (Oxytetracycline)."
	},
	{
		id: "EVT-S-5",
		timestamp: "2025-06-21T09:14:12Z",
		type: "amu_logged",
		actor: "r.kumar",
		animalId: "BR-045",
		farmId: "FARM-HR-2025-00112",
		summary: "Logged AMU: Enrofloxacin · 5 mg/kg · 3 days.",
		meta: { withdrawalDays: 14 }
	},
	{
		id: "EVT-S-6",
		timestamp: "2025-06-20T16:40:00Z",
		type: "qr_linked",
		actor: "r.kumar",
		animalId: "BR-001",
		summary: "Linked prescription RX-2025-0512 via QR scan."
	},
	{
		id: "EVT-S-7",
		timestamp: "2025-06-20T11:05:33Z",
		type: "lab_result",
		actor: "lab.system",
		farmId: "FARM-HR-2025-00112",
		animalId: "BR-012",
		summary: "Lab result PASS · Amoxicillin residue 8 ppb."
	}
];
//#endregion
export { getAuditFor as n, recordAudit as r, getAuditEvents as t };
