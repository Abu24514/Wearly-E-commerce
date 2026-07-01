import React, { useContext, useEffect, useRef, useState } from "react";
import { AiContext } from "../../context/AiContext";
import MessageBubble from "./MessageBubble";
import { IoSend } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const ChatWindow = () => {
    const { isOpen, messages, sendMessage, isSending, clearChat } = useContext(AiContext);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isSending]);

    const handleSend = () => {
        if (!input.trim() || isSending) return;
        sendMessage(input);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-150 bg-white border border-neutral-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            {/* Header */}
            <div className="border-b border-neutral-200 px-5 py-4 bg-white">
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-2xl bg-black text-white flex items-center justify-center text-lg font-semibold shadow-sm">
                            AI
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg text-neutral-900">
                                Wearly Assistant
                            </h2>

                            <p className="text-xs text-neutral-500 mt-0.5">
                                Your personal shopping assistant
                            </p>
                        </div>

                    </div>

                    <button
                        onClick={clearChat}
                        className="w-10 h-10 rounded-xl border border-neutral-200 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all flex items-center justify-center"
                    >
                        <RiDeleteBin6Line size={18} />
                    </button>

                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
                {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center h-full px-6">

                        <div className="w-16 h-16 rounded-2xl bg-neutral-200 flex items-center justify-center text-2xl mb-5">
                            ✨
                        </div>

                        <h3 className="text-lg font-semibold text-neutral-900">
                            Welcome to Wearly AI
                        </h3>

                        <p className="text-sm text-neutral-500 mt-2 max-w-xs leading-6">
                            Ask anything about products, outfits, sizing, colors,
                            or shopping recommendations.
                        </p>

                        <div className="mt-7 flex flex-wrap justify-center gap-2">

                            <button
                                onClick={() => setInput("Show me oversized hoodies")}
                                className="px-4 py-2 rounded-full border border-neutral-200 text-sm hover:border-black transition"
                            >
                                Oversized Hoodies
                            </button>

                            <button
                                onClick={() => setInput("Recommend black outfits")}
                                className="px-4 py-2 rounded-full border border-neutral-200 text-sm hover:border-black transition"
                            >
                                Black Outfits
                            </button>

                            <button
                                onClick={() => setInput("Best sneakers")}
                                className="px-4 py-2 rounded-full border border-neutral-200 text-sm hover:border-black transition"
                            >
                                Sneakers
                            </button>

                        </div>

                    </div>
                )}

                {messages.map((msg, idx) => (
                    <MessageBubble key={idx} message={msg} />
                ))}

                {isSending && (
                    <div className="flex justify-start mb-3">
                        <div className="bg-neutral-100 px-4 py-2.5 rounded-2xl rounded-bl-sm flex gap-1">
                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-neutral-200 bg-white p-4">
                <div className="flex items-center gap-3 border border-neutral-300 rounded-2xl px-4 py-2 focus-within:border-black transition">

                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about products, sizes, outfits..."
                        className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral-400"
                    />

                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isSending}
                        className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:bg-neutral-800 disabled:opacity-40 transition"
                    >
                        <IoSend size={17} />
                    </button>

                </div>

                <p className="text-[11px] text-neutral-400 text-center mt-3">
                    You can chat in English, Hindi, or Hinglish.
                </p>
            </div>
        </div>
    );
};

export default ChatWindow;