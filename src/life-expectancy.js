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
    return yearsLeft;
  } else {
    return yearsLeft;
  }

}

export function venusYearsLeft(remainingYears) {

  let yearsLeft = remainingYears / 0.62;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return yearsLeft;
  } else {
    return yearsLeft;
  }

}

export function marsYearsLeft(remainingYears) {

  let yearsLeft = remainingYears / 1.88;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  if (remainingYears < 0) {
    yearsLeft = yearsLeft * (-1);
    return yearsLeft;
  } else {
    return yearsLeft;
  }

}

export function jupiterYearsLeft(remainingYears) {

  let yearsLeft = remainingYears / 11.86;
  yearsLeft = parseFloat(yearsLeft.toFixed(2));

  return yearsLeft;
}
