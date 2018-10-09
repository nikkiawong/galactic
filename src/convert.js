export function convertToMercuryYears(userAge) {
  let age = userAge / 0.24;
  age = parseInt(age);
  return age;
}

export function convertToVenusYears(userAge) {
  let age = userAge / 0.62;
  age = parseInt(age);
  return age;
}

export function convertToMarsYears(userAge) {
  let age = userAge / 1.88;
  age = parseInt(age);
  return age;
}

export function convertToJupiterYears(userAge) {
  let age = userAge / 11.86;
  age = parseInt(age);
  return age;
}
