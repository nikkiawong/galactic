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
import { marsYearsLeft } from './life-expectancy.js';
import { jupiterYearsLeft } from './life-expectancy.js';

$(document).ready(function() {
  $("#ageForm").submit(function() {
    event.preventDefault();
    let birthday = $("input[type='date']").val();
    let lifeExpectancy = $("input[type='text']").val();

    let userAge = getAge(birthday);
    $("#earthAgeText").text(userAge);

    let mercuryAge = convertToMercuryYears(userAge);
    $("#mercuryAgeText").text(mercuryAge);

    let venusAge = convertToVenusYears(userAge);
    console.log("You are " + venusAge + " Venus years old");

    let marsAge = convertToMarsYears(userAge);
    console.log("You are " + marsAge + " Mars years old");

    let jupiterAge = convertToJupiterYears(userAge);
    console.log("You are " + jupiterAge + " Jupiter years old");

    let remainingYears = calculateYearsLeft(lifeExpectancy, userAge);
    $("#earthTimeRemaining").text(remainingYears);

    let mercuryLifeExpectancy = mercuryYearsLeft(remainingYears);
    $("#mercuryTimeRemaining").text(mercuryLifeExpectancy);

    let venusLifeExpectancy = venusYearsLeft(remainingYears, userAge, lifeExpectancy);
    console.log(venusLifeExpectancy);

    let marsLifeExpectancy = marsYearsLeft(remainingYears);
    console.log(marsLifeExpectancy);

    let jupiterLifeExpectancy = jupiterYearsLeft(remainingYears);
    console.log(jupiterLifeExpectancy);
  });
});
