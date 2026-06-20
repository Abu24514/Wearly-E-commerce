import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import CardTotals from '../components/CardTotals'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const {navigate} = useContext(ShopContext)
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Delivery Information */}
        <div>
          <h2 className="font-display text-3xl mb-8">
            Delivery Information
          </h2>

          <form className="space-y-4">

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />

            <input
              type="text"
              placeholder="Street Address"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="State"
                className="border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Zip Code"
                className="border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Country"
                className="border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-neutral-300 rounded-xl px-4 py-3 outline-none focus:border-black"
            />

          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="border border-neutral-300 rounded-3xl p-6 sticky top-24">

            <h3 className="font-display text-2xl">
              Order Summary
            </h3>

            <CardTotals />
            {/* ========== Payment Methods ================= */}
            <div className="mt-8">

              <h4 className="font-medium mb-4">
                Payment Method
              </h4>

              <div className="flex gap-2">

                <label className="flex items-center gap-3 border border-neutral-300 rounded-xl p-4 cursor-pointer">
                  <input type="radio" name="payment" />
                  <img className="h-6 mx-2" src={assets.stripe_logo} alt="" />
                </label>

                <label className="flex items-center gap-3 border border-neutral-300 rounded-xl p-4 cursor-pointer">
                  <input type="radio" name="payment" />
                  <img className="h-6 mx-2" src={assets.razorpay_logo} alt="" />
                </label>

                <label className="flex items-center gap-2 border border-neutral-300 rounded-xl px-4 py-3 cursor-pointer">
                  <input type="radio" name="payment" />

                  <span className="text-sm font-medium tracking-wide">
                    CASH ON DELIVERY
                  </span>
                </label>

              </div>

            </div>

            <button 
            onClick={()=>navigate('/orders')}
            className="w-full mt-8 bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-colors">
              Place Order
            </button>

          </div>
        </div>

      </div>

    </section>
  )
}

export default PlaceOrder
