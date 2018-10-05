export function getAge(birthday) {
  birthday = birthday.split("-").join(", ");
  let dateOfBirth = new Date(birthday);
  let birthYear = dateOfBirth.getFullYear();
  let today = new Date();
  let currentYear = today.getFullYear();

  return currentYear - birthYear;
}
