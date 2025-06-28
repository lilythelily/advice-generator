"use strict";

const advice = document.querySelector("q");
const number = document.querySelector("#number");
const dice = document.querySelector('#dice');

async function getData() {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
      const slip = data.slip;
      number.innerHTML = slip.id;
      advice.innerHTML = slip.advice;
  } catch (error) {
    console.error(error.message);
  }
}

dice.addEventListener('click', getData);


