import { getNextEarthBirthday } from '../src/birthday.js';
import AgeConverter from '../src/AgeConverter.js';

describe('galactic age calculator', function() {

  it('should instantiate AgeConverter object', function() {
    const dob = "1997-02-01"; const ageConverter = new AgeConverter(dob);
    expect(ageConverter instanceof AgeConverter).toBe(true);
  });

  it('should return the user age in Earth years', function() {
    let ageInstance = new AgeConverter("1997-02-01");
    expect(ageInstance.age).toEqual(21);
  });

  it('should return the user age in Mercury years', function() {
    let ageInstance = new AgeConverter("1997-02-01");
    expect(ageInstance.mercuryAge).toEqual(87);
  });

  it('should return the user age in Venus years', function() {
    let ageInstance = new AgeConverter("1997-02-01");
    expect(ageInstance.venusAge).toEqual(33);
  });

  it('should return the user age in Mars years', function() {
    let ageInstance = new AgeConverter("1997-02-01");
    expect(ageInstance.marsAge).toEqual(11);
  });

  it('should return the user age in Jupiter years', function() {
    let ageInstance = new AgeConverter("1997-02-01");
    expect(ageInstance.jupiterAge).toEqual(1);
  });

  it('should return the remaining years left to live in Mercury years', function() {
    let ageInstance = new AgeConverter("1997-02-01", 100);
    expect(ageInstance.mercuryYearsLeft).toEqual("have " + 329 + " years left to live");
  });

  it('should return the remaining years left to live in Venus years', function() {
    let ageInstance = new AgeConverter("1997-02-01", 100);
    expect(ageInstance.venusYearsLeft).toEqual("have " + 127 + " years left to live");
  });

  it('should return the remaining years left to live in Mars years', function() {
    let ageInstance = new AgeConverter("1997-02-01", 100);
    expect(ageInstance.marsYearsLeft).toEqual("have " + 42 + " years left to live");
  });

  it('should return the remaining years left to live in Jupiter years', function() {
    let ageInstance = new AgeConverter("1997-02-01", 100);
    expect(ageInstance.jupiterYearsLeft).toEqual("have " + 6 + " years left to live");
  });

  it('should return the years past life expectancy in Mercury years if user is older than inputted life expectancy', function() {
    let ageInstance = new AgeConverter("1917-10-05", 100);
    expect(ageInstance.mercuryYearsLeft).toEqual(4 + " years past your life expectancy");
  });

  it('should return the years past life expectancy in Venus years if user is older than inputted life expectancy', function() {
    let ageInstance = new AgeConverter("1917-10-05", 100);
    expect(ageInstance.venusYearsLeft).toEqual(1 + " years past your life expectancy");
  });

  it('should return the years past life expectancy in Mars years if user is older than inputted life expectancy', function() {
    let ageInstance = new AgeConverter("1917-10-05", 100);
    expect(ageInstance.marsYearsLeft).toEqual(0 + " years past your life expectancy");
  });

  it('should return the years past life expectancy in Jupiter years if user is older than inputted life expectancy', function() {
    let ageInstance = new AgeConverter("1917-10-05", 100);
    expect(ageInstance.jupiterYearsLeft).toEqual(0 + " years past your life expectancy");
  });

  it('should return the next Earth birthday of the user', function() {
    let birthday = "1997-02-01";
    let userAge = 21;
    expect(getNextEarthBirthday(birthday, userAge)).toEqual('Fri Feb 01 2019');
  });
});
