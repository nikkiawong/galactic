export function calculateYearsLeft( lifeExpectancy, userAge) {
  let yearsLeft = lifeExpectancy - userAge;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  return yearsLeft;
}

export function mercuryYearsLeft(remainingYears) {

  let yearsLeft = parseInt(remainingYears / 0.24);

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return yearsLeft + " years past your life expectancy";
  } else {
    return "have " + yearsLeft + " years left to live";
  }

}

export function venusYearsLeft(remainingYears) {

  let yearsLeft = parseInt(remainingYears / 0.62);

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return yearsLeft + " years past your life expectancy";
  } else {
    return "have " + yearsLeft + " years left to live";
  }

}

export function marsYearsLeft(remainingYears) {

  let yearsLeft = parseInt(remainingYears / 1.88);

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return yearsLeft + " years past your life expectancy";
  } else {
    return "have " + yearsLeft + " years left to live";
  }

}

export function jupiterYearsLeft(remainingYears) {

  let yearsLeft = parseInt(remainingYears / 11.86);

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return yearsLeft + " years past your life expectancy";
  } else {
    return "have " + yearsLeft + " years left to live";
  }

}
