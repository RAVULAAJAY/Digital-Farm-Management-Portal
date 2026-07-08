# Digital Farm Management Portal - User Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [System Overview](#system-overview)
3. [For Each Role](#for-each-role)
4. [Common Tasks](#common-tasks)
5. [FAQs](#faqs)
6. [Troubleshooting](#troubleshooting)

---

## Getting Started

### First-Time Login

1. **Open the Portal**
   - Navigate to: `http://localhost:5174` (development) or your deployed URL
   - See the Government of India header with Ministry affiliation

2. **Select Your Language**
   - Click the language dropdown in the top-right corner
   - Choose from: English, Hindi, Telugu, Tamil, Marathi
   - All content updates instantly

3. **Choose Your Role**
   - In the "Sign in" form, select your role from the dropdown:
     - 🚜 Farmer
     - 🩺 Veterinarian
     - 📊 Regulatory Officer
     - 🔬 Lab Technician
     - 🏛️ National Admin

4. **Enter Credentials**
   - Username: Any value (demo mode)
   - Password: Any value (demo mode)
   - Or use **DigiLocker OAuth** for government login

5. **Access Dashboard**
   - Click "Sign in"
   - Redirected to your role-specific dashboard

---

## System Overview

### Key Concepts

**AMU (Antimicrobial Usage)**
- Tracking when medicines are given to animals
- Monitoring dosages and drug types
- Recording treatment duration

**MRL (Maximum Residue Limit)**
- Safe levels of drug residues in food
- Compliance period after treatment ends (withdrawal period)
- Lab testing to verify safety

**Withdrawal Period**
- Days animal cannot be used for food/milk after treatment
- Varies by drug and species
- Calculated automatically by system

**Compliance Score**
- Percentage of treatments completed according to regulations
- Target: >90% for all farms
- Recalculated monthly

### Dashboard Components

**Stat Cards**: Quick metrics overview
- Large number = key metric
- Icon indicates type
- Color coding: Green (good), Amber (warning), Red (critical)

**Tables**: Detailed data display
- Sortable columns
- Click for more details
- Status indicators

**Forms**: Quick action entry
- Pre-filled where possible
- Validation on submit
- Success notifications

**Charts**: Visualization
- Heatmaps for state-level data
- Trend lines for compliance
- Comparative analytics

---

## For Each Role

### 🚜 FARMER GUIDE

**Dashboard Sections**

| Section | What It Shows | Action |
|---------|---------------|--------|
| **Stat Cards** | Total animals, active treatments, days to clearance, compliance % | Monitor status |
| **My Animals** | All registered animals with health status | View details |
| **My Treatments** | Current and past treatment log | Review history |
| **Alerts** | Critical notifications | Take action |

**Common Tasks**

1. **Register an Animal**
   - Click "Add Animal" button
   - Enter: Species, Breed, Age, Identification
   - Save to farm profile

2. **Log a Treatment**
   - Click "Log New Treatment"
   - Select animal from dropdown
   - Enter treatment details:
     - Drug name (search in formulary)
     - Dose given
     - Route (Oral, Injection, etc.)
     - Start date
   - Veterinarian fills: Duration, Withdrawal period
   - System auto-calculates: Clearance date
   - Submit

3. **Monitor Withdrawal Period**
   - Dashboard shows "Days to Next Clearance"
   - Countdown updates daily
   - Animal cannot be used for food/milk until countdown = 0
   - Get alert 1 day before clearance

4. **Check Compliance**
   - See compliance % on dashboard
   - Red/Amber flags indicate issues
   - Review flagged treatments
   - Contact veterinarian if needed

5. **View Alerts**
   - Check notification icon (bell)
   - See pending actions
   - Critical alerts appear in red
   - Dismiss after reading

**Tips for Farmers**
- ✅ Keep treatments logged within 24 hours
- ✅ Always get veterinarian prescription
- ✅ Don't exceed withdrawal periods
- ✅ Keep animal identification clear
- ✅ Report new animals promptly

---

### 🩺 VETERINARIAN GUIDE

**Dashboard Sections**

| Section | Purpose | Action |
|---------|---------|--------|
| **Stat Cards** | Active prescriptions, patients, compliance rate | Monitor workload |
| **My Patients** | All animals under treatment | Review cases |
| **Quick Prescription** | Fast prescription entry | Issue prescription |
| **Flagged Entries** | Unprescribed AMU detected | Investigate & alert |

**Common Tasks**

1. **Issue a Prescription**
   - Click "Issue Prescription"
   - Select farm from dropdown
   - Select animal ID
   - Choose drug from formulary:
     - Drug name auto-fills MRL data
     - System shows: Approved status, species compatibility
   - Enter: Dose, Route (Oral/Injection), Duration
   - System auto-calculates: Withdrawal period
   - Add notes if needed
   - Submit prescription

2. **Review Patient History**
   - Click animal in "My Patients" table
   - See all past treatments
   - Check previous drug responses
   - Review compliance history
   - Use to inform new prescription

3. **Monitor Compliance**
   - "Compliance Rate" card shows % of compliant patients
   - Red flag = non-compliant
   - Click to see details
   - Send alert to farmer if needed

4. **Investigate Flagged Entries**
   - See section: "Flagged Entries — Unprescribed AMU"
   - Shows treatments without prescriptions
   - May indicate: Missing records, unauthorized use
   - Click to investigate
   - Coordinate with farmer

5. **Send Alerts**
   - Click "Alert" button in patient table
   - Enter alert message
   - Farmer receives notification
   - Use for non-compliance, dose errors, etc.

**Formulary Data Access**
- All drugs show: Class, Max dose, Species compatibility, MRL values
- Withdrawal periods auto-populate
- Drug status: Approved/Restricted/Banned
- Update only by admin through system

**Tips for Veterinarians**
- ✅ Always check drug formulary before prescribing
- ✅ Verify MRL and withdrawal periods
- ✅ Check patient history for drug interactions
- ✅ Use correct dosage for species and weight
- ✅ Set realistic withdrawal periods
- ✅ Follow up on non-compliant farmers

---

### 📊 REGULATORY OFFICER GUIDE

**Dashboard Sections**

| Section | Purpose | Action |
|---------|---------|--------|
| **Stat Cards** | Farms, records, withdrawals, violations, inspections | Monitor district |
| **MRL Violations** | Products exceeding safe residue levels | Investigate |
| **Flagged Farms** | Farms with compliance issues | Inspect |
| **Export Options** | Generate reports for oversight | Create reports |

**Common Tasks**

1. **Review Flagged Farms**
   - See table of non-compliant farms
   - Check: Farm ID, Issue type, Severity
   - Status indicators: Red/Amber/Green
   - Click to expand details

2. **Investigate MRL Violations**
   - Open "MRL Violations" section
   - See: Farm, Animal, Drug, Residue level, MRL limit
   - Compare: Detected residue vs. safe limit
   - Status: Violation confirmed if detected > MRL
   - Plan inspection accordingly

3. **Inspect Flagged Farms**
   - Use "Farms Inspected" metric to track workload
   - Click farm to get details:
     - Farm location
     - Farmer contact
     - Issue history
     - Recent treatments
   - Plan on-site inspection
   - Record findings in system
   - Issue notices if needed

4. **Filter Data**
   - Use dropdown filters for: State, District, Drug type
   - Refine results to focus on priority areas
   - Active filters shown with [X] to clear

5. **Generate Reports**
   - **Flagged Farms CSV**: Export farm list for oversight
   - **Violations CSV**: Export violation records
   - **PDF Report**: Comprehensive compliance report
   - Use for: Higher authority, documentation, analysis

6. **Access Analytics**
   - Click "Open Analytics" button
   - See: Trend charts, state heatmap, drug analysis
   - Identify patterns and hotspots
   - Export for planning

**Compliance Thresholds**
- Acceptable violation rate: <0.5%
- Target compliance rate: >95%
- Target inspection rate: >10% of farms/year

**Tips for Regulatory Officers**
- ✅ Follow up on all violations
- ✅ Maintain inspection schedule
- ✅ Document findings thoroughly
- ✅ Coordinate with veterinarians
- ✅ Use data for district planning
- ✅ Generate monthly reports for state

---

### 🔬 LAB TECHNICIAN GUIDE

**Dashboard Sections**

| Section | Purpose | Action |
|---------|---------|--------|
| **Stat Cards** | Tests completed, violations, pending reviews, farms tested | Track workload |
| **Recent Results** | Lab test history | Review results |
| **Upload Test Result** | Quick result entry | Submit test data |

**Common Tasks**

1. **Upload Test Result**
   - Click form fields or "Upload Test Result"
   - Enter: Farm ID, Sample ID, Animal ID
   - Select: Sample type (Milk, Meat, Eggs, etc.)
   - Select: Drug tested
   - Enter: Residue level detected (PPM or μg/kg)
   - System auto-compares to MRL value
   - Status auto-generated:
     - ✅ PASS = Below MRL
     - ❌ FAIL = Above MRL
   - Add test method if applicable
   - Submit result

2. **Monitor Sample Queue**
   - See "Pending Reviews" count
   - Priority: Oldest tests first
   - Clear backlog to meet SLAs
   - Track turnaround time

3. **Track Violations**
   - "MRL Violations" card shows failed tests
   - Click to review violation details
   - System auto-flags for regulatory officer
   - Add comments if needed

4. **Manage Sample Tracking**
   - Each sample gets unique ID
   - Track from receipt to reporting
   - Maintain chain of custody
   - Record: Date received, test date, analyst name

5. **Generate Lab Reports**
   - Access "Recent Results" table
   - Export monthly results
   - Summary statistics:
     - Total samples tested
     - Pass/fail rate
     - Drugs tested
     - Violations detected

**Quality Assurance**
- Double-check residue levels before submitting
- Verify sample ID matches test
- Use calibrated equipment
- Follow lab protocols
- Document test method used

**Tips for Lab Technicians**
- ✅ Verify all inputs before submitting
- ✅ Maintain consistent test protocols
- ✅ Report violations immediately
- ✅ Keep equipment calibrated
- ✅ Meet sample processing SLAs
- ✅ Maintain detailed records

---

### 🏛️ NATIONAL ADMIN GUIDE

**Dashboard Sections**

| Section | Purpose | Action |
|---------|---------|--------|
| **National Statistics** | All-India overview | Monitor trends |
| **India AMU Heatmap** | State-level intensity | Identify hotspots |
| **System Alerts** | Critical issues nationwide | Take action |
| **User Management** | Add/manage accounts | Control access |
| **Settings** | Configure system | Customize rules |
| **Audit Logs** | Track all activities | Maintain accountability |

**Common Tasks**

1. **Monitor National Trends**
   - Dashboard shows: Total farms, AMU records, states active, MRL violation rate
   - Heatmap shows state-level intensity:
     - Dark red = High AMU activity (needs monitoring)
     - Orange = Moderate activity
     - Light = Low activity
   - Click state to drill down

2. **Manage User Accounts**
   - Add new regulatory officers, vets, labs
   - Assign roles and permissions
   - Deactivate inactive users
   - Reset passwords
   - Track user activity

3. **Configure System Settings**
   - Set withdrawal period calculations
   - Configure MRL thresholds
   - Define compliance targets
   - Set alert triggers
   - Manage business rules

4. **Manage Multilingual Content**
   - i18n (Internationalization) management
   - Add/update translations
   - Support new languages
   - Maintain terminology consistency

5. **Review System Alerts**
   - Critical issues across all states
   - New MRL violations reported
   - Unusual patterns detected
   - System performance alerts
   - User access issues

6. **Generate National Reports**
   - All-India compliance summary
   - State-wise breakdowns
   - Drug usage analysis
   - Violation trends
   - Year-over-year comparisons

7. **Audit Compliance**
   - Review audit logs for all activities
   - Track: User, action, timestamp, details
   - Investigate anomalies
   - Maintain accountability
   - Generate audit reports

**System Health Monitoring**
- Database performance
- API response times
- User concurrent sessions
- Data backup status
- System uptime

**Tips for National Admin**
- ✅ Review national metrics weekly
- ✅ Monitor state-wise trends
- ✅ Manage user access promptly
- ✅ Update system settings as policies change
- ✅ Maintain audit trail
- ✅ Generate quarterly reports

---

## Common Tasks

### Task: Complete a Treatment Workflow

**Scenario**: Cow with mastitis needs antibiotic treatment

**Step 1: Farmer Recognizes Problem**
- Animal shows symptoms
- Farmer logs animal status as "Red"
- Farmer contacts veterinarian

**Step 2: Veterinarian Issues Prescription**
1. Login as veterinarian
2. Click "Issue Prescription"
3. Fill: Farm ID, Animal ID
4. Select drug from formulary: "Oxytetracycline"
   - System shows: Tetracycline class, Approved, Max 20 mg/kg
5. Enter dose: 10 mg/kg
6. Enter duration: 5 days
7. System auto-calculates: Withdrawal = 28 days
8. Submit prescription

**Step 3: Farmer Logs Treatment**
1. Login as farmer
2. Click "Log New Treatment"
3. Select animal: Cow-001
4. Enter drug: Oxytetracycline
5. Enter start date: Today
6. System shows: Withdrawal until [date+28]
7. Submit treatment
8. Get confirmation notification

**Step 4: System Tracks Withdrawal**
- Dashboard shows: "Days to Next Clearance: 28"
- Countdown decreases daily
- Before Day 1: Farmer gets alert: "Treatment clears tomorrow"

**Step 5: After Withdrawal Period**
- Day 29+: Animal products safe for market
- Dashboard shows: "Days to Next Clearance: 0"
- Farmer can harvest milk/meat safely

**Step 6: Lab Testing (Optional)**
- Regulator orders lab test for safety
1. Lab technician receives sample
2. Tests for oxytetracycline residue
3. Uploads result: "2.5 PPM" (MRL limit: 28 PPM)
4. Status: PASS (below limit)
5. Result shows in system

**Step 7: Regulator Reviews Compliance**
- Sees treatment logged correctly
- Sees withdrawal respected
- Sees lab test passed
- ✅ Farm marked compliant

---

### Task: Investigate a Flagged Farm

**Scenario**: Farm has high MRL violation rate

**As Regulatory Officer**:

1. **Receive Alert**
   - Notification: "New MRL violation — FARM-MH-2025-00088"

2. **Access Dashboard**
   - See farm in "Flagged Farms" section
   - Review violation history
   - Check: Drug, residue level, MRL limit

3. **Filter Data**
   - Select state: Maharashtra
   - Filter by drug: Enrofloxacin
   - See all related violations

4. **Plan Inspection**
   - Note farm details and farmer contact
   - Review recent treatments
   - Identify pattern (repeated violations?)

5. **Generate Report**
   - Click "PDF Report"
   - Download comprehensive violation report
   - Include: Dates, drugs, residue levels, MRL limits

6. **Conduct Inspection**
   - Visit farm on scheduled date
   - Verify: Drug storage, dosing accuracy, record-keeping
   - Interview farmer and veterinarian
   - Document findings

7. **Take Action**
   - If issue confirmed: Issue compliance notice
   - If recordkeeping: Provide training
   - If unauthorized use: Escalate to police

8. **Follow-up**
   - Re-inspect after corrective action
   - Monitor for repeat violations
   - Document resolution

---

## FAQs

### General Questions

**Q: Can I use the portal from mobile?**
A: The portal is responsive and works on tablets. Full mobile app coming soon. Use browser mobile view for now.

**Q: How long does a treatment record stay in the system?**
A: Records are maintained for minimum 3 years for regulatory compliance and historical reference.

**Q: What if I forget my password?**
A: Use "Forgot Password" link to reset. In demo mode, any password works.

**Q: Is my data secure?**
A: Yes. Government-grade security with encryption, secure sessions, and audit logging.

**Q: Can I have multiple roles?**
A: Yes. You can login as different roles to see different dashboards. Select role at login.

### Farmer Questions

**Q: When can I sell products after treatment?**
A: Not until withdrawal period ends (0 days to clearance). Dashboard shows countdown.

**Q: What if I give more medicine than prescribed?**
A: This is illegal. It may cause overdose residues. Always follow vet's prescription exactly.

**Q: Can I use a drug that's not in the formulary?**
A: No. Only approved drugs in the system can be prescribed and logged.

**Q: What happens if the lab finds residues?**
A: Your product is banned from market. You may face penalties. Try to comply strictly.

### Veterinarian Questions

**Q: What's the difference between withdrawal period and treatment duration?**
A: Duration = Days medicine is given. Withdrawal = Days after treatment ends until safe for food. Both required.

**Q: Can I prescribe restricted drugs?**
A: Only if medically necessary. Restricted drugs require special approval and documentation.

**Q: What if a farmer doesn't follow my prescription?**
A: Use the "Alert" feature to notify them. Escalate to regulator if repeated non-compliance.

**Q: How often should I update patient records?**
A: After each treatment. Keep records current for monitoring and compliance.

### Regulator Questions

**Q: How do I prioritize farm inspections?**
A: Focus on: Repeat violators, large MRL violations, high-risk drugs, new farms.

**Q: What's the acceptable violation rate?**
A: <0.5% for state/district. Investigate causes if higher.

**Q: Can I modify lab test results?**
A: No. Lab results are locked once submitted. Any correction requires admin override with audit trail.

**Q: How do I report issues to national admin?**
A: Use system "Escalate" feature or send formal report through government channels.

### Lab Questions

**Q: What detection limit should I use?**
A: Follow lab's standard operating procedure. Typically 1 PPM or lower if possible. Document method.

**Q: What if equipment malfunctions?**
A: Report immediately. Don't submit results. Request maintenance and retest after repair.

**Q: Can I test multiple drugs in one sample?**
A: Yes. Enter separate results for each drug tested.

**Q: How do I document test methods?**
A: Add test method in the "Method" field. Examples: HPLC, ELISA, LC-MS/MS.

### National Admin Questions

**Q: How often should I review national metrics?**
A: Weekly minimum. Compare trends week-to-week and month-to-month.

**Q: What's the benchmark for "good" compliance?**
A: Target: >95% compliance rate, <0.5% violation rate, increasing trends in enforcement actions.

**Q: Can I modify withdrawal periods for drugs?**
A: Only through formal process with Ministry approval. Changes must be documented.

**Q: How do I add a new state to the system?**
A: Contact IT admin. Requires: State setup, users creation, formulary customization.

---

## Troubleshooting

### Login Issues

**Problem**: "Invalid credentials"
- **Solution**: In demo mode, any username/password works. Check caps lock, try different combinations.

**Problem**: "Session expired"
- **Solution**: You were inactive too long. Refresh page or login again.

**Problem**: "DigiLocker button not working"
- **Solution**: DigiLocker integration not live in demo. Use standard login.

### Data Issues

**Problem**: "Animal ID not found"
- **Solution**: Ensure animal is registered first. Go to "My Animals" and add if missing.

**Problem**: "Drug not in formulary"
- **Solution**: Drug must be approved and in system. Contact admin to add if missing.

**Problem**: "Withdrawal period calculated wrong"
- **Solution**: Double-check: Drug MRL, species, dose. System calculates automatically from drug database.

### Performance Issues

**Problem**: "Page loading slowly"
- **Solution**: Clear browser cache. Check internet connection. Try different browser.

**Problem**: "Table won't sort"
- **Solution**: Try refreshing page. Some data may be still loading.

### Notification Issues

**Problem**: "Not receiving alerts"
- **Solution**: Check notification settings. Ensure browser allows notifications. Check spam folder for emails.

**Problem**: "Alert shows outdated information"
- **Solution**: Refresh page (F5). Alerts update periodically; manual refresh shows latest.

### Export Issues

**Problem**: "CSV export not working"
- **Solution**: Disable browser pop-up blocker. File downloads to default Downloads folder.

**Problem**: "PDF looks corrupted"
- **Solution**: Update PDF reader. Try different browser. Check file isn't truncated.

### Account Issues

**Problem**: "Can't access role's dashboard"
- **Solution**: Log out completely. Clear cookies. Login again with that role.

**Problem**: "Changes not saving"
- **Solution**: Check internet connection. Ensure form validation passed (no red errors). Try again.

### Browser Compatibility

| Browser | Compatibility | Version |
|---------|---------------|---------|
| Chrome | ✅ Full | 90+ |
| Firefox | ✅ Full | 88+ |
| Safari | ✅ Full | 14+ |
| Edge | ✅ Full | 90+ |
| IE | ❌ Not supported | — |

---

## Support

For additional help:
- 📧 Email: support@farmmanagement.gov.in
- 📞 Call: 1800-FARMS-24
- 💬 Chat: Available 9 AM - 6 PM IST
- 📚 Documentation: See in-app help pages

---

**Last Updated**: June 2025
**Version**: 1.0
