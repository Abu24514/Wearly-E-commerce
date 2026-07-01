import { createContext, useContext, useState } from "react";
import userAxios from "../configs/api";
import { ShopContext } from "./ShopContext";
import { AuthContext } from "./AuthContext";
import toast from "react-hot-toast";

export const AiContext = createContext();

const AiContextProvider = (props) => {
  const { products } = useContext(ShopContext);
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);

  // Load chat history only once when the chat is opened (logged-in users only)
  const loadHistory = async () => {
    if (!user || historyLoaded) return;

    try {
      const { data } = await userAxios.get("/api/ai/history");
      setMessages(data.messages || []);
      setHistoryLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Do not call the API if the user is not logged in
    if (!user) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: text },
        {
          role: "assistant",
          content: "Please log in first to chat with me 🙂",
          suggestedProductIds: [],
        },
      ]);
      return;
    }

    // Show the user's message in the UI immediately
    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setIsSending(true);

    try {
      const { data } = await userAxios.post("/api/ai/chat", {
        message: text,
        products,
      });

      const aiMsg = {
        role: "assistant",
        content: data.reply,
        suggestedProductIds: data.suggestedProductIds || [],
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      toast.error("Failed to get a reply from AI. Please try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
          suggestedProductIds: [],
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const clearChat = async () => {
    if (!user || messages.length === 0) {
      setMessages([]);
      return;
    }

    // Skip summarization if there are fewer than 8 messages
    if (messages.length < 8) {
      setMessages([]);
      return;
    }

    try {
      await userAxios.post("/api/ai/summarize", { messages });
      setMessages([]);
    } catch (error) {
      setMessages([]);
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    messages,
    sendMessage,
    isSending,
    loadHistory,
    clearChat,
    isLoggedIn: !!user,
  };

  return (
    <AiContext.Provider value={value}>
      {props.children}
    </AiContext.Provider>
  );
};

export default AiContextProvider;