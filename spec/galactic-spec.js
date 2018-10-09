import { getAge } from '../src/age.js';
import { convertToMercuryYears } from '../src/convert.js';
import { convertToVenusYears } from '../src/convert.js';
import { convertToMarsYears } from '../src/convert.js';
import { convertToJupiterYears } from '../src/convert.js';
import { mercuryYearsLeft } from '../src/life-expectancy.js';
import { venusYearsLeft } from '../src/life-expectancy.js';
import { marsYearsLeft } from '../src/life-expectancy.js';
import { jupiterYearsLeft } from '../src/life-expectancy.js';
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
    let yearsRemaining = 79;
    expect(mercuryYearsLeft(yearsRemaining)).toEqual("have " + 329 + " years left to live");
  });

  it('should return the remaining years left to live in Venus years', function() {
    let yearsRemaining = 79;
    expect(venusYearsLeft(yearsRemaining)).toEqual("have " + 127 + " years left to live");
  });

  it('should return the remaining years left to live in Mars years', function() {
    let yearsRemaining = 79;
    expect(marsYearsLeft(yearsRemaining)).toEqual("have " + 42 + " years left to live");
  });

  it('should return the remaining years left to live in Jupiter years', function() {
    let yearsRemaining = 79;
    expect(jupiterYearsLeft(yearsRemaining)).toEqual("have " + 6 + " years left to live");
  });

  it('should return the years past life expectancy in Mercury years if user is older than inputted life expectancy', function() {
    let remainingYears = -1;
    expect(mercuryYearsLeft(remainingYears)).toEqual(4 + " years past your life expectancy");
  });

  it('should return the years past life expectancy in Venus years if user is older than inputted life expectancy', function() {
    let remainingYears = -1;
    expect(venusYearsLeft(remainingYears)).toEqual(1 + " years past your life expectancy");
  });

  it('should return the years past life expectancy in Mars years if user is older than inputted life expectancy', function() {
    let remainingYears = -1;
    expect(marsYearsLeft(remainingYears)).toEqual(0 + " years past your life expectancy");
  });

  it('should return the years past life expectancy in Jupiter years if user is older than inputted life expectancy', function() {
    let remainingYears = -1;
    expect(jupiterYearsLeft(remainingYears)).toEqual(0 + " years past your life expectancy");
  });

  it('should return the next Earth birthday of the user', function() {
    let birthday = "1997-02-01";
    let userAge = 21;
    expect(getNextEarthBirthday(birthday, userAge)).toEqual('Fri Feb 01 2019');
  });
});
