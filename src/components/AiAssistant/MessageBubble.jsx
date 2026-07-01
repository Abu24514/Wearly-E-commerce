import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const MessageBubble = ({ message }) => {
  const { products, currency, navigate } = useContext(ShopContext);
  const isUser = message.role === "user";

  const suggestedProducts = (message.suggestedProductIds || [])
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`max-w-[80%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-2`}>
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? "bg-black text-white rounded-br-sm"
              : "bg-neutral-100 text-neutral-800 rounded-bl-sm"
          }`}
        >
          {message.content}
        </div>

        {suggestedProducts.length > 0 && (
          <div className="flex flex-col gap-2 w-full">
            {suggestedProducts.map((p) => (
              <div
                key={p._id}
                onClick={() => goToProduct(p._id)}
                className="flex items-center gap-3 border border-neutral-200 rounded-xl p-2 cursor-pointer hover:border-black transition-colors bg-white"
              >
                <img
                  src={p.image[0]}
                  alt={p.name}
                  className="w-12 h-12 object-cover rounded-lg shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium truncate">{p.name}</p>
                  <p className="text-xs text-neutral-500">{currency}{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;