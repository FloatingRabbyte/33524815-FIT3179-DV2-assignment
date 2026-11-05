Survey and donor-panel workbooks -> CSV
Four workbooks supplied by the user (supplementary tables from published studies). Cite the original papers, not this file.

KEEP (most useful)
donors_by_age_and_sex.csv
  Real donor counts by sex and age band (477,602 donors). From the "Total" row of Sheet2 in the red blood cell antigen workbook. This is the donor age/sex distribution your sketch needed. The workbook does not give the date range: check the paper.
donors_by_country_of_birth.csv
  Donors vs the Australian population by country of birth (490,491 donors; 47,422 have no country recorded). representation_ratio_my_calc = share of donors with known birthplace / share of population (my calculation; 1 = represented in proportion, below 1 = under-represented). Grouped rows (several countries combined) are flagged.
donors_by_region_of_birth_summary.csv
  The same data rolled up to six world regions (my sums). Simpler to chart.
screening_question_impact_by_group.csv
  Share of survey respondents who answered "yes" or "quite likely" to the three proposed screening questions, by age, gender identity, sexuality and ethnicity. Use the "Yes or quite likely" rows. Check the paper's methods to confirm who the respondents were (the title says donors; the workbook doesn't).
campaign_survey_sample_profile.csv
  Gender, religion, education, country-of-birth region and prior blood donation for 454 African-born Australians in the campaign study, split by whether they saw the campaign materials. NOT a national sample, so label any chart with the group.

OPTIONAL
rare_blood_group_donors_by_country.csv
  Donors lacking the Fy(a-b-) or Jk(a-b-) antigens, by country of birth (donor diversity story). Pct columns are my recalculation from counts. Use only countries with at least 100 donors.
mowat_exclusion_factors_with_counts.csv
  Appendix Sheet2 = the paper's Table 3 (already extracted) plus two extra columns: observations_n and raw_prevalence_pct. Use the earlier mowat_table3_exclusion_factors.csv for charts unless you want those two columns.

DROPPED
- Campaign workbook Table 011 (regression coefficients) and Table 012 (pre/post sample mix): statistics-dependent, and not charts you want.
- Eligibility appendix Sheet1 (question-by-question frequencies and the rules used to decide eligibility): methods detail, not chart data.
- Antigen workbook Sheet2 Rh phenotype rows: blood group detail that doesn't fit your story.

CHECKS RUN
- Country sums match the printed totals (490,491 donors; 25,637,760 population). Sex and age totals both equal 477,602.
- Campaign counts add up to 454 (281 seen, 173 not seen) in every section.
- Screening: yes + quite likely matches the combined figure within rounding in all but two cells (First Nations, new partner: 10.0 + 2.7 vs 12.3; men, anal sex: 6.5 + 6.3 vs 12.5). Use the combined figure.

SOURCE QUIRKS
- Rare blood group, United Arab Emirates: the workbook prints 0.8% but 1 of 208 donors is 0.5%. The CSV uses 0.5.
- Screening ethnicity sheet is headed "% of country of birth" but the rows are ethnicity groups.
- Screening age bands "61-75" and "75+" overlap in the source.
- Country grouping oddities are kept as printed (Jordan listed under Africa; Guyana in the Africa group; Bolivia in the Europe group).
- Campaign Table 010 says age n = 472 but every other count totals 454.
- Appendix exclusion table: 49 of 52 rows match the paper's Table 3 exactly. The paper's version has one extra row (payment for sex, females only) and small differences in three tiny non-binary / Latvia-Russia-Ukraine rows. Use the paper for those.
