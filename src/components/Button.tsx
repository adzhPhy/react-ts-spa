import React from "react";

type StyleProps = {
  styles: string;
};

const Button = (styles: StyleProps) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
