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
    expect(getAge(dob)).toEqual(21);
  });

  it('should return the user age in Mercury years', function() {
    let earthAge = "21";
    expect(convertToMercuryYears(earthAge)).toEqual(87.5);
  });

  it('should return the user age in Venus years', function() {
    let earthAge = "21";
    expect(convertToVenusYears(earthAge)).toEqual(33.87096774193549);
  });

  it('should return the user age in Mars years', function() {
    let earthAge = "21";
    expect(convertToMarsYears(earthAge)).toEqual(11.170212765957448);
  });

  it('should return the user age in Jupiter years', function() {
    let earthAge = "21";
    expect(convertToJupiterYears(earthAge)).toEqual(1.7706576728499157);
  });

  it('should return the remaining years left to live in Mercury years', function() {
    let yearsRemaining = "79";
    expect(mercuryYearsLeft(yearsRemaining)).toEqual(329.1666666666667);
  });

  it('should return the remaining years left to live in Venus years', function() {
    let yearsRemaining = "79";
    expect(venusYearsLeft(yearsRemaining)).toEqual(127.41935483870968);
  });

  it('should return the remaining years left to live in Mars years', function() {
    let yearsRemaining = "79";
    expect(marsYearsLeft(yearsRemaining)).toEqual(42.02127659574468);
  });

  it('should return the remaining years left to live in Jupiter years', function() {
    let yearsRemaining = "79";
    expect(jupiterYearsLeft(yearsRemaining)).toEqual(6.661045531197302);
  });
});
