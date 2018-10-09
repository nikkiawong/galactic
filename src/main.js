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

    let test = new AgeConverter(birthday, lifeExpectancy);

    $("#earthAgeText").text(test.age);
    $("#mercuryAgeText").text(test.mercuryAge);
    $("#venusAgeText").text(test.venusAge);
    $("#marsAgeText").text(test.marsAge);
    $("#jupiterAgeText").text(test.jupiterAge);

    let remainingYears = calculateYearsLeft(lifeExpectancy, test.age);
    $("#earthTimeRemaining").text(remainingYears);

    let mercuryLifeExpectancy = mercuryYearsLeft(remainingYears);
    $("#mercuryTimeRemaining").text(mercuryLifeExpectancy);

    let venusLifeExpectancy = venusYearsLeft(remainingYears);
    $("#venusTimeRemaining").text(venusLifeExpectancy);

    let marsLifeExpectancy = marsYearsLeft(remainingYears);
    $("#marsTimeRemaining").text(marsLifeExpectancy);

    let jupiterLifeExpectancy = jupiterYearsLeft(remainingYears);
    $("#jupiterTimeRemaining").text(jupiterLifeExpectancy);

    let nextBirthday = getNextEarthBirthday(birthday, test.age);
    $("#earthBirthday").text(nextBirthday);
  });
});
