export function getAge(birthday) {
  birthday = birthday.split("-").join(", ");
  let dateOfBirth = new Date(birthday);
  let today = new Date();
  let myAge = today - dateOfBirth;
  myAge = (myAge / 31536000000).toFixed(2);

  return parseFloat(myAge);
}
