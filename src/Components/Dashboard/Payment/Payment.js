import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom';

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
