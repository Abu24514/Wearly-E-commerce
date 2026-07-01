import React, { useContext } from "react";
import { AiContext } from "../../context/AiContext";
import { BsStars } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const FloatingChatButton = () => {
  const { isOpen, setIsOpen, loadHistory } = useContext(AiContext);

  const handleClick = () => {
    if (!isOpen) loadHistory();
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-neutral-800 transition-all hover:scale-105"
      aria-label="AI Assistant"
    >
      {isOpen ? <IoClose size={24} /> : <BsStars size={22} />}
    </button>
  );
};

export default FloatingChatButton;