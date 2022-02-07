import { useState } from 'react';

const Calculator = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['/', '*', '.', '+'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const clearAllData = () => {
    setCalc('');
  };

  return (
    <div>
      <div className='calculator'>
        <div className='display'>{calc || 0}</div>
        <div className='operators'>
          <button onClick={clearAllData}>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button id='orange' onClick={() => updateCalc('÷')}>
            {' '}
            ÷
          </button>
        </div>
        <div className='digits'>
          <div className='container'>
            <div className='digits-container'>{createDigits()}</div>
            <div className='operator-buttons'>
              <button id='orange' onClick={() => updateCalc('x')}>
                x
              </button>
              <button id='orange' onClick={() => updateCalc('-')}>
                -
              </button>
              <button id='orange' onClick={() => updateCalc('+')}>
                +
              </button>
            </div>
          </div>
          <div className='last-buttons'>
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')} id='zero'>
              .
            </button>
            <button onClick={calculate} id='zero'>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
