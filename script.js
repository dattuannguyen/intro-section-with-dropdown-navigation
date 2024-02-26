// Desktop view
const items_features = document.getElementById("list-items-features")
const items_company = document.getElementById("list-items-company")
const features_btn = document.getElementById("features")
const company_btn = document.getElementById("company")
const arrow_up_feature = document.getElementById("arrow-up-features")
const arrow_down_feature = document.getElementById("arrow-down-features")
const arrow_up_company = document.getElementById("arrow-up-company")
const arrow_down_company = document.getElementById("arrow-down-company")
//mobile view

const items_features_mobile = document.getElementById("list-items-features-mobile")
const items_company_mobile = document.getElementById("list-items-company-mobile")
const features_btn_mobile = document.getElementById("features-btn-mobile")
const company_btn_mobile = document.getElementById("company-btn-mobile")
const arrow_up_feature_mobile = document.getElementById("arrow-up-features-mobile")
const arrow_down_feature_mobile = document.getElementById("arrow-down-features-mobile")
const arrow_up_company_mobile = document.getElementById("arrow-up-company-mobile")
const arrow_down_company_mobile = document.getElementById("arrow-down-company-mobile")
const menu_icon = document.getElementById("menu-icon")
const sidebar = document.querySelector(".sidebar")
const close_icon = document.getElementById("close-icon")


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

features_btn_mobile.addEventListener("click",()=>{
    items_features_mobile.classList.toggle("hidden")
    arrow_down_feature_mobile.classList.toggle("hidden")
    arrow_up_feature_mobile.classList.toggle("hidden")
})

company_btn_mobile.addEventListener("click",()=>{
    items_company_mobile.classList.toggle("hidden");
    arrow_down_company_mobile.classList.toggle("hidden");
    arrow_up_company_mobile.classList.toggle("hidden")
})

menu_icon.addEventListener("click",()=>{
    sidebar.style.display = "block"
})

close_icon.addEventListener("click",()=>{
    sidebar.style.display = "none";
})