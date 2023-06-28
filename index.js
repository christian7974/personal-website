

const langauges_skills_btn = document.getElementById("languages-btn");
const frameworks_skills_btn = document.getElementById("frameworks-btn");
const languages_div = document.getElementById("skills-in-languages");
const frameworks_div = document.getElementById("skills-in-frameworks");

const languages_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const python_skill_bar = entry.target.querySelector("#python-skill-bar");
        const cpp_skill_bar = entry.target.querySelector("#cpp-skill-bar");
        const rust_skill_bar = entry.target.querySelector("#rust-skill-bar");
        const html_skill_bar = entry.target.querySelector("#html-skill-bar");
        const js_skill_bar = entry.target.querySelector("#js-skill-bar");
        const github_skill_bar = entry.target.querySelector("#github-skill-bar");
        if (entry.isIntersecting) {
            python_skill_bar.classList.add("python-animation");
            cpp_skill_bar.classList.add("cpp-animation");
            rust_skill_bar.classList.add("rust-animation");
            html_skill_bar.classList.add("html-animation");
            js_skill_bar.classList.add("js-animation");
            github_skill_bar.classList.add("github-animation");
            return;
        }
        // python_skill_bar.style.width = "70%";
        // cpp_skill_bar.classList.remove("cpp-animation");
    })
});

const frameworks_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const github_skill_bar = entry.target.querySelector("#github-skill-bar");
        const git_skill_bar = entry.target.querySelector("#git-skill-bar");
        const oop_skill_bar = entry.target.querySelector("#oop-skill-bar");
        const bootstrap_skill_bar = entry.target.querySelector("#bootstrap-skill-bar");
        const dom_skill_bar = entry.target.querySelector("#dom-skill-bar");
        if (entry.isIntersecting) {
            github_skill_bar.classList.add("github-animation");
            git_skill_bar.classList.add("git-animation");
            oop_skill_bar.classList.add("oop-animation");
            bootstrap_skill_bar.classList.add("bootstrap-animation");
            dom_skill_bar.classList.add("dom-animation");
            return;
        }
        // python_skill_bar.style.width = "70%";
        // cpp_skill_bar.classList.remove("cpp-animation");
    })
});

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

languages_observer.observe(document.querySelector(".x-axis-languages"));
frameworks_observer.observe(document.querySelector(".x-axis-frameworks"));


