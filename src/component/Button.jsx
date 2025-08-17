import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const gradients = {
  number: 'bg-gradient-to-br from-white/30 via-blue-100/40 to-blue-300/30',
  operator: 'bg-gradient-to-br from-orange-400/40 via-purple-400/40 to-teal-400/40',
  special: 'bg-gradient-to-br from-gray-200/30 via-blue-200/30 to-indigo-200/30',
  equals: 'bg-gradient-to-br from-cyan-400/60 via-blue-500/60 to-blue-700/60',
};

const Button = ({ label, type, icon, onClick }) => {
  const Icon = icon ? FaIcons[icon] : null;
  return (
    <motion.button
      whileHover={{ scale: 1.08, boxShadow: '0 0 16px #60a5fa' }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-xl ${gradients[type]} p-0.5 shadow-lg shadow-blue-200/30 border border-white/20
        text-xl font-bold text-white/90 backdrop-blur-md transition-all
        ${type === 'equals' ? 'text-2xl drop-shadow-lg' : ''}
      `}
      style={{ minWidth: 56, minHeight: 56 }}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-1">
        {Icon ? <Icon className="inline-block text-lg" /> : null}
        {label}
      </span>
    </motion.button>
  );
};

export default Button;