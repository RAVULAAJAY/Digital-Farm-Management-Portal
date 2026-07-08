# 📸 Screenshots Guide - Digital Farm Management Portal

## How to Capture Screenshots Yourself

Since this is a live web application, the best way to see the UI is to run it locally:

```bash
npm run dev
```

Then open: **http://localhost:5174**

---

## Dashboard Visual Guide

### Login Page
```
┌─────────────────────────────────────────────────────────────┐
│ भारत सरकार | Government of India · Ministry of ...          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Logo] DoAH&D · GOVERNMENT OF INDIA                         │
│          Department of Animal Husbandry & Dairying           │
│                                                              │
│  ┌──────────────────────────────────────┐                   │
│  │ National AMU & MRL Monitoring        │                   │
│  │                                      │                   │
│  │ Digital Farm Management Portal       │                   │
│  │                                      │                   │
│  │ Antimicrobial Usage & Maximum        │  [Sign in Box]   │
│  │ Residue Limits monitoring system     │  Role: [Farmer] │
│  │ for India's livestock...             │  User: [input]  │
│  │                                      │  Pass: [input]  │
│  │ ✓ 4.8 lakh farms                     │  [Sign in]      │
│  │ ✓ Withdrawal compliance              │  [DigiLocker]   │
│  └──────────────────────────────────────┘  Language: [v]   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Farmer Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] DoAH&D          Page Title         [User] [Logout]   │
├───────────────────────┬─────────────────────────────────────┤
│ Navigation:           │  [Page Header: Farmer Dashboard]    │
│ • Dashboard (🏠)      │                                      │
│ • My Animals (🐄)     │  [Stat Card]  [Stat Card]           │
│ • Prescriptions (📋)  │  Compliance   Active      Clearance  │
│ • Settings (⚙️)       │  Score: 87%   Treats: 5  Days: 12   │
│ • Profile (👤)        │                                      │
│ • Logout (🚪)         │  [Stat Card]  [Stat Card]           │
│                       │  Animal       Days to                │
│                       │  Status: 12   Product: 8 days       │
│                       │                                      │
│                       │  ┌─────────────────────────────┐    │
│                       │  │ My Animals                  │    │
│                       │  ├─────────────────────────────┤    │
│                       │  │ ID    Species  Status  Bred │    │
│                       │  │ BR-01 Cattle   🟢      Gir  │    │
│                       │  │ BR-02 Cattle   🟡      Jersey│   │
│                       │  │ PT-05 Poultry  🔴      Broiler│  │
│                       │  └─────────────────────────────┘    │
└───────────────────────┴─────────────────────────────────────┘
```

### National Admin Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] DoAH&D          Admin Dashboard     [User] [Logout]   │
├───────────────────────┬─────────────────────────────────────┤
│ Navigation:           │  [Stat Cards - 6 across]            │
│ • Dashboard (🏠)      │  4,82,000  18.3L   28    96.2%  0.04%│
│ • Users (👥)          │  Farms     Records States Compliance │
│ • Settings (⚙️)       │                                      │
│ • Audit (📋)          │  [India Heatmap Visualization]       │
│ • i18n (🌐)           │  ┌─────────────────────────────┐    │
│ • Analytics (📊)      │  │                             │    │
│ • Profile (👤)        │  │  India AMU Heatmap          │    │
│ • Logout (🚪)         │  │  Dark Red: High AMU activity│    │
│                       │  │  Light: Low activity        │    │
│                       │  │  [Map of states colored]    │    │
│                       │  └─────────────────────────────┘    │
│                       │                                      │
│                       │  [System Alerts]                    │
│                       │  ⚠️ 3 MRL violations in last 24h    │
│                       │  ⚠️ 2 farms flagged for inspection  │
└───────────────────────┴─────────────────────────────────────┘
```

### Veterinarian Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] DoAH&D    Veterinarian Dashboard   [User] [Logout]    │
├───────────────────────┬─────────────────────────────────────┤
│ Navigation:           │  [Stat Cards - 4 across]            │
│ • Dashboard (🏠)      │  18       7       34        88%      │
│ • My Patients (👨)    │  Active   Patients Monthly Compliance│
│ • Issue Rx (📝)       │                                      │
│ • Compliance (✓)      │  ┌─────────────────────────────┐    │
│ • Alerts (🔔)         │  │ My Patients              [#]│    │
│ • Profile (👤)        │  ├─────────────────────────────┤    │
│ • Logout (🚪)         │  │ ID    Animal  Drug   Status │    │
│                       │  │ FARM1 BR-001  Oxytet 🟢     │    │
│                       │  │ FARM2 BR-045  Enro   🟡     │    │
│                       │  │ FARM3 PT-023  Amoxi  🟢     │    │
│                       │  └─────────────────────────────┘    │
│                       │                                      │
│                       │  ┌─────────────────────────────┐    │
│                       │  │ Quick Prescription          │    │
│                       │  ├─────────────────────────────┤    │
│                       │  │ Farm: [search]              │    │
│                       │  │ Animal: [input]             │    │
│                       │  │ Drug: [select]              │    │
│                       │  │ [Issue Rx]                  │    │
│                       │  └─────────────────────────────┘    │
└───────────────────────┴─────────────────────────────────────┘
```

