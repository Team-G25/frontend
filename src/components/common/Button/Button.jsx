/** @jsxImportSource @emotion/react */
import { buttonStyle } from './Button.style';

const Button = ({ children, onClick, disabled = false }) => {
  return (
    <button css={buttonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
