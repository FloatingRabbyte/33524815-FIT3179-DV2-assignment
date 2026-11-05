Haemovigilance Report 2023-24 -> CSV (11 files)
Source: Australian Haemovigilance Report 2023-24 (NBA). Tables were pictures in the docx, so every number was read by eye and then checked with sums (details below). Cite the original report.

SECTION 1 - transfusion adverse events (these are RECIPIENT events, not donor events)
hv_t1_fresh_blood_issues_by_product_year.csv      Units issued by product (RBC, platelets, FFP, cryo, cryo-depleted) 2019-20 to 2023-24
hv_t3_t4_adverse_events_by_type_year.csv          Adverse events (Table 3) and serious adverse events (Table 4) by type and year. event_type_full comes from the report's abbreviation list
hv_t8_fig5_adverse_events_by_state.csv            Events by state and year, plus 5-year totals for all events and serious events (Figure 5)
hv_t17_state_summary_2023_24.csv                  2023-24 events by state, share of events, and each state's share of red cell issues (use this for a state map)
hv_t17_state_by_event_type_2023_24.csv            2023-24 events by state and event type
hv_t18_adverse_events_by_age_and_type_2023_24.csv Recipient age group x event type, 2023-24
hv_t15_adverse_events_by_product_and_type_5yr.csv Event type x product, 5-year totals
hv_t16_adverse_events_by_product_year.csv         Events by product and year

SECTION 2 - donor safety (DONOR events)
hv_donor_event_rates_per_10000_by_donation_type.csv   Rates per 10,000 donations for whole blood, plasmapheresis, plateletpheresis and total. Unadjusted (2020-21 to 2023-24) and standardised (2022-23, 2023-24), for all events and for events needing outside medical care
hv_donor_event_rates_by_event_type_2023_24.csv        2023-24 events and rates by event type (vasovagal, haematoma, painful arm, citrate reactions...) and donation type, with change from 2022-23
hv_implied_donations_by_type_2023_24_DERIVED.csv      DERIVED BY ME, not printed in the report: donations by type worked out from events / rate x 10,000. About 773,000 whole blood, 873,400 plasma, 27,000 platelet (1.67m total). Treat as approximate. It is 1.6% above the NBA's 1,646,288 donations for 2023-24, so don't mix it with NBA totals

FIXES AND FLAGS
- Table 8 has the SA and WA rows swapped. Figure 5, Figure 11 and Table 17 all agree that WA is 83, 73, 81, 77, 87 and SA is 69, 78, 72, 67, 75. The CSV uses the corrected version.
- Table 16's printed % columns are mislabelled (the first year heading is repeated and 2023-24 is missing). The CSV drops them and calculates the % from counts.
- Table 4: AHTR 2021-22 and Table 17: ACT DHTR are blank in the source; the printed totals show they are 0.
- Serious-event 5-year totals by state come from the Figure 5 chart labels (they add to 343, matching Table 4).
- Table 17 "pct_of_red_cell_issues" is the printed share of red cell issues by state. It is a share, not a per-capita rate.
- The report itself says Queensland's high share (39%) is driven by 176 FNHTR reports and that jurisdictions report differently, so state counts reflect reporting practice, not necessarily real risk.
- Donor events needing outside medical care rose from 5.08 to 6.48 per 10,000 donations in 2023-24 (+27.6%), while the overall donor event rate fell from 392.5 to 363.75 (-7.3%). I haven't looked for the reason.
- I left out the relative risk, confidence interval and p-value columns.

CHECKS RUN
- Every column and row total in Tables 1, 3, 4, 8, 15, 16, 17 and 18 matches the printed totals. The state and age tables also agree with the 2023-24 column of Table 3.
- Donor rates: events / rate gives the same donation count in every row of a column (spread under 0.1%), so each number pair was read correctly.
- One misread (65-74 years, "Other" = 3) was caught by the row-total check and fixed.

NOT DONE (optional)
Tables 5-7 (hospital participation), 9-11 (events by time, weekday, remoteness), 12 (issues by product and remoteness), 13-14 (imputability, severity), 19-21, Table 2 (severity 2023-24), and all the Figures. Most figures repeat the tables above. Table 12 is the most useful of these if you want a regional/remote angle.
