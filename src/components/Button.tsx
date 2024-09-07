import React from "react";

interface ButtonProps {
  w?: string;
  h?: string;
  bgcolor?: string;
  text?: string;
  px?: string;
  py?: string;
  borderpx?: string;
  bordercolor?: string;
  hoverBgColor?: string; // Hover rengi prop
}

const Button: React.FC<ButtonProps> = ({
  w,
  h,
  bgcolor,
  text,
  px,
  py,
  borderpx,
  bordercolor,
  hoverBgColor,
}) => {
  return (
    <button
      style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundColor: `#${bgcolor}`,
        padding: `${py}px ${px}px`,
        border: `${borderpx}px solid #${bordercolor}`,
        borderRadius: "50px",
        transition: "background-color 0.3s ease", // Geçiş efekti
      }}
      className="text-white"
      onMouseOver={(e) => {
        (
          e.currentTarget as HTMLButtonElement
        ).style.backgroundColor = `#${hoverBgColor}`;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = bgcolor
          ? `#${bgcolor}`
          : "transparent";
      }}
    >
      {text}
    </button>
  );
};

export default Button;