### Regulatory Officer Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] DoAH&D  Regulatory Officer Dashboard [User] [Logout]  │
├───────────────────────┬─────────────────────────────────────┤
│ Navigation:           │  [Stat Cards - 6 across]            │
│ • Dashboard (🏠)      │  12,847  3,421  892   3   156  96.2%│
│ • Flagged Farms (🚩)  │  Farms   Records Pending Violations  │
│ • Violations (⚠️)     │                                      │
│ • Inspections (🔍)    │  [Filter Bar]                       │
│ • Reports (📊)        │  State: [Maharashtra ▼]             │
│ • Profile (👤)        │  Drug: [Oxytetracycline ▼]          │
│ • Logout (🚪)         │  [Flagged CSV] [Violations CSV] [PDF]│
│                       │                                      │
│                       │  ┌─────────────────────────────┐    │
│                       │  │ MRL Violations          [#] │    │
│                       │  ├─────────────────────────────┤    │
│                       │  │ Farm        Animal  Residue │    │
│                       │  │ FARM-MH-001 BR-001 45 PPM  │    │
│                       │  │ FARM-AP-002 BR-045 52 PPM  │    │
│                       │  │ FARM-PB-003 PT-100 78 PPM  │    │
│                       │  └─────────────────────────────┘    │
└───────────────────────┴─────────────────────────────────────┘
```

### Lab Technician Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ [Logo] DoAH&D    Lab Dashboard           [User] [Logout]     │
├───────────────────────┬─────────────────────────────────────┤
│ Navigation:           │  [Stat Cards - 5 across]            │
│ • Dashboard (🏠)      │  24       156      3     78    12h   │
│ • Results (📋)        │  Pending  Complete Violated Farms    │
│ • Upload (📤)         │                                      │
│ • Reports (📊)        │  ┌─────────────────────────────┐    │
│ • Profile (👤)        │  │ Upload Test Result          │    │
│ • Logout (🚪)         │  ├─────────────────────────────┤    │
│                       │  │ Farm ID: [input]            │    │
│                       │  │ Sample ID: [input]          │    │
│                       │  │ Drug: [select]              │    │
│                       │  │ Residue (PPM): [input]      │    │
│                       │  │ [Submit Result]             │    │
│                       │  └─────────────────────────────┘    │
│                       │                                      │
│                       │  ┌─────────────────────────────┐    │
│                       │  │ Recent Results          [#] │    │
│                       │  ├─────────────────────────────┤    │
│                       │  │ Sample  Farm  Result Status │    │
│                       │  │ S-0001  FARM1 28 PPM  ✅    │    │
│                       │  │ S-0002  FARM2 45 PPM  ❌    │    │
│                       │  │ S-0003  FARM3 15 PPM  ✅    │    │
│                       │  └─────────────────────────────┘    │
└───────────────────────┴─────────────────────────────────────┘
```

---

## Color Coding Reference

| Color | Meaning | Example |
|-------|---------|---------|
| 🟢 Green | Compliant / Good | Status: Good, Compliance achieved |
| 🟡 Amber | Warning / Caution | Approaching deadline, Need attention |
| 🔴 Red | Critical / Violation | Non-compliant, MRL exceeded |

---

## Key UI Elements

### Stat Cards
- Displays key metrics
- Shows icon, label, and large number
- Color-coded (Green/Amber/Red)
- Clickable for details

### Data Tables
- Sortable columns (click header)
- Searchable content
- Action buttons (Edit, Delete, View)
- Pagination for large datasets
- Row highlighting on hover

### Forms
- Input validation (red border on error)
- Placeholder text for guidance
- Submit buttons
- Clear error messages
- Success notifications

### Buttons
- **Primary**: Green (main actions)
- **Secondary**: Gray outline (less important)
- **Danger**: Red (delete/remove)
- **States**: Normal, Hover, Active, Disabled

### Notifications
- Toast messages (top-right corner)
- Success (green), Error (red), Info (blue)
- Auto-dismiss after 3-5 seconds
- Can be manually dismissed

---

## Responsive Design

The dashboard is responsive and works on:
- 💻 Desktop (1920px+)
- 🖥️ Laptop (1024px - 1920px)
- 📱 Tablets (768px - 1024px)
- 📱 Mobile (below 768px)

On mobile:
- Sidebar collapses into hamburger menu
- Tables scroll horizontally
- Cards stack vertically
- Touch-friendly button sizes

---

## How to Test All Dashboards

```bash
# 1. Start the app
npm run dev

# 2. Open browser
http://localhost:5174

# 3. Login as different roles
Role: Farmer
Username: any
Password: any
→ http://localhost:5174/app/farmer

# 4. Change role and try others
Role: Veterinarian → /app/vet
Role: Regulatory Officer → /app/regulator
Role: Lab Technician → /app/lab
Role: National Admin → /app/admin

# 5. Change language
Click dropdown: English → हिन्दी → తెలుగు → தமிழ் → मराठी
```

---

## Browser Developer Tools

To inspect elements:
1. Right-click on any element
2. Select "Inspect" or "Inspect Element"
3. View HTML, CSS, and JavaScript
4. Check responsive mode: Ctrl+Shift+M (Chrome/Firefox)

---

**Pro Tip**: Refresh the page (Ctrl+R or Cmd+R) to get fresh mock data at any time!
