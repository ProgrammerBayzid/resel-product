import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Context'

const Profile = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }
    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <div className='w-24 items-center '>
                    <span className='rounded-full'>
                        {user?.photoURL ?
                            <img className='rounded-full' src={user.photoURL} />
                            :
                            <p>No Photo</p>}
                    </span>
                </div>
                <div>
                    <h1 className="text-3xl font-bold sm:text-center">Name: {user?.displayName ? user.displayName : 'Name Not Found'}</h1>
                    <p>Email: {user?.email}</p>
                    <p>ID: {user?.uid} </p>
                    <p> Email Status: {user?.emailVerified ? <span className=''>Verified</span> : <span className=''>Not Verified</span>} </p>
                    <button onClick={handelLogOut} className="btn btn-primary">Log Out</button>
                </div>
            </div>
        </div>

    )
}

export default Profile
