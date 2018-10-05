export function calculateYearsLeft( lifeExpectancy, userAge) {
  let yearsLeft = lifeExpectancy - userAge;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  return yearsLeft;
}

export function mercuryYearsLeft(remainingYears) {

  let yearsLeft = remainingYears / 0.24;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return "You are " + yearsLeft + " Mercury years past your life expectancy";
  } else {
    return "You have " + yearsLeft + " Mercury years left to live";
  }

}

export function venusYearsLeft(remainingYears) {

  let yearsLeft = remainingYears / 0.62;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return "You are " + yearsLeft + " Venus years past your life expectancy";
  } else {
    return "You have " + yearsLeft + " Venus years left to live";
  }

}

export function marsYearsLeft(remainingYears) {

  let yearsLeft = remainingYears / 1.88;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return "You are " + yearsLeft + " Mars years past your life expectancy";
  } else {
    return "You have " + yearsLeft + " Mars years left to live";
  }

}

export function jupiterYearsLeft(remainingYears) {

  let yearsLeft = remainingYears / 11.86;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return "You are " + yearsLeft + " Jupiter years past your life expectancy";
  } else {
    return "You have " + yearsLeft + " Jupiter years left to live";
  }

}
