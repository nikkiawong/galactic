import { getAge } from '../src/age.js';
import { convertToMercuryYears } from '../src/convert.js';
import { convertToVenusYears } from '../src/convert.js';
import { convertToMarsYears } from '../src/convert.js';
import { convertToJupiterYears } from '../src/convert.js';
import { mercuryYearsLeft } from '../src/life-expectancy.js';
import { venusYearsLeft } from '../src/life-expectancy.js';
import { marsYearsLeft } from '../src/life-expectancy.js';
import { jupiterYearsLeft } from '../src/life-expectancy.js';

describe('galactic age calculator', function() {

  it('should return the user age in Earth years', function() {
    let dob = "1997-02-01";
    expect(getAge(dob)).toEqual(21.69);
  });

  it('should return the user age in Mercury years', function() {
    let earthAge = 21.69;
    expect(convertToMercuryYears(earthAge)).toEqual(90.38);
  });

  it('should return the user age in Venus years', function() {
    let earthAge = 21.69;
    expect(convertToVenusYears(earthAge)).toEqual(34.98);
  });

  it('should return the user age in Mars years', function() {
    let earthAge = 21.69;
    expect(convertToMarsYears(earthAge)).toEqual(11.54);
  });

  it('should return the user age in Jupiter years', function() {
    let earthAge = 21.69;
    expect(convertToJupiterYears(earthAge)).toEqual(1.83);
  });

  it('should return the remaining years left to live in Mercury years', function() {
    let yearsRemaining = 78.31;
    expect(mercuryYearsLeft(yearsRemaining)).toEqual(326.29);
  });

  it('should return the remaining years left to live in Venus years', function() {
    let yearsRemaining = 78.31;
    expect(venusYearsLeft(yearsRemaining)).toEqual(126.31);
  });

  it('should return the remaining years left to live in Mars years', function() {
    let yearsRemaining = 78.31;
    expect(marsYearsLeft(yearsRemaining)).toEqual(41.65);
  });

  it('should return the remaining years left to live in Jupiter years', function() {
    let yearsRemaining = 78.31;
    expect(jupiterYearsLeft(yearsRemaining)).toEqual(6.6);
  });

  it('should return the years past life expectancy in Mercury years if user is older than inputted life expectancy', function() {
    let remainingYears = -1.07;
    expect(mercuryYearsLeft(remainingYears)).toEqual(4.46);
  });

  it('should return the years past life expectancy in Venus years if user is older than inputted life expectancy', function() {
    let remainingYears = -1.07;
    expect(venusYearsLeft(remainingYears)).toEqual(1.73);
  });

  it('should return the years past life expectancy in Mars years if user is older than inputted life expectancy', function() {
    let remainingYears = -1.07;
    expect(marsYearsLeft(remainingYears)).toEqual(0.57);
  });
});
