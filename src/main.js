import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    $(".results").fadeIn();

    let userAge = getAge(birthday);
    $("#earthAgeText").text(userAge);

    let mercuryAge = convertToMercuryYears(userAge);
    $("#mercuryAgeText").text(mercuryAge);

    let venusAge = convertToVenusYears(userAge);
    $("#venusAgeText").text(venusAge);

    let marsAge = convertToMarsYears(userAge);
    $("#marsAgeText").text(marsAge);

    let jupiterAge = convertToJupiterYears(userAge);
    $("#jupiterAgeText").text(jupiterAge);

    let remainingYears = calculateYearsLeft(lifeExpectancy, userAge);
    $("#earthTimeRemaining").text(remainingYears);

    let mercuryLifeExpectancy = mercuryYearsLeft(remainingYears);
    $("#mercuryTimeRemaining").text(mercuryLifeExpectancy);

    let venusLifeExpectancy = venusYearsLeft(remainingYears);
    $("#venusTimeRemaining").text(venusLifeExpectancy);

    let marsLifeExpectancy = marsYearsLeft(remainingYears);
    $("#marsTimeRemaining").text(marsLifeExpectancy);

    let jupiterLifeExpectancy = jupiterYearsLeft(remainingYears);
    $("#jupiterTimeRemaining").text(jupiterLifeExpectancy);
  });
});
