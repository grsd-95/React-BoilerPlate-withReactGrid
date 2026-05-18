import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../common/contexts/ThemeContext';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = ({
  className = '',
  iconOnly = false,
  responsiveCompact = false,
}) => {
  const { toggleTheme, isDarkMode } = useTheme();
  const label = isDarkMode ? 'Light' : 'Dark';

  const buttonClasses = [
    styles.themeToggle,
    iconOnly ? styles.iconOnly : '',
    responsiveCompact ? styles.responsiveCompact : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
      title={`${label} theme`}
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      <span>{label}</span>
    </button>
  );
};

export default ThemeToggle;
