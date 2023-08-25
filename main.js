"use strict";
import "./style.scss";

// Selections

const signUpSection = document.querySelector(".sign-up-page");
const responseSection = document.querySelector(".response");
const singUpBtn = document.querySelector(".btn");
const userEmailInput = document.querySelector(".form__group-input");
const userEmailSpanText = document.querySelector(".user__email");

// Helper function that checkes whether email is valid or not!
const isEmailValid = (email) => {};

const nextPage = (userEmail) => {
  console.log(userEmail);
  // guard clause to avoid email is empty
  if (!userEmail) {
    userEmailInput.classList.add("error-outline");
    return;
  }
  userEmailInput.value = "";
  signUpSection.classList.toggle("hidden");
  responseSection.classList.toggle("hidden");
  userEmailSpanText.textContent = userEmail;
};

singUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nextPage(userEmailInput.value);
});
