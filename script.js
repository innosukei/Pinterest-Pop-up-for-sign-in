document.querySelector(".toggle-password").addEventListener("click", function () {

  // Toggle the class on the element (assuming it's an icon like font-awesome eye/eye-slash)
  this.classList.toggle("fa-eye");
  this.classList.toggle("fa-eye-slash");

  // Get the input element associated with the toggle (using the 'toggle' attribute)
  var input = document.querySelector(this.getAttribute("toggle"));

  // Toggle the input type between 'password' and 'text'
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});

const email = document.getElementById("email-field");
const password = document.getElementById("password-field");
const birthdate = document.getElementById("birthdate");
const emailDisplay = document.getElementById("email-display");
const passwordDisplay = document.getElementById("password-display");
const birthdateDisplay = document.getElementById("birthdate-display");
function myFunction(){
  emailDisplay.innerHTML=email.value;
  passwordDisplay.innerHTML=password.value;
  birthdateDisplay.innerHTML=birthdate.value;
}


