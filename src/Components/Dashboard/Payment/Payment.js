import React from 'react'
import { loadStripe } from '@stripe/stripe-js';

import { useLoaderData, useNavigation } from 'react-router-dom';




const stripePromise = loadStripe('pk_test_51M6U64G7PkQ5daFNJ5jIwvzjgdLP0ANXmUoTnVYgQHAGCqCwm2cIsy62dVJ8QbCmVLmThdXNGRVYedVJNfK7p1JN009bkUa0eS');


const Payment = () => {
    const data = useLoaderData();
    const { peoductName, price } = data;
    const navigation = useNavigation();
    return (
        <div>
            <h1>{peoductName}</h1>
        </div>
    )
}

export default Payment
