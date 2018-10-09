import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { getNextEarthBirthday } from './birthday.js';
import AgeConverter from './AgeConverter.js';

$(document).ready(function() {
  $("#ageForm").submit(function() {
    event.preventDefault();
    let birthday = $("input[type='date']").val();
    let lifeExpectancy = parseInt($("input[type='text']").val());
    $(".results").fadeIn();

    let userAge = new AgeConverter(birthday, lifeExpectancy);
    console.log(userAge);

    $("#earthAgeText").text(userAge.age);
    $("#mercuryAgeText").text(userAge.mercuryAge);
    $("#venusAgeText").text(userAge.venusAge);
    $("#marsAgeText").text(userAge.marsAge);
    $("#jupiterAgeText").text(userAge.jupiterAge);
    $("#earthTimeRemaining").text(userAge.yearsLeft);
    $("#mercuryTimeRemaining").text(userAge.mercuryYearsLeft);
    $("#venusTimeRemaining").text(userAge.venusYearsLeft);
    $("#marsTimeRemaining").text(userAge.marsYearsLeft);
    $("#jupiterTimeRemaining").text(userAge.jupiterYearsLeft);

    let nextBirthday = getNextEarthBirthday(birthday, userAge.age);
    $("#earthBirthday").text(nextBirthday);
  });
});
