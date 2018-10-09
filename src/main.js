import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { calculateYearsLeft } from './life-expectancy.js';
import { mercuryYearsLeft } from './life-expectancy.js';
import { venusYearsLeft } from './life-expectancy.js';
import { marsYearsLeft } from './life-expectancy.js';
import { jupiterYearsLeft } from './life-expectancy.js';
import { getNextEarthBirthday } from './birthday.js';
import AgeConverter from './AgeConverter.js';

$(document).ready(function() {
  $("#ageForm").submit(function() {
    event.preventDefault();
    let birthday = $("input[type='date']").val();
    let lifeExpectancy = $("input[type='text']").val();
    $(".results").fadeIn();

    let userAge = new AgeConverter(birthday, lifeExpectancy);
    console.log(userAge);

    $("#earthAgeText").text(userAge.age);
    $("#mercuryAgeText").text(userAge.mercuryAge);
    $("#venusAgeText").text(userAge.venusAge);
    $("#marsAgeText").text(userAge.marsAge);
    $("#jupiterAgeText").text(userAge.jupiterAge);

    // let remainingYears = calculateYearsLeft(lifeExpectancy, userAge.age);
    $("#earthTimeRemaining").text(userAge.yearsLeft);

    // let mercuryLifeExpectancy = mercuryYearsLeft(remainingYears);
    $("#mercuryTimeRemaining").text(userAge.mercuryYearsLeft);

    // let venusLifeExpectancy = venusYearsLeft(remainingYears);
    $("#venusTimeRemaining").text(userAge.venusYearsLeft);

    // let marsLifeExpectancy = marsYearsLeft(remainingYears);
    $("#marsTimeRemaining").text(userAge.marsYearsLeft);

    // let jupiterLifeExpectancy = jupiterYearsLeft(remainingYears);
    $("#jupiterTimeRemaining").text(userAge.jupiterYearsLeft);

    let nextBirthday = getNextEarthBirthday(birthday, userAge.age);
    $("#earthBirthday").text(nextBirthday);
  });
});
