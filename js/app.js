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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables (resources): https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-tutorial/)
 */
//global Variable https://www.golangprograms.com/how-to-define-global-variable-in-javascript.html 
const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
window.sections = "navbarList";
/**
 * End Global Variables
 * Start Helper Functions
 */

//check if an element is in viewport or not (https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/#:~:text=Use%20the%20getBoundingClientRect()%20method%20to%20get%20the%20size%20of,in%20the%20viewport%20or%20not.)
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 &&
        rect.top < screen.availHeight

    // return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
};
const box = document.querySelector('.main__hero');
const message = document.querySelector('#message'); //https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/

document.addEventListener('scroll', function() {
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

    message.textContent = messageText;

}, {
    passive: true
});

// // remove active classes
// https://stackoverflow.com/questions/38990163/how-can-i-add-and-remove-an-active-class-to-an-element-in-pure-javascript
function deactivateSections() {
    const elements = document.querySelectorAll(".active");
    elements.forEach(function(element) {
        element.classList.remove("active");
    });
    // element.target.className = "active";
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
// window.addEventListener('load', buildNavbar)
buildNavbar()

// https://stackoverflow.com/questions/39446702/how-to-highlight-active-element-using-javascript


// Add class 'active' to section when near top of viewport
// https://stackoverflow.com/questions/70939268/i-want-to-add-class-your-active-class-to-section-when-near-top-of-viewport-in
// on window scroll
window.addEventListener('scroll', (e) => {

    // get all sections on the page
    const sections = document.querySelectorAll('section');

    // loop through each section
    sections.forEach(section => {

        // get px distance from top
        const topDistance = section.getBoundingClientRect().top;

        // if the distance to the top is between 0-100px
        if (topDistance > 0 && topDistance < 100) {
            section.classList.add('your-active-class');

            // otherwise, remove the class
        } else {
            section.classList.remove('your-active-class');
        }
    });
});

// Scroll to anchor ID using scrollTO event
//https://stackoverflow.com/questions/3163615/how-to-scroll-an-html-page-to-a-given-anchor

// const element = document.querySelector('#element')
// const topPos = element.getBoundingClientRect().top + window.pageYOffset

// window.scrollTo({
//     top: topPos, // scroll so that the element is at the top of the view
//     behavior: 'smooth' // smooth scroll
// })

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
//https://itnext.io/build-a-single-page-web-app-javascript-and-the-dom-90c99b08f8a9

function buildNavbar() {
    sections.forEach((element) => {
        const listItem = document.createElement("li");
        listItem.classList.add("navbar__list__item");
        const sectionName = element.getAttribute("data-nav");
        const currentSectionId = element.getAttribute("id");
        listItem.innerHTML = `<a href="#${currentSectionId}" class="nav__hyperlink">${sectionName}</a>`;
        listItem.querySelector('a').addEventListener('click', () => {
            const topPos = element.getBoundingClientRect().top + window.pageYOffset
            window.scrollTo({
                top: topPos, // scroll so that the element is at the top of the view
                behavior: 'smooth' // smooth scroll
            })
        });
        navbarList.appendChild(listItem)
    });
}

// Scroll to section on link click
//https://blog.magezon.com/how-to-make-a-good-landing-page-in-html-ecm/#h-making-the-scroll-to-top-button

// scrollToSectionOnClick();
// Set sections as active
window.addEventListener('scroll', function(event) {
    console.log('scroll =====================');
    event.preventDefault();
    deactivateNavBarLinks();
    deactivateSections();
    let notFoundSection = true;
    sections.forEach((element, i) => {
        console.log(element, i);
        if (isInViewport(element) && notFoundSection) {
            notFoundSection = false;
            console.log('inView' + i)
                // deactivateSections();
                // activateCurrentSection();
            activateStyle(i)
                // console.log('In viewport!');
        }
    }, false);
});

//activating navigation tab
function activateStyle(i) {
    document.querySelectorAll('.nav__hyperlink')[i].classList.add('active-nav');
}

//deactivate navigation bar when it is not in use
function deactivateNavBarLinks() {
    document.querySelectorAll('.nav__hyperlink').forEach(link => {
        link.classList.remove('active-nav');
    });
}
// scroll-up
///https: //blog.magezon.com/how-to-make-a-good-landing-page-in-html-ecm/#h-making-the-scroll-to-top-button
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// contactForm 
//const form  = document.getElementById('contactForm');
//https://stackoverflow.com/questions/6799533/how-to-submit-a-form-with-javascript-by-clicking-a-link
//https://blog.magezon.com/how-to-make-a-good-landing-page-in-html-ecm/#h-making-the-scroll-to-top-button
// this is the link I used for this code: https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript
const form = document.getElementById('contactForm');

form.addEventListener('submit', () => {
    // handle the form data, the call back function 
});