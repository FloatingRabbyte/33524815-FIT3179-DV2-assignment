ABDR Annual Report 2024-25 - tables typed into CSV
Source: Australian Bleeding Disorders Registry Annual Report 2024-2025 (tables and figures were pasted as pictures in the docx; every number was read by eye and then checked against printed totals).
Cite the original report, and the NBA/ABDR as publisher. Check the report's own licence line before publishing.

FILES
abdr_t3_patients_by_diagnosis_year.csv       Registry patients and patients who received product, by diagnosis, 2020-21 to 2024-25 (Table 3; "Total" row left out so it can't double count)
abdr_key_figures_2024_25.csv                 Patients and product volume panels (the two summary panels above Table 3)
abdr_t4_international_incidence.csv          Australia vs 9 countries, prevalence per 100,000 (Table 4). Lat/lon columns are approximate country centres I added, NOT from the report
abdr_fig2_3_severity_share_of_treated_patients.csv   Severe/moderate/mild share of treated haemophilia A and B patients by year (Figures 2 and 3)
abdr_t5_iu_by_severity_and_regimen_2024_25.csv        Product volume (IU) by condition, severity and treatment regimen (Table 5) - good for a sankey
abdr_t6_8_state_profiles_2024_25.csv         Haemophilia A, B and VWD by state: patients, severity, sex, age, weight, IU used, % prophylaxis, IU/kg, IU by product (Tables 6-8). Long format: filter on condition + metric
abdr_t9_product_by_regimen_2024_25.csv       Patients, units and IU/kg by product and regimen (Table 9)
abdr_t10_acquired_other_patients_by_state_2024_25.csv Acquired and other bleeding disorders by state (Table 10)
abdr_t11_acquired_other_products_by_state_2024_25.csv Products used for those disorders by state (Table 11)
abdr_fig4_treatment_centres.csv              19 haemophilia treatment centre hospitals by city. City lat/lon are approximate and added by me
abdr_fig5_national_issues_by_category_2024_25.csv     Share of national issues by product category (Figure 5)
abdr_fig6_clotting_factor_spend_by_year.csv  Clotting factor spend ($m), % of blood budget and patients treated, 2009-10 to 2024-25 (Figure 6)

HOW BLANKS AND "<5" WORK
- "<5" in the report means the count was hidden to protect privacy. In the CSVs the value column is blank, the original text is kept (printed column where there is one) and the flag column says why.
- National cells printed like "<788" are upper bounds, so the value is blank and the printed text is kept. (The key-figures panel gives the exact national severe HMA count: 785.)
- "small breakdown removed in source" = hatched cells in the report (mostly TAS, NT, ACT). Blank = empty in the report.
- State sums are often a little under the national figure because of those hidden cells. I checked that every gap is explained by hidden cells.

THINGS TO KNOW
- Every state-level count is a raw count, so bigger states look bigger. For a choropleth use a rate (e.g. % prophylaxis, IU/kg) or divide by state population from ABS (a second source).
- Table 4: Australia's haemophilia A/B rate is printed as 12; the counts give 11.7. Sweden's "Factor VIII per capita" repeats its haemophilia rate (10.95), which looks like a source typo.
- Table 8: NT total IU is 0 but NT average IU/kg is 23. The source is inconsistent there.
- Table 6 Hemlibra row: unit isn't stated in the picture (probably mg).
- Figure 6: "% of blood budget adjusted to scale" is the report's wording; I couldn't tell what the adjustment is.
- Figure 5: the report doesn't say whether the % is by units or dollars.
- Figures 2 and 3 add up to 98-99.6%, not 100%; the rest isn't shown in the figure.
- This report is about people who NEED products (bleeding disorders), not about donors.
