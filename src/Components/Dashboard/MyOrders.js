import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Context'
import ConfirmationModal from './ConfirmationModal';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [deletingOrder, setDeletingOrder] = useState(null);

    const closeModal = () => {
        setDeletingOrder(null);
    };


    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = booking => {
        fetch(`http://localhost:5000/booking/${booking._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${booking.name} deleted successfully`)
                }
            })
    };



    return (
        <div className='mt-10 w-full'>
            <h1 className='text-3xl font-semibold mb-5'>My Orders</h1>
            <div className='overflow-x-auto'>
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>

                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr>


                                <th>{i + 1}</th>
                                <th>{
                                    booking.peoductName
                                }</th>
                                <th>{
                                    booking.price
                                }</th>
                                <th></th>
                                <td>
                                    <label onClick={() => setDeletingOrder(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>


                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingOrder.peoductName}. It cannot be undone.`}
                    successAction={handleDelete}
                    successButtonName="Delete"
                    modalData={deletingOrder}
                    closeModal={closeModal}

                ></ConfirmationModal>
            }
        </div>
    )
}

export default MyOrders