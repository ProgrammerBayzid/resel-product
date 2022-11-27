import React from 'react'
import p2 from '../../assets/img/p2.jfif'

const Phone = () => {
    const cards = [
        {
            id: 1,
            title: 'We Provide The Best Quelity Phone',
            description: 'Our Product Quelity Good. Our Seller Provide The Best Collection Phone. Every Buyer Can Buy Our Product TEction Freely. Every Seller Give Worenty',
            img: p2

        }
    ]
    return (
        <div className='mt-32'>

            {
                cards.map(card =>

                    <div className="hero  ">
                        <div className="hero-content flex-col lg:flex-row lg:gap-40">
                            <div>
                                <img src={card.img} className="max-w-sm rounded-lg shadow-2xl" />
                            </div>
                            <div>
                                <h1 className="text-5xl font-bold">{card.title}</h1>
                                <p className="py-6">{card.description}</p>
                                <button className='btn'>Get Stared</button>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default Phone
