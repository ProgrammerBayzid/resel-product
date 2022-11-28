import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const Catagory = () => {
    const [catagoryName, setCatagoryName] = useState([])
    const [loding, setLoding] = useState(false)
    useEffect(() => {
        fetch('https://phonesserver.vercel.app/catagorys')
            .then(res => res.json())
            .then(data => setCatagoryName(data))
    }, [])

    if (loding) {
        return <Spinner></Spinner>
    }

    return (
        <div className='mt-16'>
            <h1 className='text-center text-4xl font-bold mb-10'>Brand Category</h1>

            <div className='grid lg:grid-cols-3 mx-auto lg:ml-20 sm:ml-32 gap-5'>
                {
                    catagoryName.map(catagory =>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={catagory.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Brand Name: {catagory.name}</h2>
                                <div className="card-actions">
                                    <Link to={`/catagory/Products/${catagory.name}`}><button className="btn btn-primary">See All Phones Of This Brand</button></Link>

                                </div>
                            </div>
                        </div>



                    )
                }
            </div>
        </div>
    )
}

export default Catagory
