import React from 'react'

const SingleProduct = ({ product, setProductName }) => {
    const { name, _id, rating, location, published_date, use, author, image_url, details, original_price, resale_price
    } = product;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className='flex justify-between	'>
                    <div className='flex gap-3'>
                        <img className='w-7 rounded-full' src={author.img} alt="" srcset="" />
                        <h1>{author.name}</h1>
                    </div>
                    <div>
                        {published_date}
                    </div>
                </div>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h1> resale_price: {resale_price}</h1>
                    <h1>original_price: {resale_price}</h1>
                    <p>Location: {location}</p>
                    <p>Condition: {location}</p>
                    <p>Post: {published_date}</p>
                    <div className="card-actions justify-end">
                        <label
                            onClick={() => setProductName(product)}
                            htmlFor="booking-modal"
                            className="btn bg-indigo-500 text-white"
                        >Buy Now
                        </label>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default SingleProduct
