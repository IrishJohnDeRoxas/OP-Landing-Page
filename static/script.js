const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const gallery = document.getElementById("gallery");
const navbarMenu = document.getElementById("navbar-menu");
const navbarButton = document.getElementById("navbar-button");

const navbarNav = document.getElementsByClassName("navbar-nav");

const images = document.querySelectorAll('img');

const cover = document.createElement('div');
cover.classList="cover";
document.body.appendChild(cover)


// declare a global variable to store the state of the navbar menu
let navbarOpen = false;

function hideNavbar(){
  navbarButton.style.marginRight = "20px";
  // this rotates the navbar button by -180 degrees
  navbarButton.style.transform = "rotate(-180deg)";
  // set the navbarOpen variable to false
  navbarOpen = false;
}
function showNavbar(){
  // use template literals instead of concatenation
  navbarButton.style.marginRight = `${window.innerWidth * 0.32}px`;
  // this rotates the navbar button by 180 degrees
  navbarButton.style.transform = "rotate(180deg)";
  // set the navbarOpen variable to true
  navbarOpen = true;
}


// --------------------------------------------------------------
// gallery.addEventListener('click', ()=>{
//   // check if the navbarOpen variable is true
//   if (navbarOpen) {
//     // if yes, remove the class "show" from the navbar menu
//     navbarMenu.classList.remove('show');
//     // call the hideNavbar function
//     hideNavbar();
//     // set the transform style to none
//     navbarButton.style.transform = "none";
//   }
// });
// --------------------------------------------------------------


// add an event listener for the document click event
document.addEventListener('click', (event) => {
  // check if the event target is not equal to the navbarMenu element
  if (event.target !== navbarMenu && event.target !== navbarButton) {
    // if yes, call the hideNavbar function
    hideNavbar();
    // remove the class "show" from the navbar menu
    navbarMenu.classList.remove('show');
  }
});

navbarButton.addEventListener("click", () => {

  navbarMenu.classList.toggle("show");

  // check if the navbarOpen variable is true
  if (navbarOpen) {
    // if yes, call the hideNavbar function
    hideNavbar();
  } else {
    // if no, call the showNavbar function
    showNavbar();
  }
});


// add the event listener to the cover element once
cover.addEventListener('click', ()=>{

  if (cover.hasChildNodes()) {
    cover.removeChild(cover.firstChild)
  }
  if (navbarMenu.classList.contains("show")){
    navbarMenu.classList.toggle('show');
    navbarButton.style.marginRight = "20px";
    navbarButton.style.transform = "rotate(-180deg)";
  }
  cover.classList.toggle("show-image-container");
});

// loop through the images
images.forEach(image =>{
  image.addEventListener('click', () => {

    const imageSrc=image.getAttribute('src')
    cover.classList.toggle("show-image-container")

    let img = document.createElement("img")
    img.setAttribute("src", imageSrc)
    cover.appendChild(img)
  });
});



// Define a CSS class for the scrolled state
const scrolledClass = "scrolled";

// Define a variable for the scroll threshold
const scrollThreshold = header.offsetHeight;

window.addEventListener('scroll', ()=>{
    if (window.scrollY > scrollThreshold){
        // Add the scrolled class to both elements
        navbarButton.classList.add(scrolledClass);
        navbarMenu.classList.add(scrolledClass);
        navbar.classList.add(scrolledClass);
    }
    else{
        // Remove the scrolled class from both elements
        navbarButton.classList.remove(scrolledClass);
        navbarMenu.classList.remove(scrolledClass);
        navbar.classList.remove(scrolledClass);
    }
});