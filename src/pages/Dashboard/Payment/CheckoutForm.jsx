import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import './CheckoutForm.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({price, item}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate();


    useEffect(() => {
      if (price > 0) {
          axiosSecure.post('/create-payment-intent', { price })
              .then(res => {
                  console.log(res.data.clientSecret)
                  setClientSecret(res.data.clientSecret);
              })
      }
    }, [price, axiosSecure])


    const handleSubmit = async(event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setCardError(error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

          const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
       
        console.log('payment intent', paymentIntent)
        setProcessing(false)

       if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        // save payment information to the server
        const payment = {
            email: user?.email,
            customer: user?.displayName,
            itemId: item._id,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            status: 'pending',
            itemName: item.name 
        }
        axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if (res.data.insertResult.insertedId) {
                    // display confirm
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Payment successfull',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    navigate('/') 
                }
              })
        }

    }
// w-[800px] grid grid-cols-2 border border-red-400
    return (
      <>
          <form className="w-[800px] grid grid-cols-1 ms-24 mt-0 mb-16" onSubmit={handleSubmit}>
              <CardElement
                  options={{
                      style: {
                          base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                                  color: '#aab7c4',
                              },
                          },
                          invalid: {
                              color: '#9e2146',
                          },
                      },
                  }}
              />
              <button className="btn btn-primary w-80 mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                  Pay
              </button>
          </form>
          {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
          {transactionId && <p className="text-green-500 ms-24">Transaction complete Successfully</p>}
     </>
    );
};

export default CheckoutForm;