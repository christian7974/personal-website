var buttonPressed = false;

const languagesSkillsBtn = document.getElementById("languages-btn");
const frameworksSkillsBtn = document.getElementById("frameworks-btn");
const languagesDiv = document.getElementById("skills-in-languages");
const frameworksDiv = document.getElementById("skills-in-frameworks");

const languages_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const python_skill_bar = entry.target.querySelector("#python-skill-bar");
        const cpp_skill_bar = entry.target.querySelector("#cpp-skill-bar");
        const rust_skill_bar = entry.target.querySelector("#rust-skill-bar");
        const html_skill_bar = entry.target.querySelector("#html-skill-bar");
        const js_skill_bar = entry.target.querySelector("#js-skill-bar");
        if (entry.isIntersecting) {
            python_skill_bar.classList.add("python-animation");
            cpp_skill_bar.classList.add("cpp-animation");
            rust_skill_bar.classList.add("rust-animation");
            html_skill_bar.classList.add("html-animation");
            js_skill_bar.classList.add("js-animation");
            return;
        }
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

const about_me_observer = new IntersectionObserver(entries => {
    const about_me_content = document.querySelector("#about-me-content");
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            about_me_content.classList.add("fade-in");
            return;
        }

    })
});
about_me_observer.observe(document.querySelector("#about-me"));
function showLanguagesDiv() {
    frameworksDiv.style.display = 'none';
    languagesDiv.style.display = 'block';
}

function showFrameworksDiv() {
    languagesDiv.style.display = 'none';
    frameworksDiv.style.display = 'block';
}
languagesSkillsBtn.addEventListener('click', showLanguagesDiv);
frameworksSkillsBtn.addEventListener('click', showFrameworksDiv);


languages_observer.observe(document.querySelector(".x-axis-languages"));
frameworks_observer.observe(document.querySelector(".x-axis-frameworks"));
const screenWidth = document.documentElement.scrollWidth;
window.addEventListener("resize", () => {
    
    if (screenWidth < 900) {
        console.log("hre");
        const book_currently_reading = document.getElementById("book-currently-reading");
        const simpler_book = document.getElementById("simple-book");
        book_currently_reading.style.display = 'none';
        simpler_book.style.display = 'block';
    }
});
if (screenWidth < 900) {
    console.log("hre");
    const book_currently_reading = document.getElementById("book-currently-reading");
    const simpler_book = document.getElementById("simple-book");
    book_currently_reading.style.display = 'none';
    simpler_book.style.display = 'block';
}

