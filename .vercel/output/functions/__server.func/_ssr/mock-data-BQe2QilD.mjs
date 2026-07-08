//#region node_modules/.nitro/vite/services/ssr/assets/mock-data-BQe2QilD.js
var ROLE_LABELS = {
	farmer: "Farmer",
	vet: "Veterinarian",
	regulator: "Regulatory Officer",
	lab: "Lab Technician",
	admin: "National Admin"
};
var ROLE_HOMES = {
	farmer: "/app/farmer",
	vet: "/app/vet",
	regulator: "/app/regulator",
	lab: "/app/lab",
	admin: "/app/admin"
};
var animals = [
	{
		id: "BR-001",
		species: "Cattle",
		breed: "Gir",
		status: "red",
		lastTreatment: "15 Jun 2025",
		age: "4 yr",
		farm: "Kumar Dairy"
	},
	{
		id: "BR-012",
		species: "Cattle",
		breed: "Sahiwal",
		status: "amber",
		lastTreatment: "10 Jun 2025",
		age: "3 yr",
		farm: "Kumar Dairy"
	},
	{
		id: "BR-045",
		species: "Cattle",
		breed: "Holstein",
		status: "red",
		lastTreatment: "18 Jun 2025",
		age: "5 yr",
		farm: "Kumar Dairy"
	},
	{
		id: "PT-023",
		species: "Poultry",
		breed: "Broiler",
		status: "green",
		lastTreatment: "01 Jun 2025",
		age: "6 wk",
		farm: "Devi Poultry"
	},
	{
		id: "GN-007",
		species: "Goat",
		breed: "Beetal",
		status: "green",
		lastTreatment: "22 May 2025",
		age: "2 yr",
		farm: "Rao Mixed Farm"
	},
	{
		id: "CH-007",
		species: "Poultry",
		breed: "Layer",
		status: "green",
		lastTreatment: "20 May 2025",
		age: "8 mo",
		farm: "Devi Poultry"
	}
];
var activeTreatments = [
	{
		id: "T-1001",
		animalId: "BR-001",
		drug: "Oxytetracycline",
		drugClass: "Tetracycline",
		dose: "10 mg/kg",
		route: "Injection",
		startDate: "15 Jun 2025",
		durationDays: 5,
		withdrawalDays: 28,
		daysRemaining: 4
	},
	{
		id: "T-1002",
		animalId: "BR-045",
		drug: "Enrofloxacin",
		drugClass: "Fluoroquinolone",
		dose: "5 mg/kg",
		route: "Injection",
		startDate: "18 Jun 2025",
		durationDays: 3,
		withdrawalDays: 14,
		daysRemaining: 7
	},
	{
		id: "T-1003",
		animalId: "BR-012",
		drug: "Amoxicillin",
		drugClass: "Penicillin",
		dose: "15 mg/kg",
		route: "Oral",
		startDate: "10 Jun 2025",
		durationDays: 7,
		withdrawalDays: 10,
		daysRemaining: 2
	}
];
var drugs = [
	{
		name: "Oxytetracycline",
		class: "Tetracycline",
		species: [
			"Cattle",
			"Poultry",
			"Swine"
		],
		maxDose: "20 mg/kg",
		wpMeat: 28,
		wpMilk: 7,
		status: "Approved"
	},
	{
		name: "Enrofloxacin",
		class: "Fluoroquinolone",
		species: ["Cattle", "Poultry"],
		maxDose: "10 mg/kg",
		wpMeat: 14,
		wpMilk: 4,
		status: "Restricted"
	},
	{
		name: "Amoxicillin",
		class: "Penicillin",
		species: [
			"Cattle",
			"Swine",
			"Poultry"
		],
		maxDose: "20 mg/kg",
		wpMeat: 10,
		wpMilk: 3,
		status: "Approved"
	},
	{
		name: "Tylosin",
		class: "Macrolide",
		species: ["Cattle", "Swine"],
		maxDose: "10 mg/kg",
		wpMeat: 21,
		wpMilk: 4,
		status: "Approved"
	},
	{
		name: "Sulfadimethoxine",
		class: "Sulfonamide",
		species: ["Cattle", "Poultry"],
		maxDose: "25 mg/kg",
		wpMeat: 7,
		wpMilk: 60,
		status: "Approved"
	},
	{
		name: "Ceftiofur",
		class: "Cephalosporin",
		species: ["Cattle"],
		maxDose: "2.2 mg/kg",
		wpMeat: 4,
		wpMilk: 0,
		status: "Restricted"
	},
	{
		name: "Penicillin G",
		class: "Penicillin",
		species: ["Cattle", "Swine"],
		maxDose: "10000 IU/kg",
		wpMeat: 14,
		wpMilk: 3,
		status: "Approved"
	},
	{
		name: "Gentamicin",
		class: "Aminoglycoside",
		species: ["Cattle"],
		maxDose: "4 mg/kg",
		wpMeat: 18,
		wpMilk: 3,
		status: "Restricted"
	},
	{
		name: "Florfenicol",
		class: "Amphenicol",
		species: ["Cattle", "Swine"],
		maxDose: "20 mg/kg",
		wpMeat: 30,
		wpMilk: 0,
		status: "Approved"
	},
	{
		name: "Chloramphenicol",
		class: "Amphenicol",
		species: ["—"],
		maxDose: "—",
		wpMeat: 0,
		wpMilk: 0,
		status: "Banned"
	},
	{
		name: "Tilmicosin",
		class: "Macrolide",
		species: ["Cattle", "Swine"],
		maxDose: "10 mg/kg",
		wpMeat: 28,
		wpMilk: 0,
		status: "Approved"
	},
	{
		name: "Lincomycin",
		class: "Lincosamide",
		species: ["Swine", "Poultry"],
		maxDose: "11 mg/kg",
		wpMeat: 6,
		wpMilk: 2,
		status: "Approved"
	},
	{
		name: "Trimethoprim",
		class: "Sulfonamide",
		species: ["Cattle", "Poultry"],
		maxDose: "5 mg/kg",
		wpMeat: 10,
		wpMilk: 2,
		status: "Approved"
	},
	{
		name: "Erythromycin",
		class: "Macrolide",
		species: ["Cattle", "Poultry"],
		maxDose: "10 mg/kg",
		wpMeat: 14,
		wpMilk: 3,
		status: "Approved"
	},
	{
		name: "Neomycin",
		class: "Aminoglycoside",
		species: ["Cattle", "Swine"],
		maxDose: "11 mg/kg",
		wpMeat: 30,
		wpMilk: 2,
		status: "Approved"
	},
	{
		name: "Colistin",
		class: "Polymyxin",
		species: ["—"],
		maxDose: "—",
		wpMeat: 0,
		wpMilk: 0,
		status: "Banned"
	},
	{
		name: "Doxycycline",
		class: "Tetracycline",
		species: ["Poultry", "Swine"],
		maxDose: "20 mg/kg",
		wpMeat: 7,
		wpMilk: 0,
		status: "Approved"
	},
	{
		name: "Marbofloxacin",
		class: "Fluoroquinolone",
		species: ["Cattle"],
		maxDose: "2 mg/kg",
		wpMeat: 6,
		wpMilk: 2,
		status: "Restricted"
	},
	{
		name: "Cefquinome",
		class: "Cephalosporin",
		species: ["Cattle"],
		maxDose: "1 mg/kg",
		wpMeat: 5,
		wpMilk: 1,
		status: "Approved"
	},
	{
		name: "Tiamulin",
		class: "Pleuromutilin",
		species: ["Swine", "Poultry"],
		maxDose: "25 mg/kg",
		wpMeat: 7,
		wpMilk: 0,
		status: "Approved"
	}
];
var flaggedFarms = [
	{
		id: "FARM-MH-2025-00231",
		farmer: "Mahesh Patil",
		district: "Pune, MH",
		issue: "Unprescribed AMU (3 entries)",
		severity: "high"
	},
	{
		id: "FARM-PB-2025-00088",
		farmer: "Sunita Devi",
		district: "Ludhiana, PB",
		issue: "MRL violation — Enrofloxacin",
		severity: "high"
	},
	{
		id: "FARM-AP-2025-00410",
		farmer: "Mohan Rao",
		district: "Guntur, AP",
		issue: "Overdue inspection (62 days)",
		severity: "medium"
	},
	{
		id: "FARM-HR-2025-00112",
		farmer: "Rajesh Kumar",
		district: "Karnal, HR",
		issue: "Withdrawal period breach",
		severity: "high"
	}
];
var mrlViolations = [
	{
		farm: "FARM-PB-2025-00088",
		animal: "BR-201",
		drug: "Enrofloxacin",
		residue: "180 ppb",
		limit: "100 ppb",
		status: "FAIL"
	},
	{
		farm: "FARM-MH-2025-00231",
		animal: "PT-118",
		drug: "Oxytetracycline",
		residue: "240 ppb",
		limit: "200 ppb",
		status: "FAIL"
	},
	{
		farm: "FARM-AP-2025-00077",
		animal: "BR-302",
		drug: "Tylosin",
		residue: "55 ppb",
		limit: "50 ppb",
		status: "FAIL"
	}
];
var topDrugs = [
	{
		drug: "Oxytetracycline",
		count: 1284,
		farms: 412,
		level: "high"
	},
	{
		drug: "Amoxicillin",
		count: 982,
		farms: 356,
		level: "medium"
	},
	{
		drug: "Enrofloxacin",
		count: 654,
		farms: 198,
		level: "high"
	},
	{
		drug: "Tylosin",
		count: 521,
		farms: 187,
		level: "medium"
	},
	{
		drug: "Sulfadimethoxine",
		count: 410,
		farms: 156,
		level: "low"
	},
	{
		drug: "Penicillin G",
		count: 389,
		farms: 142,
		level: "low"
	},
	{
		drug: "Florfenicol",
		count: 312,
		farms: 98,
		level: "medium"
	},
	{
		drug: "Ceftiofur",
		count: 287,
		farms: 76,
		level: "high"
	},
	{
		drug: "Doxycycline",
		count: 245,
		farms: 89,
		level: "low"
	},
	{
		drug: "Tilmicosin",
		count: 198,
		farms: 64,
		level: "low"
	}
];
var amuTrend = [
	{
		month: "Jul",
		Tetracycline: 820,
		Penicillin: 510,
		Fluoroquinolone: 420,
		Macrolide: 310
	},
	{
		month: "Aug",
		Tetracycline: 910,
		Penicillin: 540,
		Fluoroquinolone: 460,
		Macrolide: 330
	},
	{
		month: "Sep",
		Tetracycline: 980,
		Penicillin: 620,
		Fluoroquinolone: 510,
		Macrolide: 360
	},
	{
		month: "Oct",
		Tetracycline: 1040,
		Penicillin: 680,
		Fluoroquinolone: 540,
		Macrolide: 380
	},
	{
		month: "Nov",
		Tetracycline: 1120,
		Penicillin: 710,
		Fluoroquinolone: 570,
		Macrolide: 410
	},
	{
		month: "Dec",
		Tetracycline: 1180,
		Penicillin: 740,
		Fluoroquinolone: 590,
		Macrolide: 440
	},
	{
		month: "Jan",
		Tetracycline: 1240,
		Penicillin: 780,
		Fluoroquinolone: 620,
		Macrolide: 470
	},
	{
		month: "Feb",
		Tetracycline: 1290,
		Penicillin: 820,
		Fluoroquinolone: 650,
		Macrolide: 490
	},
	{
		month: "Mar",
		Tetracycline: 1320,
		Penicillin: 860,
		Fluoroquinolone: 670,
		Macrolide: 510
	},
	{
		month: "Apr",
		Tetracycline: 1280,
		Penicillin: 840,
		Fluoroquinolone: 640,
		Macrolide: 500
	},
	{
		month: "May",
		Tetracycline: 1310,
		Penicillin: 870,
		Fluoroquinolone: 660,
		Macrolide: 520
	},
	{
		month: "Jun",
		Tetracycline: 1284,
		Penicillin: 882,
		Fluoroquinolone: 654,
		Macrolide: 521
	}
];
var purposeBreakdown = [
	{
		name: "Therapeutic",
		value: 62
	},
	{
		name: "Prophylactic",
		value: 26
	},
	{
		name: "Metaphylactic",
		value: 12
	}
];
var speciesAMU = [
	{
		species: "Cattle",
		count: 4820
	},
	{
		species: "Poultry",
		count: 6210
	},
	{
		species: "Swine",
		count: 1840
	},
	{
		species: "Goat",
		count: 920
	},
	{
		species: "Aquaculture",
		count: 1340
	}
];
var states = [
	{
		state: "Maharashtra",
		farms: 48210,
		compliance: 96.8,
		violations: 14,
		trend: "up",
		amu: .82
	},
	{
		state: "Punjab",
		farms: 31420,
		compliance: 94.2,
		violations: 22,
		trend: "down",
		amu: .91
	},
	{
		state: "Andhra Pradesh",
		farms: 42180,
		compliance: 97.1,
		violations: 9,
		trend: "up",
		amu: .65
	},
	{
		state: "Madhya Pradesh",
		farms: 38900,
		compliance: 95.4,
		violations: 18,
		trend: "up",
		amu: .72
	},
	{
		state: "Haryana",
		farms: 22480,
		compliance: 96,
		violations: 11,
		trend: "flat",
		amu: .78
	},
	{
		state: "Tamil Nadu",
		farms: 36210,
		compliance: 97.6,
		violations: 7,
		trend: "up",
		amu: .58
	},
	{
		state: "Uttar Pradesh",
		farms: 61280,
		compliance: 93.8,
		violations: 31,
		trend: "down",
		amu: .95
	},
	{
		state: "Karnataka",
		farms: 28140,
		compliance: 96.2,
		violations: 12,
		trend: "up",
		amu: .69
	}
];
var vetPatients = [
	{
		farmId: "FARM-HR-2025-00112",
		farmer: "Rajesh Kumar",
		animal: "BR-001",
		drug: "Oxytetracycline",
		issued: "15 Jun 2025",
		endsOn: "13 Jul 2025",
		status: "compliant"
	},
	{
		farmId: "FARM-HR-2025-00112",
		farmer: "Rajesh Kumar",
		animal: "BR-045",
		drug: "Enrofloxacin",
		issued: "18 Jun 2025",
		endsOn: "02 Jul 2025",
		status: "pending"
	},
	{
		farmId: "FARM-PB-2025-00088",
		farmer: "Sunita Devi",
		animal: "PT-023",
		drug: "Amoxicillin",
		issued: "10 Jun 2025",
		endsOn: "20 Jun 2025",
		status: "non-compliant"
	},
	{
		farmId: "FARM-AP-2025-00410",
		farmer: "Mohan Rao",
		animal: "GN-007",
		drug: "Tylosin",
		issued: "12 Jun 2025",
		endsOn: "03 Jul 2025",
		status: "compliant"
	},
	{
		farmId: "FARM-HR-2025-00112",
		farmer: "Rajesh Kumar",
		animal: "BR-012",
		drug: "Amoxicillin",
		issued: "10 Jun 2025",
		endsOn: "20 Jun 2025",
		status: "compliant"
	}
];
var labResults = [
	{
		id: "LAB-2025-0481",
		farm: "FARM-MH-2025-00231",
		sample: "Milk",
		drug: "Oxytetracycline",
		residue: "240 ppb",
		limit: "200 ppb",
		status: "FAIL",
		date: "22 Jun 2025"
	},
	{
		id: "LAB-2025-0480",
		farm: "FARM-PB-2025-00088",
		sample: "Meat",
		drug: "Enrofloxacin",
		residue: "180 ppb",
		limit: "100 ppb",
		status: "FAIL",
		date: "21 Jun 2025"
	},
	{
		id: "LAB-2025-0479",
		farm: "FARM-HR-2025-00112",
		sample: "Milk",
		drug: "Amoxicillin",
		residue: "8 ppb",
		limit: "10 ppb",
		status: "PASS",
		date: "20 Jun 2025"
	},
	{
		id: "LAB-2025-0478",
		farm: "FARM-AP-2025-00410",
		sample: "Egg",
		drug: "Tylosin",
		residue: "12 ppb",
		limit: "200 ppb",
		status: "PASS",
		date: "19 Jun 2025"
	},
	{
		id: "LAB-2025-0477",
		farm: "FARM-TN-2025-00145",
		sample: "Honey",
		drug: "Sulfadimethoxine",
		residue: "4 ppb",
		limit: "50 ppb",
		status: "PASS",
		date: "18 Jun 2025"
	}
];
var notifications = [
	{
		type: "urgent",
		title: "Withdrawal ends tomorrow",
		body: "Animal BR-045 withdrawal ends tomorrow (28 Jun). Do NOT sell or collect milk.",
		animalId: "BR-045",
		tab: "timeline"
	},
	{
		type: "warning",
		title: "Withdrawal ending soon",
		body: "Animal BR-012 withdrawal ends in 3 days (30 Jun).",
		animalId: "BR-012",
		tab: "timeline"
	},
	{
		type: "cleared",
		title: "Animal cleared",
		body: "Animal CH-007 is now cleared. Safe to proceed.",
		animalId: "CH-007",
		tab: "tests"
	},
	{
		type: "warning",
		title: "Prescription review needed",
		body: "Treatment logged without linked prescription for BR-001.",
		animalId: "BR-001",
		tab: "treatments"
	}
];
var mockPrescriptions = [
	{
		id: "RX-2025-0512",
		drug: "Oxytetracycline",
		animal: "BR-001",
		vet: "Dr. Anjali Sharma"
	},
	{
		id: "RX-2025-0498",
		drug: "Amoxicillin",
		animal: "BR-012",
		vet: "Dr. Anjali Sharma"
	},
	{
		id: "RX-2025-0476",
		drug: "Enrofloxacin",
		animal: "BR-045",
		vet: "Dr. R. Iyer"
	}
];
var recentActivity = [
	{
		date: "22 Jun 2025",
		animal: "BR-001",
		drug: "Oxytetracycline",
		action: "Treatment logged"
	},
	{
		date: "21 Jun 2025",
		animal: "BR-045",
		drug: "Enrofloxacin",
		action: "Treatment logged"
	},
	{
		date: "20 Jun 2025",
		animal: "CH-007",
		drug: "—",
		action: "Cleared withdrawal"
	},
	{
		date: "19 Jun 2025",
		animal: "BR-012",
		drug: "Amoxicillin",
		action: "Treatment logged"
	},
	{
		date: "18 Jun 2025",
		animal: "PT-023",
		drug: "—",
		action: "Lab result PASS"
	}
];
//#endregion
export { vetPatients as _, animals as a, labResults as c, notifications as d, purposeBreakdown as f, topDrugs as g, states as h, amuTrend as i, mockPrescriptions as l, speciesAMU as m, ROLE_LABELS as n, drugs as o, recentActivity as p, activeTreatments as r, flaggedFarms as s, ROLE_HOMES as t, mrlViolations as u };
