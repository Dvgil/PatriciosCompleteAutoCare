const menuBtn = document.getElementById('menuBtn');
const mobileOverlay = document.getElementById('mobileOverlay');

menuBtn.addEventListener('click', () => {

  // TOGGLE OVERLAY
  mobileOverlay.classList.toggle('is-active');

  // TOGGLE BUTTON STATE
  menuBtn.classList.toggle('is-active');

  // CHECK IF MENU IS OPEN
  const isOpen = mobileOverlay.classList.contains('is-active');

  if (isOpen) {

    // CHANGE TO X
    menuBtn.innerHTML = '✕';

    // STOP BACKGROUND SCROLL
    document.body.style.overflow = 'hidden';

  } else {

    // CHANGE BACK TO MENU ICON
    menuBtn.innerHTML = '☰';

    // RESTORE SCROLL
    document.body.style.overflow = 'auto';
  }

});




const buttons = document.querySelectorAll(".service-btn");
const contents = document.querySelectorAll(".service-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    // REMOVE ACTIVE FROM BUTTONS
    buttons.forEach(btn => btn.classList.remove("active"));

    // REMOVE ACTIVE FROM CONTENT
    contents.forEach(content => {
      content.classList.remove("active");
    });

    // ADD ACTIVE TO CLICKED BUTTON
    button.classList.add("active");

    // SHOW MATCHING CONTENT
    const service = button.getAttribute("data-service");
    document.getElementById(service).classList.add("active");

  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // CLOSE OTHER FAQ ITEMS
    faqItems.forEach(faq => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    // TOGGLE CURRENT ITEM
    item.classList.toggle("active");

  });

});

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      // markers: true,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

const images = document.querySelectorAll(".showcase-image");

let currentImage = 0;

setInterval(() => {

    images[currentImage].classList.remove("active");

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    images[currentImage].classList.add("active");

}, 4000);