import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Spinner from '../Pages/Spinner';
import DeleteConfirmModal from './DeleteConfirmModal';

const AllUser = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    };



    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://phonesserver.vercel.app/users')
            const data = await res.json();
            return data;
        }
    });




    const handelMakeAdmin = id => {
        fetch(`https://phonesserver.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successful.');
                    refetch();
                }
            })
    };


    const handleDeleteUser = user => {
        fetch(`https://phonesserver.vercel.app/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(` ${user.displayName} deleted successfully`)
                }
            })
    };

    if (isLoading) {
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
                            <th>Admin</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handelMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>{user?.designation}</td>
                                <td>
                                    <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingUser &&

                <DeleteConfirmModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.displayName}. It cannot be undone.`}
                    successAction={handleDeleteUser}
                    successButtonName="Delete"
                    modalData={deletingUser}
                    closeModal={closeModal}

                >

                </DeleteConfirmModal>}
        </div>
    )

}

export default AllUser

