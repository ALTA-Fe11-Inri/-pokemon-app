import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="btn gap-1 bg-[#0369a1] text-[9px]" {...props}>
      {label}
    </button>
  );
};

export default Button;
