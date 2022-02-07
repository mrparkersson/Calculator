import React from 'react';
import { useState } from 'react';
import Operator from './Operator';

const Calculator = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const ops = ['/', '*', '.', '+', '%', '-'];

  const clearAllData = () => {
    setCalc('');
    setResult('');
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
    setResult('');
  };

  return (
    <Operator
      result={result}
      setResult={setResult}
      calc={calc}
      setCalc={setCalc}
      ops={ops}
      clearAllData={clearAllData}
      calculate={calculate}
    />
  );
};

export default Calculator;
