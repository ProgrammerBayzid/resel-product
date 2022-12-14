import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import DeleteConfirmModal from './DeleteConfirmModal';
import axios from 'axios'
import { AuthContext } from '../../Context/Context';
import Spinner from '../Pages/Spinner';
const AllBuyer = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const [buyers, setBuyers] = useState([]);
    const [loding, setLoding] = useState(false);


    const closeModal = () => {
        setDeletingBuyer(null);
    };

    useEffect(() => {
        axios.get('https://phonesserver.vercel.app/allseller?role=Buyer')
            .then(data => {
                setLoding(true)
                const byr = data.data;
                setBuyers(byr)
            })
    }, [])





    const handleDeleteUser = buyer => {
        fetch(`https://phonesserver.vercel.app/user/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(` ${buyer.displayName} deleted successfully`)
                }
            })
    };



    if (loding === false) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mt-10 w-full'>
            <h1 className='text-3xl font-semibold mb-5'>All Users</h1>
            <div className='overflow-x-auto'>
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>

                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.displayName}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer?.designation}</td>
                                <td>
                                    <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBuyer &&

                <DeleteConfirmModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingBuyer.displayName}. It cannot be undone.`}
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    closeModal={closeModal}

                >

                </DeleteConfirmModal>}
        </div>
    )
}

export default AllBuyer
