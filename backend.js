var demographic_vg_1 = "charts/Chart_1_Donors_by_age_band.vg.json";
var demographic_vg_2 = "charts/Chart_2_who_the_campaign_reached.vg.json"
var demographic_vg_3 = "charts/blood_donation exclusion_factors.vg.json"
var demographic_vg_4 = "charts/donor_adverse_events_chart.vg.json"

var demand_vg_1 = "charts/Chart_6_Immunoglobulin patients by state, 2023-24 vs 2024-25.vg.json"
var demand_vg_2 = "charts/Chart_5_fresh blood issues per 1000 population by state and year.vg.json"
var demand_vg_3 = "charts/Chart_9_fresh_blood_issues_over_10_years.vg.json"
var demand_vg_4 = "charts/Chart_13_spread_of_issues per_1000 people_across_states.vg.json"
var demand_vg_5 = "charts/immunoglobin grams by condition and product for 2024-25.vg.json"

var logistics_vg_1 = "charts/chart12_domestic_vs_imported_Ig_by_state.vg.json"
var logistics_vg_2 = "charts/Chart_7_australia_bleeding_disorder_treatment_centres.vg.json"
var logistics_vg_3 = "charts/chart10_Spend_by_category.vg.json"
var logistics_vg_4 = "charts/Chart_8_discard_rate_by_remoteness_and_year_product_dropdown.vg.json"
var logistics_vg_5 = "charts/domestic and imported immunoglobin for public and private sector by state for 2024-25.vg.json"

vegaEmbed("#Donors_by_age_band", demographic_vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#who_the_campaign_reached", demographic_vg_2).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#blood_donation_exclusion_factors", demographic_vg_3).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#donor_adverse_events_chart", demographic_vg_4).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#Immunoglobulin_patients_by_state_2023_24_vs_2024_25", demand_vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#fresh_blood_issues_per_1000_population_by_state_and_year", demand_vg_2).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#fresh_blood_issues_over_10_years", demand_vg_3).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#spread_of_issues_per_1000_people_across_states", demand_vg_4).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#immunoglobin_grams_by_condition_and_product_for_2024-25", demand_vg_5).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#domestic_vs_imported_Ig_by_state", logistics_vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#australia_bleeding_disorder_treatment_centres", logistics_vg_2).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#Spend_by_category", logistics_vg_3).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#discard_rate_by_remoteness_and_year_product_dropdown", logistics_vg_4).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#domestic_and_imported_immunoglobin_for_public_and_private_sector_by_state_for_2024-25", logistics_vg_5).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
