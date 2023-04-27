'use strict';

// Setting up variables for the classes in index.html
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelector chooses only the first one (when multiple elements with same class)
// const btnsShowModal = document.querySelector('.show-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// Create close modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// Create open modal
const openModal = function () {
  // Removing the class from index.html - !! Eventhough we call for class, we don't use ()
  modal.classList.remove('hidden');
  // Removing overlay
  overlay.classList.remove('hidden');
};

// To loop through the three buttons + Event Listener
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}
// Closing modals
// Adding for btn close Event Listener
btnCloseModal.addEventListener('click', closeModal);
// Adding for overlay option to close window
overlay.addEventListener('click', closeModal);
// Adding for 'ESCAPE' Event Listener, 'keydown' = pressed.
document.addEventListener('keydown', function (event) {
  // Listening for the presskey object and specifying for 'key'
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
