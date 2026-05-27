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