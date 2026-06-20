import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({
  to,
  content,
  onClick,
  className = "",
  BgColor,
  Color,
  HoverBg,
  HoverColor,
  ArrowColor,
  ArrowHoverColor,
}) => {
  const arrowRef = useRef(null);

  const button = (
    <button
      onClick={onClick}
      style={{
        backgroundColor: BgColor,
        color: Color,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = HoverBg;
        e.currentTarget.style.color = HoverColor;

        if (arrowRef.current) {
          arrowRef.current.style.color = ArrowHoverColor;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = BgColor;
        e.currentTarget.style.color = Color;

        if (arrowRef.current) {
          arrowRef.current.style.color = ArrowColor;
        }
      }}
      className={`
        font-medium
        px-3 py-2 text-[12px]
        md:px-6 md:py-3 md:text-base
        rounded-full
        flex items-center gap-2
        transition-all duration-300
        active:scale-95
        cursor-pointer
        group
        ${className}
      `}
    >
      {content}

      <FaArrowRightLong
        ref={arrowRef}
        style={{ color: ArrowColor }}
        className="transition-all duration-300 group-hover:translate-x-1.5 mt-[1.4px]"
      />
    </button>
  );

  return to ? <Link to={to}>{button}</Link> : button;
};

export default Button;