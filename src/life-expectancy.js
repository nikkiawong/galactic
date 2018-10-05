export function calculateYearsLeft( lifeExpectancy, userAge) {
  let yearsLeft = lifeExpectancy - userAge;
  return yearsLeft;
}

export function mercuryYearsLeft(remainingYears, userAge, lifeExpectancy) {

  let yearsLeft = remainingYears / 0.24;

  return yearsLeft;
}
