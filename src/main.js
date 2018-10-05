import $ from 'jquery';
import './css/styles.css';
import { getAge } from './age.js';
import { convertToMercuryYears } from './convert.js';

$(document).ready(function() {
  $("#ageForm").submit(function() {
    event.preventDefault();
    let birthday = $("input[type='date']").val();
    console.log(birthday);

    let userAge = getAge(birthday);
    console.log("You are " + userAge + " Earth years old");

    let mercuryAge = convertToMercuryYears(userAge);
  });
});
