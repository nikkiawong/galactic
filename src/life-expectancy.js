export function calculateYearsLeft( lifeExpectancy, userAge) {
  let yearsLeft = lifeExpectancy - userAge;
  return yearsLeft;
}

export function mercuryYearsLeft(remainingYears, userAge, lifeExpectancy) {

  let yearsLeft = remainingYears / 0.24;

  return yearsLeft;
}

export function venusYearsLeft(remainingYears, userAge, lifeExpectancy) {

  let yearsLeft = remainingYears / 0.62;

  return yearsLeft;
}

export function marsYearsLeft(remainingYears, userAge, lifeExpectancy) {

  let yearsLeft = remainingYears / 1.88;

  return yearsLeft;
}
