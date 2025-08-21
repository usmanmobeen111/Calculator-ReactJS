import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { calculatorButtons } from '../data/calculatorData';

const isOperator = (val) => ['+', '-', '*', '/'].includes(val);

const Calculator = () => {
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('0');
  const [error, setError] = useState('');

  // Helper to safely evaluate expressions
  const safeEval = (expr) => {
    try {
      // Prevent dangerous eval, only allow numbers/operators
      // Replace unicode operators with JS equivalents
      const sanitized = expr
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-')
        .replace(/%/g, '/100')
        .replace(/[^0-9+\-*/().%]/g, '');
      // Syntax check
      // eslint-disable-next-line no-eval
      const result = eval(sanitized);
      if (result === undefined || isNaN(result)) throw new Error('Runtime Error');
      return result;
    } catch (e) {
      throw new Error('Syntax Error');
    }
  };

  const handleClick = (btn) => {
    setError('');
    if (btn.type === 'number') {
      // Prevent multiple leading zeros
      if (input === '' && btn.value === '0') {
        setDisplay('0');
        setInput('');
        return;
      }
      // Prevent multiple decimals in a number
      if (btn.value === '.' && input.split(/[\+\-\*\/]/).pop().includes('.')) return;
      setInput((prev) => {
        const next = prev + btn.value;
        setDisplay(next);
        return next;
      });
    } else if (btn.type === 'operator') {
      if (input === '' || isOperator(input.slice(-1))) return; // Prevent operator at start or double operator
      setInput((prev) => {
        const next = prev + btn.value;
        setDisplay(next);
        return next;
      });
    } else if (btn.type === 'special') {
      if (btn.value === 'AC') {
        setInput('');
        setDisplay('0');
        setError('');
      } else if (btn.value === 'C') {
        setInput((prev) => {
          const next = prev.slice(0, -1);
          setDisplay(next === '' ? '0' : next);
          return next;
        });
      } else if (btn.value === 'backspace') {
        setInput((prev) => {
          const next = prev.slice(0, -1);
          setDisplay(next === '' ? '0' : next);
          return next;
        });
      } else if (btn.value === '%') {
        // Add percent only if last is number
        if (input !== '' && !isOperator(input.slice(-1))) {
          setInput((prev) => {
            const next = prev + '%';
            setDisplay(next);
            return next;
          });
        }
      } else if (btn.value === 'negate') {
        // Negate last number
        const match = input.match(/(-?\d+\.?\d*)$/);
        if (match) {
          const num = match[0];
          const neg = num.startsWith('-') ? num.slice(1) : '-' + num;
          const next = input.slice(0, -num.length) + neg;
          setInput(next);
          setDisplay(next);
        }
      }
    } else if (btn.type === 'equals') {
      if (input === '' || isOperator(input.slice(-1))) {
        setError('Syntax Error');
        setDisplay('Syntax Error');
        return;
      }
      try {
        const result = safeEval(input);
        setDisplay(result.toString());
        setInput(result.toString());
      } catch (e) {
        setError(e.message);
        setDisplay(e.message);
      }
    }
  };

  // Display color logic
  const displayColor = 'text-slate-700';

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18 }}
      className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-400/30
        p-8 flex flex-col gap-6 min-w-[340px] max-w-[380px]"
      style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.25)' }}
    >
      {/* Display */}
      <div className={`relative rounded-xl bg-white/10 border border-white/20 px-4 py-6 mb-2
        shadow-inner text-right font-mono font-bold text-4xl
        flex items-center justify-end min-h-[64px] ${displayColor}`}>
        <AnimatePresence mode="wait">
          <motion.span
            key={display}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="block w-full"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      {/* Button Grid */}
      <div className="grid grid-cols-4 gap-3">
        {calculatorButtons.map((btn, idx) => (
          <Button
            key={idx}
            label={btn.label}
            type={btn.type}
            icon={btn.icon}
            onClick={() => handleClick(btn)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Calculator;
