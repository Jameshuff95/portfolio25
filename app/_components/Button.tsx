import { ButtonProps } from '../_types/types';

const Button = ({ title, onClick, disabled, className }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-600 text-white p-4 rounded hover:bg-blue-700 transition ${className ?? ''}`}
    >
      {title}
    </button>
  );
};

export default Button;
