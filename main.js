"use strict";
import "./style.scss";

// Selections

const signUpSection = document.querySelector(".sign-up-page");
const responseSection = document.querySelector(".response");
const singUpBtn = document.querySelector(".btn");
const userEmailInput = document.querySelector(".form__group-input");
const userEmailSpanText = document.querySelector(".user__email");
const errorMessage = document.querySelector(".error-message");

// Helper function that checkes whether email is valid or not!
const isEmailValid = (email) => {
  let regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(String(email).toLowerCase());
};

const nextPage = (userEmail) => {
  if (isEmailValid(userEmail)) {
    userEmailInput.value = "";
    signUpSection.classList.toggle("hidden");
    responseSection.classList.toggle("hidden");
    userEmailSpanText.textContent = userEmail;
  } else {
    userEmailInput.classList.add("error-input");
    errorMessage.classList.remove("hidden");
  }
};

// this is to remove the error messages/ red outlines when user focus on email input again to indicate that he can type something new
userEmailInput.addEventListener("focus", () => {
  if (userEmailInput.classList.contains("error-input"))
    userEmailInput.classList.remove("error-input");
  if (!errorMessage.classList.contains("hidden"))
    errorMessage.classList.add("hidden");
});
// on button click we call the function nextPage that takes care of the validation part of the email
singUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nextPage(userEmailInput.value);
});
