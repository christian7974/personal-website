var buttonPressed = false;

const languagesSkillsBtn = document.getElementById("languages-btn");
const frameworksSkillsBtn = document.getElementById("frameworks-btn");
const languagesDiv = document.getElementById("skills-in-languages");
const frameworksDiv = document.getElementById("skills-in-frameworks");
const screenWidth = document.documentElement.scrollWidth;

const languagesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const pythonSkillBar = entry.target.querySelector("#python-skill-bar");
        const cppSkillBar = entry.target.querySelector("#cpp-skill-bar");
        const rustSkillBar = entry.target.querySelector("#rust-skill-bar");
        const htmlSkillBar = entry.target.querySelector("#html-skill-bar");
        const jsSkillBar = entry.target.querySelector("#js-skill-bar");
        if (entry.isIntersecting) {
            pythonSkillBar.classList.add("python-animation");
            cppSkillBar.classList.add("cpp-animation");
            rustSkillBar.classList.add("rust-animation");
            htmlSkillBar.classList.add("html-animation");
            jsSkillBar.classList.add("js-animation");
            return;
        }
    })
});

const frameworksObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const githubSkillBar = entry.target.querySelector("#github-skill-bar");
        const gitSkillBar = entry.target.querySelector("#git-skill-bar");
        const oopSkillBar = entry.target.querySelector("#oop-skill-bar");
        const bootstrapSkillBar = entry.target.querySelector("#bootstrap-skill-bar");
        const domSkillBar = entry.target.querySelector("#dom-skill-bar");
        if (entry.isIntersecting) {
            githubSkillBar.classList.add("github-animation");
            gitSkillBar.classList.add("git-animation");
            oopSkillBar.classList.add("oop-animation");
            bootstrapSkillBar.classList.add("bootstrap-animation");
            domSkillBar.classList.add("dom-animation");
            return;
        }
    })
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
}

function showFrameworksDiv() {
    languagesDiv.style.display = 'none';
    frameworksDiv.style.display = 'block';
}
languagesSkillsBtn.addEventListener('click', showLanguagesDiv);
frameworksSkillsBtn.addEventListener('click', showFrameworksDiv);


languagesObserver.observe(document.querySelector(".x-axis-languages"));
frameworksObserver.observe(document.querySelector(".x-axis-frameworks"));

const bookCurrentlyReading = document.getElementById("book-currently-reading");
var insertSimpleBook = function() {
    const simplerBook = document.getElementById("simple-book");
    bookCurrentlyReading.style.display = 'none';
    simplerBook.style.display = 'block';
}
window.addEventListener("resize", () => {  
    if (screenWidth < 900) {
        insertSimpleBook();
    }
});
if (screenWidth < 900) {
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


