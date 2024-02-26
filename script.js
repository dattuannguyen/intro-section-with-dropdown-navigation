
const items_features = document.getElementById("list-items-features")
const items_company = document.getElementById("list-items-company")
const features_btn = document.getElementById("features")
const company_btn = document.getElementById("company")
const arrow_up_feature = document.getElementById("arrow-up-features")
const arrow_down_feature = document.getElementById("arrow-down-features")
const arrow_up_company = document.getElementById("arrow-up-company")
const arrow_down_company = document.getElementById("arrow-down-company")


features_btn.addEventListener("click",()=>{
    items_features.classList.toggle("hidden")
    arrow_down_feature.classList.toggle("hidden");
    arrow_up_feature.classList.toggle("hidden")
})

company_btn.addEventListener("click",()=>{
    items_company.classList.toggle("hidden");
    arrow_down_company.classList.toggle("hidden");
    arrow_up_company.classList.toggle("hidden")
})