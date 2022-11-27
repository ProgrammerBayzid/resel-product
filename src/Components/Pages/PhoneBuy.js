import React from 'react'
import { Link } from 'react-router-dom'

import p1 from '../../assets/img/p1.png'

const PhoneBuy = () => {
    return (
        <div>
            <section className='mt-36'
            >

                <div className="hero bg-indigo-300 rounded">
                    <div className="hero-content flex-col lg:flex-row-reverse p-10">
                        <img src={p1} className="-mt-44 hidden lg:block lg:w-2/3" />
                        <div>
                            <p className='font-bold mb-3 text-black'>Buy Now</p>
                            <h1 className="text-5xl font-bold text-black">Buy Now Today</h1>
                            <p className="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className='btn '>Buy</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PhoneBuy
