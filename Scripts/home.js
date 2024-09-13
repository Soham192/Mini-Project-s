// Get the elements
const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.querySelector('.popup .close');
const flipContainer = document.getElementById('flipContainer');
const switchToSignUp = document.getElementById('switchToSignUp');
const switchToLogin = document.getElementById('switchToLogin');

// Show the popup when the login button is clicked
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default link behavior
    loginPopup.style.display = 'block';  // Show the popup
});

// Hide the popup when the close button is clicked
closeBtn.addEventListener('click', function () {
    loginPopup.style.display = 'none';  // Hide the popup
    flipContainer.classList.remove('flip'); // Reset the flip
});

// Hide the popup if the user clicks outside the popup
window.addEventListener('click', function (event) {
    if (event.target == loginPopup) {
        loginPopup.style.display = 'none';
        flipContainer.classList.remove('flip'); // Reset the flip
    }
});

// Switch to sign-up form (flip animation)
switchToSignUp.addEventListener('click', function () {
    flipContainer.classList.add('flip');  // Flip to the back (signup)
});

// Switch to login form (flip animation)
switchToLogin.addEventListener('click', function () {
    flipContainer.classList.remove('flip');  // Flip to the front (login)
});
