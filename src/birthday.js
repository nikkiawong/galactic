export function getNextEarthBirthday(birthday, userAge) {
  birthday = birthday.split("-").join(", ");
  userAge = parseInt(userAge) + 1;
  let day = new Date(birthday);
  let birthdayMilliseconds = day.valueOf();
  let combinedMilliseconds = birthdayMilliseconds + (userAge * 31556952000);
  let nextDay = new Date(combinedMilliseconds);
  nextDay = nextDay.toDateString();

  return nextDay;
}
