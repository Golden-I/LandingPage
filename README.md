# Landing Page Project
This project means to give you genuine skills of working the DOM. The usefulness being utilized fills two needs: to add powerfully added information to the DOM, and to show how javascript can work on the convenience of a generally static site.

## Table of Contents
https://github.com/Golden-I/cd0428-landing-page-main.git
.github/workflows
assets
css
js
.DS_Store
CODEOWNERS
LICENSE.txt
README.md
index.html

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

# Coding References References
Below are the resources I have used to do this project
https://www.w3.org/TR/WCAG20-TECHS/SCR21.html
https://www.javascripttutorial.net/javascript-dom/
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_submit
https://developer.mozilla.org/
/*https://www.w3schools.com/jsref/met_document_queryselectorall.asp****/
/*https://www.codegrepper.com/code-examples/javascript/queryselectorall+in+javascript***/




# style on CCSS

/*
 *
 * CSS written based on SMACSS architecture.
 * To learn more, visit: http://smacss.com/
 * 
 * For simplicity, no reset or normalize is added. 
 * To learn more, visit: https://css-tricks.com/reboot-resets-reasoning/
 *
*/


/* ---- Base Rules ---- */
body {
    background: rgb(136,203,171);
    background: linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);
    margin: 0;
    font-family: 'Merriweather', serif;
    color: #fff;
}


/* Typeography General*/
h1 {
    font-family: 'Fira Sans', sans-serif;
    font-size: 3em;
    margin: 2em 1rem;
}

@media only screen and (min-width: 35em){
    h1 {
        font-size: 7em;
        margin: 2em 4rem 1em;
    }
}

h2 {
    border-bottom: 1px solid #cc1;
    font-family: 'Oxygen', Sans-Serif;
    font-size: 3em;
    color: #fff;
}

p {
    line-height: 1.6em;
    color: #eee;
}

/* ---- Layout Rules ---- */
main {
    margin: 10vh 1em 10vh;
}

.main-hero {
    min-height: 40vh;
    padding-top: 3em;
}

section {
    position: relative;
    min-height: 80vh;
}


/* ---- Module Rules ---- */

/* Navigation Styles*/
.navbar__menu ul {
    padding-left: 0;
    margin: 0;
    text-align: right;
}

.navbar__menu li {
    display: inline-block;
}

.navbar__menu .menu__link {
    display: block;
    padding: 1em;
    font-weight: bold;
    text-decoration: none;
    color: #000;
}

.navbar__menu .menu__link:hover {
    background: #333;
    color: #fff;
    transition: ease 0.3s all;
}

#navbar__list {
    background: navy;
}

.nav__hyperlink {
	color: white;
}

.navbar__list__item {
    margin: 1rem;
}

/* Header Styles */
.page__header {
    background:#fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
}

/* Footer Styles */
.page__footer {
    background: #000;
    padding: 3em;
    color: #fff;
}

.page__footer p{
    color: #fff;
}


/* ---- Theme Rules ---- */
/* Landing Container Styles */
.landing__container {
    padding: 1em;
    text-align: left;
}

@media only screen and (min-width: 35em){
    .landing__container {
        max-width: 50em;
        padding: 4em;
    }
}

section:nth-of-type(even) .landing__container {
    margin-right: 0;
    margin-left: auto;
    text-align: right; 
}

/* Background Circles */
/* Note that background circles are created with psuedo elements before and after */
/* Circles appear to be random do to use of :nth-of-type psuedo class */
section:nth-of-type(odd) .landing__container::before {
    content: '';
    background: rgba(255, 255, 255, 0.187);
    position: absolute;
    z-index: -5;
    width: 20vh;
    height: 20vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}

section:nth-of-type(even) .landing__container::before {
    content: '';
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);
    position: absolute;
    top: 3em;
    right: 3em;
    z-index: -5;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}

section:nth-of-type(3n) .landing__container::after {
    content: '';
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -5;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}

section:nth-of-type(3n + 1) .landing__container::after {
    content: '';
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);
    position: absolute;
    right: 20vw;
    bottom: -5em;
    z-index: -5;
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
    opacity: 0;
    transition: ease 0.5s all;
}


/* ---- Theme State Rules ---- */
/* Section Active Styles */
/* Note: your-active-class class is applied through javascript. You should update the class here and in the index.html to what you set in your javascript file.  */
section.your-active-class {
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
}

section.your-active-class .landing__container::before {
    opacity: 1;
    animation: rotate 4s linear 0s infinite forwards;
}

section.your-active-class .landing__container::after {
    opacity: 1;
    animation: rotate 5s linear 0s infinite forwards reverse;
}
section.active {
    background: linear-gradient(0deg, rgba(156, 24, 24, 0.26) 100%, rgba(71, 26, 115, 0.774) 100%);
}

.active-nav {
    color: violet;
}

/* Section Active Styles Keyframe Animations */
@keyframes rotate {
	from {
		transform: rotate(0deg)
		           translate(-1em)
		           rotate(0deg);
	}
	to {
		transform: rotate(360deg)
		           translate(-1em) 
		           rotate(-360deg);
	}
}

/* // contact form desing // */
form {
    /* Center the form on the page */
    margin: 0 auto;
    width: 400px;
    /* Form outline */
    padding: 1em;
    border: 1px solid rgb(0, 225, 255);
    border-radius: 1em;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  form li + li {
    margin-top: 1em;
  }
  
  label {
    /* Uniform size & alignment */
    display: inline-block;
    width: 90px;
    text-align: right;
  }
  
  input,
  textarea {
    /* To make sure that all text fields have the same font settings
       By default, textareas have a monospace font */
    font: 1em sans-serif;
  
    /* Uniform text field size */
    width: 300px;
    box-sizing: border-box;
  
    /* Match form field borders */
    border: 1px solid rgb(163, 132, 234);
  }
  
  input:focus,
  textarea:focus {
    /* Additional highlight for focused elements */
    border-color: #000;
  }
  
  textarea {
    /* Align multiline text fields with their labels */
    vertical-align: top;
  
    /* Provide space to type some text */
    height: 5em;
  }
  
  .formButton {
    /* Align buttons with the text fields */
    padding-left: 90px; /* same size as the label elements */
  }
  
  formButton {
    /* This extra margin represent roughly the same space as the space
       between the labels and their text fields */
    margin-left: .5em;
  }
  
  .scroll-up {
    position: fixed;
    right: 0.5%;
    bottom: 3%;
    cursor: pointer;
  }
  
  .up-arrow {
    width: 3rem;
    height: 3rem;
  }
  
