import { o as __toESM } from "../_runtime.mjs";
import { t as require_jspdf_node_min } from "../_libs/jspdf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/export-CgPjC2sD.js
var import_jspdf_node_min = /* @__PURE__ */ __toESM(require_jspdf_node_min());
function exportCSV(filename, rows) {
	if (rows.length === 0) return;
	const headers = Object.keys(rows[0]);
	const escape = (v) => {
		const s = String(v ?? "");
		return /[",\n]/.test(s) ? `"${s.replace(/"/g, "\"\"")}"` : s;
	};
	const csv = [headers.join(","), ...rows.map((r) => headers.map((h) => escape(r[h])).join(","))].join("\n");
	const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	URL.revokeObjectURL(url);
}
function exportPDF(filename, title, rows, subtitle) {
	const doc = new import_jspdf_node_min.default({
		orientation: "landscape",
		unit: "pt",
		format: "a4"
	});
	const W = doc.internal.pageSize.getWidth();
	doc.setFillColor(26, 107, 60);
	doc.rect(0, 0, W, 50, "F");
	doc.setTextColor(255, 255, 255);
	doc.setFont("helvetica", "bold");
	doc.setFontSize(11);
	doc.text("GOVERNMENT OF INDIA · DoAH&D", 24, 22);
	doc.setFontSize(14);
	doc.text(title, 24, 40);
	doc.setTextColor(20, 20, 20);
	doc.setFontSize(9);
	let y = 70;
	if (subtitle) {
		doc.text(subtitle, 24, y);
		y += 14;
	}
	doc.text(`Generated: ${(/* @__PURE__ */ new Date()).toLocaleString("en-IN")}`, 24, y);
	y += 18;
	if (rows.length === 0) {
		doc.text("No records.", 24, y);
		doc.save(filename);
		return;
	}
	const headers = Object.keys(rows[0]);
	const colW = (W - 48) / headers.length;
	doc.setFont("helvetica", "bold");
	doc.setFillColor(240, 240, 240);
	doc.rect(24, y - 12, W - 48, 18, "F");
	headers.forEach((h, i) => doc.text(h, 28 + i * colW, y));
	y += 12;
	doc.setFont("helvetica", "normal");
	rows.forEach((r, idx) => {
		if (y > doc.internal.pageSize.getHeight() - 30) {
			doc.addPage();
			y = 40;
		}
		if (idx % 2) {
			doc.setFillColor(248, 250, 252);
			doc.rect(24, y - 10, W - 48, 16, "F");
		}
		headers.forEach((h, i) => {
			const v = String(r[h] ?? "");
			doc.text(v.length > 40 ? v.slice(0, 38) + "…" : v, 28 + i * colW, y);
		});
		y += 16;
	});
	doc.save(filename);
}
//#endregion
export { exportPDF as n, exportCSV as t };
