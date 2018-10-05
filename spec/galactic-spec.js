import { getAge } from '../src/age.js';

describe('galactic age calculator', function() {

  it('should return the user age in Earth years', function() {
    let dob = "1997-02-01"
    expect(getAge(dob)).toEqual(22);
  });
});
