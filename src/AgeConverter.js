export default class AgeConverter {
  constructor(dateString) {
    this.dateString = dateString;
    this.lifeExpectancy = 100;
    this.age = this.getAge();
    this.mercuryAge = this.convertToMercuryYears();
    this.venusAge = this.convertToVenusYears();
    this.marsAge = this.convertToMarsYears();
    this.jupiterAge = this.convertToJupiterYears();
    this.yearsLeft = this.calculateYearsLeft();
    this.mercuryYearsLeft = this.mercuryYearsLeft();
    this.venusYearsLeft = this.venusYearsLeft();
    this.marsYearsLeft = this.marsYearsLeft();
    this.jupiterYearsLeft = this.jupiterYearsLeft();
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

  calculateYearsLeft() {
    let yearsLeft = this.lifeExpectancy - this.age;

    console.log(parseInt(yearsLeft));
    return parseInt(yearsLeft);
  }

  mercuryYearsLeft() {

    let yearsRemaining = parseInt(this.yearsLeft / 0.24);

    if (this.yearsLeft < 0) {
      yearsRemaining = yearsRemaining * (-1);
      return yearsRemaining + " years past your life expectancy";
    } else {
      return "have " + yearsRemaining + " years left to live";
    }

  }

  venusYearsLeft() {

    let yearsRemaining = parseInt(this.yearsLeft / 0.62);

    if (this.yearsLeft < 0) {
      yearsRemaining = yearsRemaining * (-1);
      return yearsRemaining + " years past your life expectancy";
    } else {
      return "have " + yearsRemaining + " years left to live";
    }

  }

  marsYearsLeft() {

    let yearsRemaining = parseInt(this.yearsLeft / 1.88);

    if (this.yearsLeft < 0) {
      yearsRemaining = yearsRemaining * (-1);
      return yearsRemaining + " years past your life expectancy";
    } else {
      return "have " + yearsRemaining + " years left to live";
    }

  }

  jupiterYearsLeft() {

    let yearsRemaining = parseInt(this.yearsLeft / 11.86);

    if (this.yearsLeft < 0) {
      yearsRemaining = yearsRemaining * (-1);
      return yearsRemaining + " years past your life expectancy";
    } else {
      return "have " + yearsRemaining + " years left to live";
    }


  }
}
