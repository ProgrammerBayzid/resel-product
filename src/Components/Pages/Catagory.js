import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Catagory = () => {
    const [catagoryName, setCatagoryName] = useState([])
    useEffect(() => {
        fetch('https://phonesserver.vercel.app/catagorys')
            .then(res => res.json())
            .then(data => setCatagoryName(data))
    }, [])


    return (
        <div className='mt-16'>
            <h1 className='text-center text-4xl font-bold mb-10'>Brand Category</h1>

            <div className='grid lg:grid-cols-3 mx-auto lg:ml-20 sm:ml-32 gap-5'>
                {
                    catagoryName.map(catagory =>

                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                            <h1 className='text-center text-xl font-bold'>Brand Name: {catagory.name}</h1>
                            <div className='mt-5  grid justify-items-center'>
                                <Link to={`/catagory/Products/${catagory.name}`}>  <button className="btn bg-indigo-500 text-white">See All Phones Of This Brand</button></Link>
                            </div>
                        </div>


                    )
                }
            </div>
        </div>
    )
}

export default Catagory
