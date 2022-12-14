import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../../Context/Context'
import useAdmin from '../../useToken/useAdmin'
import useSellar from '../../useToken/useSellar'

import Header from '../Shared/Header'

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSellar] = useSellar(user?.email)

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-dawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side lg:bg-indigo-400 mr-5 rounded-xl">
                    <label htmlFor="dashboard-dawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li className='text-white font-bold'> <Link to='/dashboard/myorders'>My Order</Link></li>
                        {
                            isSellar &&
                            <>
                                <li className='text-white font-bold'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='text-white font-bold'> <Link to='/dashboard/addproduct'>Add Product</Link></li>
                            </>

                        }
                        {
                            isAdmin &&
                            <>
                                <li className='text-white font-bold'><Link to='/dashboard/allsaller'>All Saller</Link></li>
                                <li className='text-white font-bold'><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                                <li className='text-white font-bold'><Link to='/dashboard/alluser'>All User</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
