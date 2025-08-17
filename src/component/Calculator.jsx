import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { calculatorButtons } from '../data/calculatorData';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

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
      <div className="relative rounded-xl bg-white/10 border border-white/20 px-4 py-6 mb-2
        shadow-inner text-right font-mono font-bold text-4xl text-white/90
        flex items-center justify-end min-h-[64px]">
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
            onClick={() => {}}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Calculator;
