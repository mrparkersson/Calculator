import operate from '../../Logic/operate';

describe('', () => {
  test('', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });
  test('', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });
  test('', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });
  test('', () => {
    expect(operate(2, 5, '%')).toBe('2');
  });
});
