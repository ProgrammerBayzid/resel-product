import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Context';

const BookingModal = ({ productName, setProductName }) => {
    const { user } = useContext(AuthContext);
    const { name, resale_price, rating } = productName;
    const { condition } = rating;



    const handelBooking = e => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const location = form.location.value;

        const booking = {
            buyerName,
            email,
            peoductName: name,
            price: resale_price,
            condition,
            number,
            location
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // setProductName(null);
                    toast.success('Booking Confirmed')
                    // refetch()
                }
                else {
                    toast.error(data.message)
                }

            })
    };




    return (
        <div>



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">Price: {resale_price}</h3>
                    <h3 className="text-lg font-bold">Condition: {rating.condition}</h3>

                    <form onSubmit={handelBooking} className="card-body lg:w-full flex mx-auto">


                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="Type your name" className="input input-bordered" />
                        <input type="text" defaultValue={user?.email} disabled name="email" placeholder="Type your email" className="input input-bordered" />
                        <input type="text" name="location" placeholder="Type your location " className="input input-bordered" />
                        <input type="text" name="number" placeholder="Type your number " className="input input-bordered" />
                        <input type="submit" value='submit' className="btn btn-accent " />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookingModal
