import $ from 'jquery';
import './css/styles.css';
import { getAge } from './age.js';
import { convertToMercuryYears } from './convert.js';
import { convertToVenusYears } from './convert.js';
import { convertToMarsYears } from './convert.js';
import { convertToJupiterYears } from './convert.js';
import { calculateYearsLeft } from './life-expectancy.js';
import { mercuryYearsLeft } from './life-expectancy.js';
import { venusYearsLeft } from './life-expectancy.js';

$(document).ready(function() {
  $("#ageForm").submit(function() {
    event.preventDefault();
    let birthday = $("input[type='date']").val();
    let lifeExpectancy = $("input[type='text']").val();
    console.log(lifeExpectancy + " years");

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

    let remainingYears = calculateYearsLeft(lifeExpectancy, userAge);

    let mercuryLifeExpectancy = mercuryYearsLeft(remainingYears, userAge, lifeExpectancy);
    console.log(mercuryLifeExpectancy);

    let venusLifeExpectancy = venusYearsLeft(remainingYears, userAge, lifeExpectancy);
    console.log(venusLifeExpectancy);
  });
});
