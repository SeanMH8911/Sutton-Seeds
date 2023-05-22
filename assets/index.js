function showMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

const form = document.getElementById("signup-form");
const errorMsg = document.getElementById("errorMsg");
errorMsg.style.display = "none";
const succesMsg = document.getElementById("succesMsg");
succesMsg.style.display = "none";

function submitForm() {
  const emailInput = document.getElementById("emailInput").value;
  const phoneInput = document.getElementById("phoneInput").value;

  const emailPattern = /^(.+)@(gmail\.com|outlook\.com)$/;
  if (!emailPattern.test(emailInput)) {
    errorMsg.innerHTML =
      "Email address must end with 'gmail.com' or 'outlook.com'.";
    errorMsg.style.display = "block";
    return;
  }
  const phonePattern = /^0?\d{1,11}$/;
  if (!phonePattern.test(phoneInput)) {
    errorMsg.innerHTML =
      "Phone number must contain only numbers and have a maximum of 11 digits.";
    errorMsg.style.display = "block";
    return;
  }
  if (emailPattern && phonePattern) {
    succesMsg.innerHTML = "Form sucessfully submitted!";
    succesMsg.style.display = " block";
    errorMsg.style.display = " none";
  }
}

const year = new Date().getFullYear("yyyy");

const copywriteYear = document.getElementById("copy-year");
copywriteYear.innerHTML = year;
