NBA 2024-25 workbooks -> CSV (23 files)
Sources: NBA Annual Report 2024-25; NBA Year at a Glance 2024-25; National Report on Fresh Blood Products 2024-25; Report on the Issue and Use of Immunoglobulin 2024-25 (Ig); NBA Blood and Blood Product Purchase Volume report 2024-25. Cite the originals (NBA, CC BY 4.0).
All files are tidy/long format. Every set of figures was checked against its printed totals.

nba_report/
  nba_year_at_a_glance_2024_25.csv           Headline figures (donors, donations, plasma, funding, Ig grams...)  [snapshot cards]
  nba_fresh_blood_spend_by_year.csv          Fresh blood spend 2015-16 to 2024-25 with printed % growth          [line]
  nba_purchases_by_category_year.csv         Spend by category 2020-21 to 2024-25 (adds to printed totals)      [stacked bar/donut]
  nba_ig_demand_growth_by_year.csv           Ig demand growth %, 5 years
  nba_lifeblood_kpis_2023_24_vs_2024_25.csv  Lifeblood KPIs incl. new donors (text values kept as printed, e.g. "93.3%")
  nba_purchase_volumes_2024_25.csv           Purchase volumes (group totals + product rows)                      [products-and-uses sankey]
fresh_blood/
  fb_issues_by_state_year.csv                RBC/platelet/FFP issues by state, 10 years (state sums = national)
  fb_issues_per_1000_population_by_state_year.csv   Per-1,000 rates by state  -> choropleth, no ABS data needed
  fb_national_issues_and_per_1000_by_year.csv National issues and per-1,000, 10 years
  fb_issues_by_remoteness_year.csv           Issues, transfers, discards by remoteness class, 5 years
  fb_issues_and_discards_by_blood_group_year.csv  By ABO/Rh group, plus ABO population share
  fb_issues_discards_and_cost_by_year.csv    Issues/discards with $ costs, 5 years                               [spending]
  fb_public_vs_private_issues_by_year_OPTIONAL.csv
immunoglobulin/
  ig_domestic_vs_imported_public_private_by_state_2024_25.csv  (grams + grams per 1,000 population)
  ig_domestic_vs_imported_by_product_state_2024_25.csv         (by product, cost, domestic %)
  ig_patients_by_state_2023_24_and_2024_25.csv
  ig_pct_change_in_grams_by_state_year.csv
  ig_grams_by_criteria_category_year.csv
  ig_patients_by_age_range_2024_25.csv
  ig_by_specialty_and_state_2024_25.csv      (grams, patients, new patients)
  ig_grams_top10_conditions_by_state_2024_25.csv
  ig_grams_by_condition_and_product_2024_25.csv   -> products-and-uses sankey (condition -> product)
  ig_conditions_national_2024_25.csv         134 conditions, national figures only (state detail from the 842-row sheet left out)

SKIPPED
- Fresh blood Table023 (priority and order type): low value for your charts.
- Ig Tables 12, 14, 16, 17 (SCIg/other splits by state) and the per-state rows of the 842-row condition sheet: repeat what the files above already show. Ask if you want them.

FLAGS / SOURCE QUIRKS
- Remoteness: Inner Regional 2024-25 red cell "transfers out" is printed as 1,295. The net-issues arithmetic and the 5-year total both give 12,958, so the CSV uses 12,958 and notes the printed value.
- Purchases: the three "BENEFIX ... PSF" FIX rows (3,478,000 IU) are NOT in the printed Factor IX total; all other FIX rows add to it exactly. Flagged in the note column. Every other group (emicizumab, FVIII, C1-INH, etc.) matches vials x size exactly. The duplicated Factor XI row was kept once.
- Ig Table 5 vs 6: imported national total is 5,683,857 in one and 5,683,137 in the other (720 g, the "Other" row). Table 6's is used for state sums.
- Ig conditions: the TEN row has its labels shifted in the source; values were remapped using the category subtotal (see note). "<N" counts are blank with the printed bound in patients_note. Condition grams add to the printed category subtotals within 3 g (rounding).
- Ig age table sums differ from Table 9's total by 3 g (rounding).
- Fresh blood sheet named "RBC issues, transfers, discards" actually holds platelets and FFP too.
