import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import SecondHanding from "../components/SecondHanding";
import { RiProductHuntLine } from "react-icons/ri";
import { ShopContext } from '../context/ShopContext'
import OrdersSkeleton from "../components/Skeletons/OrdersSkeleton";
import userAxios from "../configs/api";

const Orders = () => {
  const { currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loadOrderData = async () => {
    setIsLoading(true);
    try {
      const { data } = await userAxios.post('/api/order/userorders');
      if (data.success) {
        const allOrdersItem = []
        data?.orders?.map((order) => {
          order?.items?.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    loadOrderData()
  }, [])
  
    if (isLoading) return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <OrdersSkeleton />
    </section>
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <SecondHanding icon={<RiProductHuntLine size={14} />} text=' Order History' title=' My Orders' />
      <div className="space-y-5 mt-10">
        {orderData.map((item) => (
          <div
            key={item._id}
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
                    <span>Qty :{item.quantity}</span>
                    <span>Size : {item.size}</span>
                  </div>

                  <p className="mt-3 text-sm">
                    Ordered Date : <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className="mt-3 text-sm">
                    Payment : <span className="text-gray-400">{item.paymentMethod}</span>
                  </p>

                </div>

              </div>

              {/* Status */}
              <div className="flex items-center gap-2">

                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />

                <span className="text-sm font-medium">
                  {item.status}
                </span>

              </div>

              {/* Action */}
              <button
                onClick={loadOrderData} className=" active:scale-93   border border-neutral-300 px-5 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors">
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