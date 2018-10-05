export function convertToMercuryYears(userAge) {
  let age = userAge / 0.24;
  age = age.toFixed(2);
  return parseFloat(age);
}

export function convertToVenusYears(userAge) {
  let age = userAge / 0.62;
  age = age.toFixed(2);
  return parseFloat(age);
}

export function convertToMarsYears(userAge) {
  let age = userAge / 1.88;
  age = age.toFixed(2);
  return parseFloat(age);
}

export function convertToJupiterYears(userAge) {
  let age = userAge / 11.86;
  age = age.toFixed(2);
  return parseFloat(age);
}
