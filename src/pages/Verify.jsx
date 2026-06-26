import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import userAxios from "../configs/api";

/* This is temporary payment verification method after sometime I use (Stripe Webhook)  for verify the payment */
const Verify = () => {
  const { navigate, setCartItem } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      const { data } = await userAxios.post("/api/order/verifyStripe", {
        success,
        orderId,
      });
      console.log(data);
      if (data.success) {
        setCartItem({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    verifyPayment();
  }, [success, orderId]);

  return null;

};

export default Verify;
