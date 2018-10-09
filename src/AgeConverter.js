export default class AgeConverter {
  constructor(dateString) {
    this.dateString = dateString;
    this.age = this.getAge();
    this.mercuryAge = this.convertToMercuryYears();
    this.venusAge = this.convertToVenusYears();
    this.marsAge = this.convertToMarsYears();
    this.jupiterAge = this.convertToJupiterYears();
  }

  getAge() {
    this.dateString = this.dateString.split("-").join(", ");
    let dateOfBirth = new Date(this.dateString);
    let today = new Date();
    let myAge = today - dateOfBirth;
    myAge = parseInt(myAge / 31536000000);

    return myAge;
  }

  convertToMercuryYears() {
    let userAge1 = this.age;

    let age = userAge1 / 0.24;
    age = parseInt(age);

    return age;
  }

  convertToVenusYears() {
    let userAge1 = this.age;

    let age = userAge1 / 0.62;
    age = parseInt(age);

    return age;
  }

  convertToMarsYears() {
    let userAge1 = this.age;

    let age = userAge1 / 1.88;
    age = parseInt(age);

    return age;
  }

  convertToJupiterYears() {
    let userAge1 = this.age;

    let age = userAge1 / 11.86;
    age = parseInt(age);

    return age;
  }
}
