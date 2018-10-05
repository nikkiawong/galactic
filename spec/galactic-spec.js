import { getAge } from '../src/age.js';
import { convertToMercuryYears } from '../src/convert.js';

describe('galactic age calculator', function() {

  it('should return the user age in Earth years', function() {
    let dob = "1997-02-01"
    expect(getAge(dob)).toEqual(21);
  });

  it('should return the user age in Mercury years', function() {
    let earthAge = "21"
    expect(convertToMercuryYears(earthAge)).toEqual(87.5);
  });
});
