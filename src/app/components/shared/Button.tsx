import className from 'classnames';
import { ReactNode } from 'react';

type ButtonProps = {
  children: string | ReactNode;
  className?: string;
  onClick?: (e: any) => void;
  red?: boolean;
  blue?: boolean;
  white?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  red,
  blue,
  white,
  ...rest
}) => {
  const classes = className(rest.className, 'text-center', {
    'h-12 lg:h-8 font-bold text-sm bg-brand-red text-white font-sansation rounded-7 lg:rounded-5 hover:bg-brand-dark transition-all duration-200 px-4 lg:px-3':
      red,
    'h-12 lg:h-8 font-bold text-sm bg-brand-dark text-white font-sansation rounded-7 lg:rounded-5 hover:bg-brand-red transition-all duration-200 px-4 lg:px-3':
      blue,
    'h-12 lg:h-8 font-bold text-sm bg-white text-brand-dark font-sansation rounded-7 lg:rounded-5 hover:bg-brand-dark hover:text-white transition-all duration-200 px-4 lg:px-3':
      white,
  });

  return (
    <button {...rest} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
