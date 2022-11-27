import React from 'react'
import people1 from '../../assets/person/pasa.jfif'
import people2 from '../../assets/person/eva.jfif'
import people3 from '../../assets/person/kabila.png'


const Review = () => {

    const testmonials = [
        {
            id: 1,
            name: 'Rafsun',
            city: 'Dashmina',

            description: 'Product are awesome. Thank you.',
            img: people1
        },
        {
            id: 2,
            name: 'Jihan',
            city: 'Dashmina',

            description: 'Seller Are very friendlly.',
            img: people2
        },
        {
            id: 3,
            name: 'Abir Pada',
            city: 'Dashmina',
            description: 'Thank for provide Good Quelity Product',
            img: people3
        },
    ]


    return (
        <section className='mt-16 ml-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'> Testimonial</h4>
                    <h1 className='text-4xl'>What Our Buyer Says</h1>
                </div>
                {/* <figure><img className='w-24 lg:w-48' src={quote} alt="" srcset="" /></figure> */}
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
                {
                    testmonials.map(testmonial =>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='mb-5'>
                                    <p>{testmonial.description}</p>

                                </div>
                                <div className="card-actions flex gap-5 items-center	">
                                    <figure><img className='rounded-full w-20' src={testmonial.img} alt="" srcset="" /></figure>
                                    <div>
                                        <p className='font-bold text-xl'>{testmonial.name}</p>
                                        <p className=' text-sm'>{testmonial.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>

        </section>
    )
}

export default Review
