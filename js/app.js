/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */


// build the nav
const navList = document.getElementById("navbar__list");

const sections = Array.from(document.querySelectorAll("section"));

function buildNav() {
    // loop through sections
    for (sec of sections) {

        //create li tag
        listItem = document.createElement("li");

        listItem.innerHTML = `<a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;

        navList.appendChild(listItem);
    }
}

buildNav();


// Add class 'active' to section when near top of viewport
function addActiveClass() {
    // loop through section
    sections.forEach(function(active) {

        if (
            active.getBoundingClientRect().top >= 0 &&
            active.getBoundingClientRect().top <= 300
        ) {
            const activeIndex = sections.indexOf(active)

            const navLinks = Array.from(navList.children)


            navLinks.forEach(function(li) {
                li.classList.remove("active-li")
            })
            navLinks[activeIndex].classList.add("active-li")
            active.classList.add("your-active-class");

        } else {

            active.classList.remove("your-active-class");
        }
    });
}

// Creat button to scroll to up

let span = document.querySelector(".up")

span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// Creat scroll to up

function showScrollButton() {
    if (this.scrollY >= 1000) {
        span.classList.add(`show`);
    } else {
        span.classList.remove(`show`);
    }
};

window.onscroll = function() {
    addActiveClass()
    showScrollButton()

};

// Scroll to section on link click

navList.addEventListener("click", (toSection) => {
    const clickedSection = document.getElementById(`${toSection.target.dataset.nav}`)

    toSection.preventDefault();
    if (toSection.target.dataset.nav) {

        clickedSection.scrollIntoView({ behavior: "smooth" })

    }
})
