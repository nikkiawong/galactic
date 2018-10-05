import $ from 'jquery';
import './css/styles.css';
import { getAge } from './age.js';
import { convertToMercuryYears } from './convert.js';
import { convertToVenusYears } from './convert.js';
import { convertToMarsYears } from './convert.js';
import { convertToJupiterYears } from './convert.js';

$(document).ready(function() {
  $("#ageForm").submit(function() {
    event.preventDefault();
    let birthday = $("input[type='date']").val();
    console.log(birthday);

    let userAge = getAge(birthday);
    console.log("You are " + userAge + " Earth years old");

    let mercuryAge = convertToMercuryYears(userAge);
    console.log("You are " + mercuryAge + " Mercury years old");

    let venusAge = convertToVenusYears(userAge);
    console.log("You are " + venusAge + " Venus years old");

    let marsAge = convertToMarsYears(userAge);
    console.log("You are " + marsAge + " Mars years old");

    let jupiterAge = convertToJupiterYears(userAge);
    console.log("You are " + jupiterAge + " Jupiter years old");
  });
});
