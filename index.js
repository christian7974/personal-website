const langauges_skills_btn = document.getElementById("languages-btn");
const frameworks_skills_btn = document.getElementById("frameworks-btn");
const languages_div = document.getElementById("skills-in-languages");
const frameworks_div = document.getElementById("skills-in-frameworks");

var on_languages = true;
function showLanguagesDiv() {
    frameworks_div.style.display = 'none';
    languages_div.style.display = 'block';
}

function showFrameworksDiv() {
    languages_div.style.display = 'none';
    frameworks_div.style.display = 'block';
}
langauges_skills_btn.addEventListener('click', showLanguagesDiv);
frameworks_skills_btn.addEventListener('click', showFrameworksDiv);