import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Context';
import Spinner from '../Pages/Spinner';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const [isLoading, setisLoading] = useState(false)

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();


    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = 'https://api.imgbb.com/1/upload?key=0b3b07ced3b8cca094271a552e8192ff'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        phoneName: data.phoneName,
                        location: data.location,
                        resalePrice: parseInt(data.resalprice),
                        marketPrice: parseInt(data.marketprice),
                        use: data.use,
                        condition: data.condition,
                        categoryName: data.categoryName,
                        published_date: new Date().toLocaleString(),
                        sellerName: data.name,
                        rating: parseInt(data.rating),
                        email: data.email,
                        image: imgData.data.url,
                        sellerImg: user?.photoURL,
                        number: parseInt(data.number),
                        details: data.details

                    }

                    // save doctor information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            setisLoading(true)
                            navigate('/dashboard/addproduct')
                        })
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input
                        defaultValue={user?.displayName} readOnly
                        type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input
                        defaultValue={user?.email} readOnly
                        type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone Name</span></label>
                    <input
                        type="text" {...register("phoneName", {
                            required: "Phone Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.phoneName && <p className='text-red-500'>{errors.phoneName.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resal Price</span></label>
                    <input
                        type="text" {...register("resalprice", {
                            required: "Resal Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.resalprice && <p className='text-red-500'>{errors.resalprice.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Market Price</span></label>
                    <input
                        type="text" {...register("marketprice", {
                            required: "Market Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.marketprice && <p className='text-red-500'>{errors.marketprice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input
                        type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.Location && <p className='text-red-500'>{errors.Location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Number</span></label>
                    <input
                        type="text" {...register("number", {
                            required: "Number is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.Number && <p className='text-red-500'>{errors.Number.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Details</span></label>
                    <input
                        type="text" {...register("details", {
                            required: "Details is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.Details && <p className='text-red-500'>{errors.Details.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Rating</span></label>
                    <input
                        type="text" {...register("rating", {
                            required: "Rating is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.Rating && <p className='text-red-500'>{errors.Rating.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years of Use</span></label>
                    <input
                        type="text" {...register("use", {
                            required: "Use is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    {errors.use && <p className='text-red-500'>{errors.use.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text"> Select Product Condition</span></label>
                    <select
                        {...register('condition')}
                        className="select input-bordered w-full max-w-xs">
                        <option selected>Excelent</option>
                        <option>Good</option>
                        <option>Bad</option>


                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Select a Brand Category</span></label>
                    <select
                        {...register('categoryName')}
                        className="select input-bordered w-full max-w-xs">
                        <option selected>IPhone</option>
                        <option>Samsung</option>
                        <option>1+</option>


                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddProduct;
