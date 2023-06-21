const langauges_skills_btn = document.getElementById("languages-btn");

const frameworks_skills_btn = document.getElementById("frameworks-btn");

var on_languages = true;
function showLanguagesDiv() {
    console.log("showLanguagesDiv");
    
}

function showFrameworksDiv() {
    console.log("showFrameworksdiv");
}
langauges_skills_btn.addEventListener('click', showLanguagesDiv);
frameworks_skills_btn.addEventListener('click', showFrameworksDiv);