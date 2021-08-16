import { CHANGE_STRING, SUBMIT_ERROR, SUBMIT_STRING } from '../constants';

import { changeString, submitError, submitString } from '../actions';

describe('AddPage Actions', () => {
  describe('changeSting', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHANGE_STRING,
      };

      expect(changeString()).toEqual(expectedResult);
    });
  });

  describe('submitString', () => {
    it('should return the correct type and the passed string', () => {
      const fixture = 'Test';
      const expectedResult = {
        type: SUBMIT_STRING,
        submit: fixture,
      };

      expect(submitString(fixture)).toEqual(expectedResult);
    });
  });

  describe('submitError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: SUBMIT_ERROR,
        error: fixture,
      };

      expect(submitError(fixture)).toEqual(expectedResult);
    });
  });
});
