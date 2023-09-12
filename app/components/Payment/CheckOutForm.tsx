import { styles } from "@/app/styles/style";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import { useCreateOrderMutation } from "@/redux/features/orders/ordersApi";
import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
  Elements,

} from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';

import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import socketIO from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });
const stripePromise = loadStripe('pk_live_51NIT4YE3uKYHirTMDVLV0mbcYHHdzD2cKU1VSaeDoaNDxx75x6fo9Z5qsh6jA6TRUm9TLJlpQZMMkQHGXL3RMpxl00g9KvAWWb');

type Props = {
  setOpen: any;
  data: any;
  user:any;
  refetch:any;
};

const CheckOutForm = ({ data,user,refetch }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<any>("");
  const [createOrder, { data: orderData, error }] = useCreateOrderMutation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      setMessage(error.message);
      setIsLoading(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setIsLoading(false);
      createOrder({ courseId: data._id, payment_info: paymentIntent });
    }
  };

  useEffect(() => {
   if(orderData){
    refetch();
    socketId.emit("notification", {
       title: "New Order",
       message: `You have a new order from ${data.name}`,
       userId: user._id,
    });
    redirect(`/course-access/${data._id}`);
   }
   if(error){
    if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
   }
  }, [orderData,error])
  

  return (
    <Elements stripe={stripePromise} options={{clientSecret:'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'}}>
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement options={{}} id="payment-element" />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text" className={`${styles.button} mt-2 !h-[35px]`}>
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className="text-[red] font-Poppins pt-2">
          {message}
        </div>
      )}
    </form>
    </Elements>
  );
};

export default CheckOutForm;
