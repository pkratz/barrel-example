import { compareCartChanges } from './compareCartChanges';

describe('compareCartChanges', () => {
  it('should return an empty array if there are no changes', () => {
    expect(compareCartChanges({}, {})).toEqual([]);
  });
});
