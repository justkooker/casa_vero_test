import { useState } from 'react';
import styles from './Button.module.scss';

const Button = ({
  onClick,
  onKeyDown,
  height = 'auto',
  width = 'auto',
  children,
  textColor,
  borderRadius,
  bgColor,
  hoveredBgcolor,
  paddingTB=0,
  paddingLR=0,
  customStyles
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: textColor,
        borderRadius: borderRadius,
        padding: `${paddingTB}px ${paddingLR}px`,
        height: height,
        width: width,
        backgroundColor: isHovered ? hoveredBgcolor : bgColor,
        ...customStyles
      }}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
