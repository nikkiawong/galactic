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
    expect(convertToMercuryYears(earthAge)).toEqual(90.37009860767589);
  });

  it('should return the user age in Venus years', function() {
    let earthAge = "21";
    expect(convertToVenusYears(earthAge)).toEqual(34.98197365458421);
  });

  it('should return the user age in Mars years', function() {
    let earthAge = "21";
    expect(convertToMarsYears(earthAge)).toEqual(11.536608332894794);
  });

  it('should return the user age in Jupiter years', function() {
    let earthAge = "21";
    expect(convertToJupiterYears(earthAge)).toEqual(1.8287372399529689);
  });

  it('should return the remaining years left to live in Mercury years', function() {
    let yearsRemaining = "79";
    expect(mercuryYearsLeft(yearsRemaining)).toEqual(326.29656805899083);
  });

  it('should return the remaining years left to live in Venus years', function() {
    let yearsRemaining = "79";
    expect(venusYearsLeft(yearsRemaining)).toEqual(126.30834892606096);
  });

  it('should return the remaining years left to live in Mars years', function() {
    let yearsRemaining = "79";
    expect(marsYearsLeft(yearsRemaining)).toEqual(41.65488102880734);
  });

  it('should return the remaining years left to live in Jupiter years', function() {
    let yearsRemaining = "79";
    expect(jupiterYearsLeft(yearsRemaining)).toEqual(6.602965964094249);
  });
});
