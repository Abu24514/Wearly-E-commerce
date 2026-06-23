import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { TbShoppingCartHeart } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";
import SecondHanding from "../components/SecondHanding";
import CardTotals from "../components/CardTotals";
const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
  const cartTotal = 12;
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return cartData.length > 0 ? (
    <div className="mt-8 sm:mt-15">
      <SecondHanding
        icon={<TbShoppingCartHeart size={14} />}
        text="Shopping Cart"
      />

      <div className="mt-10 space-y-4">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
if (!productData) return null;
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-neutral-200 pb-5"
            >
              {/* Product Image */}
              <div className="w-24 h-28 sm:w-28 sm:h-36 overflow-hidden rounded-xl bg-neutral-100 shrink-0">
                <img
                  src={productData.image[0]}
                  alt={productData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="font-medium text-lg">
                  {productData.name}
                </h3>

                <div className="flex items-center gap-3 mt-2">
                  <p className="font-semibold">
                    {currency}
                    {productData.price}
                  </p>

                  <span className="px-3 py-1 text-xs border border-neutral-300 rounded-full">
                    {item.size}
                  </span>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center border border-neutral-300 rounded-full overflow-hidden w-fit">
                <button
                  onClick={() =>
                    updateQuantity(
                      item._id,
                      item.size,
                      item.quantity - 1
                    )
                  }
                  className="px-4 py-2 hover:bg-black hover:text-white transition-colors"
                >
                  −
                </button>

                <span className="px-4 font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item._id,
                      item.size,
                      item.quantity + 1
                    )
                  }
                  className="px-4 py-2 hover:bg-black hover:text-white transition-colors"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() =>
                  updateQuantity(item._id, item.size, 0)
                }
                className="text-neutral-500 hover:text-red-500 transition-colors"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          );
        })}
      </div>
      {/* Card-Totals */}

      <div className="mt-12 flex justify-end">

        <div className="w-full sm:w-105 border border-neutral-300 rounded-3xl p-6">
          <h3 className="font-display text-2xl">
            Cart Totals
          </h3>
          <CardTotals />

          <button
            onClick={() => navigate('/place-order')}
            className="w-full mt-6 bg-black text-white py-3 rounded-full hover:bg-neutral-800 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>


    </div>

  ) : (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <TbShoppingCartHeart size={70} className="text-neutral-300" />

      <h2 className="font-display text-3xl mt-6">Your Cart Is Empty</h2>

      <p className="text-neutral-500 mt-3">
        Start exploring our collection and add your favorite products.
      </p>
    </div>
  );
};

export default Cart;
