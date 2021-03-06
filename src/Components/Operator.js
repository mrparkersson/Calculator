import React from 'react';

const Operator = ({
  ops,
  calc,
  setCalc,
  result,
  setResult,
  clearAllData,
  calculate,
}) => {
  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc))
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

  return (
    <div>
      <div className='calculator'>
        <div className='display' role='display'>
          {result ? <span>({result})</span> : ''}
          {calc || 0}
        </div>
        <div className='operators'>
          <button onClick={clearAllData}>AC</button>
          <button>+/-</button>
          <button onClick={() => updateCalc('%')}>%</button>
          <button id='orange' onClick={() => updateCalc('/')}>
            ÷
          </button>
        </div>
        <div className='digits'>
          <div className='container'>
            <div className='digits-container'>{createDigits()}</div>
            <div className='operator-buttons'>
              <button id='orange' onClick={() => updateCalc('*')}>
                x
              </button>
              <button id='orange' onClick={() => updateCalc('-')} role='-'>
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
            <button id='zero' onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operator;
