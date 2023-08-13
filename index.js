var buttonPressed = false;

const languagesSkillsBtn = document.getElementById("languages-btn");
const frameworksSkillsBtn = document.getElementById("frameworks-btn");
const otherSkillsBtn = document.getElementById("other-skills-btn");

const languagesDiv = document.getElementById("skills-in-languages");
const frameworksDiv = document.getElementById("skills-in-frameworks");
const otherSkillsDiv = document.getElementById("other-skills");

const screenWidth = document.documentElement.scrollWidth;
const maxScreenSize = 1025;
const languagesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const pythonSkillBar = entry.target.querySelector("#python-skill-bar");
        const cppSkillBar = entry.target.querySelector("#cpp-skill-bar");
        const rustSkillBar = entry.target.querySelector("#rust-skill-bar");
        const htmlSkillBar = entry.target.querySelector("#html-skill-bar");
        const jsSkillBar = entry.target.querySelector("#js-skill-bar");
        const nosqlSkillBar = entry.target.querySelector("#nosql-skill-bar");
        if (entry.isIntersecting) {
            pythonSkillBar.classList.add("python-animation");
            cppSkillBar.classList.add("cpp-animation");
            rustSkillBar.classList.add("rust-animation");
            htmlSkillBar.classList.add("html-animation");
            jsSkillBar.classList.add("js-animation");
            nosqlSkillBar.classList.add("nosql-animation");
            return;
        }
    })
});

const frameworksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bootstrapSkillBar = entry.target.querySelector("#bootstrap-skill-bar");
        const expressSkillBar = entry.target.querySelector("#express-skill-bar");
        const nodeSkillBar = entry.target.querySelector("#node-skill-bar");
        const jquerySkillBar = entry.target.querySelector("#jquery-skill-bar");
        if (entry.isIntersecting) {
            bootstrapSkillBar.classList.add("bootstrap-animation");
            expressSkillBar.classList.add("express-animation");
            nodeSkillBar.classList.add("express-animation");
            jquerySkillBar.classList.add("jquery-animation");
            return;
        }
    })
});

const otherSkillsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const githubSkillBar = entry.target.querySelector("#github-skill-bar");
        const gitSkillBar = entry.target.querySelector("#git-skill-bar");
        const oopSkillBar = entry.target.querySelector("#oop-skill-bar");
        const domSkillBar = entry.target.querySelector("#dom-skill-bar");
        const mongoSkillBar = entry.target.querySelector("#mongo-skill-bar");
        if (entry.isIntersecting) {
            githubSkillBar.classList.add("github-animation");
            gitSkillBar.classList.add("git-animation");
            oopSkillBar.classList.add("oop-animation");
            domSkillBar.classList.add("dom-animation");
            mongoSkillBar.classList.add("mongo-animation");
        }
    });
});

const aboutMeObserver = new IntersectionObserver(entries => {
    const aboutMeContent = document.querySelector("#about-me-content");
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutMeContent.classList.add("fade-in");
            return;
        }

    })
});

aboutMeObserver.observe(document.querySelector("#about-me"));

function showLanguagesDiv() {
    frameworksDiv.style.display = 'none';
    languagesDiv.style.display = 'block';
    otherSkillsDiv.style.display = 'none';
}

function showFrameworksDiv() {
    languagesDiv.style.display = 'none';
    frameworksDiv.style.display = 'block';
    otherSkillsDiv.style.display = 'none';
}

function showOtherSkillsDiv() {
    languagesDiv.style.display = 'none';
    frameworksDiv.style.display = 'none';
    otherSkillsDiv.style.display = 'block';
}

languagesSkillsBtn.addEventListener('click', showLanguagesDiv);
frameworksSkillsBtn.addEventListener('click', showFrameworksDiv);
otherSkillsBtn.addEventListener('click', showOtherSkillsDiv);

languagesObserver.observe(document.querySelector(".x-axis-languages"));
frameworksObserver.observe(document.querySelector(".x-axis-frameworks"));
otherSkillsObserver.observe(document.querySelector(".x-axis-other-skills"))

const bookCurrentlyReading = document.getElementById("book-currently-reading");
var insertSimpleBook = function() {
    const simplerBook = document.getElementById("simple-book");
    bookCurrentlyReading.style.display = 'none';
    simplerBook.style.display = 'block';
}
window.addEventListener("resize", () => {  
    if (screenWidth < maxScreenSize) {
        insertSimpleBook();
    }
});
if (screenWidth < maxScreenSize) {
    insertSimpleBook();
}

let slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
var plusSlides = function(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
var currentSlide = function(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

$("#nav").hover(
    function(){
        $(".nav-item").slideToggle(300, "swing");
        $(".nav-item").css("display", "block");
    },
    function() {
        $(".nav-item").slideToggle(300, "swing");
    }
);


