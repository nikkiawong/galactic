export function getAge(birthday) {
  birthday = birthday.split("-").join(", ");
  let dateOfBirth = new Date(birthday);
  let today = new Date();
  let myAge = today - dateOfBirth;
  myAge = parseInt(myAge / 31536000000);

  return myAge;
}
