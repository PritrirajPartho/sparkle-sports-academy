import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key);


//TODO: SELECT A ONE ITEM OR CLASS PRICE NO NEED REDUCE
const Payment = () => {
    const location = useLocation();
    const item  = location.state;
    const price = location.state.price;

    return (
        <div>
            <Elements stripe={stripePromise}>
                 <CheckoutForm item={item} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;