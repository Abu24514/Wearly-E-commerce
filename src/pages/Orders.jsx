import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import SecondHanding from "../components/SecondHanding";
import { RiProductHuntLine } from "react-icons/ri";
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <SecondHanding icon={<RiProductHuntLine size={14} />} text=' Order History' title=' My Orders' />
      <div className="space-y-5 mt-10">


        {products.slice(1, 4).map((item) => (
          <div
            key={item.id}
            className="border border-neutral-200 rounded-3xl p-5 hover:border-neutral-300 transition-colors"
          >
            <div className="flex flex-col lg:flex-row gap-5 lg:items-center">


              {/* Product */}
              <div className="flex gap-4 flex-1">

                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-24 h-28 object-cover rounded-2xl"
                />

                <div>

                  <h3 className="font-medium text-lg">
                    {item.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-3 text-sm text-neutral-500">
                    <span>{currency}{item.price}</span>
                    <span>Qty : 1</span>
                    <span>Size : M</span>
                  </div>

                  <p className="mt-3 text-sm">
                    Ordered Date : <span className="text-gray-400">16 June 2026</span>
                  </p>

                </div>

              </div>

              {/* Status */}
              <div className="flex items-center gap-2">

                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

                <span className="text-sm font-medium">
                  Ready to Ship
                </span>

              </div>

              {/* Action */}
              <button className=" active:scale-93   border border-neutral-300 px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors">
                Track Order
              </button>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Orders;