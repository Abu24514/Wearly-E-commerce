import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CardTotals from "../components/CardTotals";
import { ShopContext } from "../context/ShopContext";
import userAxios from "../configs/api";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const { navigate, cartItems, getCartAmount, delivery_fee, setCartItem, products } = useContext(ShopContext);
  const [method, setMethod] = useState('COD');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    street: '', city: '', state: '',
    zipCode: '', country: '', phone: ''
  });

  const onChangeHandler = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // cart items array banao
      const orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemsInfo = structuredClone(products.find(p => p._id === items));
            if (itemsInfo) {
              itemsInfo.size = item
              itemsInfo.quantity = cartItems[items][item]
              orderItems.push(itemsInfo);

            }
          }
        }
      }
      // console.log(orderItems);


      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      // console.log(orderData);

      switch (method) {
        case 'COD':
          const { data } = await userAxios.post('/api/order/place', orderData);
          if (data.success) {
            toast.success(data.message);
            setCartItem({});
            navigate('/orders');
          } else {
            toast.error(data.message);
          }
          break;
        default:
          break;
      }



    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <section className="py-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

        {/* Delivery Information */}
        <div>
          <h2 className="font-display text-2xl sm:text-3xl mb-6 sm:mb-8">Delivery Information</h2>

          <form id="order-form" onSubmit={onSubmitHandler} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input required name="firstName" onChange={onChangeHandler} type="text" placeholder="First Name" className="border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
              <input required name="lastName" onChange={onChangeHandler} type="text" placeholder="Last Name" className="border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
            </div>
            <input required name="email" onChange={onChangeHandler} type="email" placeholder="Email Address" className="w-full border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
            <input required name="street" onChange={onChangeHandler} type="text" placeholder="Street Address" className="w-full border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
            <div className="grid grid-cols-2 gap-3">
              <input required name="city" onChange={onChangeHandler} type="text" placeholder="City" className="border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
              <input required name="state" onChange={onChangeHandler} type="text" placeholder="State" className="border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input required name="zipCode" onChange={onChangeHandler} type="text" placeholder="Zip Code" className="border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
              <input required name="country" onChange={onChangeHandler} type="text" placeholder="Country" className="border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />
            </div>
            <input required name="phone" onChange={onChangeHandler} type="tel" placeholder="Phone Number" className="w-full border border-neutral-300 rounded-xl px-3 py-3 text-sm outline-none focus:border-black" />

            {/* Order Summary */}
            <div className="border border-neutral-300 rounded-3xl p-5 sm:p-6 lg:hidden">
              <h3 className="font-display text-2xl">Order Summary</h3>
              <CardTotals />
            </div>

            {/* Payment Methods - mobile pe form ke andar */}
            <div className="lg:hidden mt-4">
              <h4 className="font-medium mb-4">Payment Method</h4>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 border border-neutral-300 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                  <input type="radio" name="payment" value="Stripe" onChange={(e) => setMethod(e.target.value)} />
                  <img className="h-5 object-contain" src={assets.stripe_logo} alt="Stripe" />
                </label>
                <label className="flex items-center gap-2 border border-neutral-300 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                  <input type="radio" name="payment" value="Razorpay" onChange={(e) => setMethod(e.target.value)} />
                  <img className="h-5 object-contain" src={assets.razorpay_logo} alt="Razorpay" />
                </label>
                <label className="flex items-center gap-2 border border-neutral-300 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                  <input type="radio" name="payment" value="COD" defaultChecked onChange={(e) => setMethod(e.target.value)} />
                  <span className="text-sm font-medium">Cash On Delivery</span>
                </label>
              </div>
            </div>

            {/* Submit button - mobile */}
            <button type="submit" className="w-full lg:hidden mt-4 bg-black text-white py-3.5 rounded-full hover:bg-neutral-800 transition-colors">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary - desktop */}
        <div className="hidden lg:block">
          <div className="border border-neutral-300 rounded-3xl p-5 sm:p-6 lg:sticky lg:top-24">
            <h3 className="font-display text-2xl">Order Summary</h3>
            <CardTotals />

            {/* Payment Methods */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Payment Method</h4>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 border border-neutral-300 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                  <input type="radio" name="payment" value="Stripe" onChange={(e) => setMethod(e.target.value)} />
                  <img className="h-5 object-contain" src={assets.stripe_logo} alt="Stripe" />
                </label>
                <label className="flex items-center gap-2 border border-neutral-300 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                  <input type="radio" name="payment" value="Razorpay" onChange={(e) => setMethod(e.target.value)} />
                  <img className="h-5 object-contain" src={assets.razorpay_logo} alt="Razorpay" />
                </label>
                <label className="flex items-center gap-2 border border-neutral-300 rounded-xl p-4 cursor-pointer hover:border-black transition-colors">
                  <input type="radio" name="payment" value="COD" defaultChecked onChange={(e) => setMethod(e.target.value)} />
                  <span className="text-sm font-medium">Cash On Delivery</span>
                </label>
              </div>
            </div>

            <button type="submit" form="order-form" className="w-full mt-8 bg-black text-white py-3.5 sm:py-4 rounded-full hover:bg-neutral-800 transition-colors">
              Place Order
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlaceOrder;