import React from 'react'

const Contactus = () => {
    return (
        <section>
            <div>
                <div>
                    <h4 className='text-xl text-primary font-bold text-center'> Contact Us</h4>
                    <h1 className='text-4xl text-center text-white'>Stay connected with us</h1>
                </div>
                <div>

                    <div className="card-body lg:w-1/2 flex mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Subject</span>
                            </label>
                            <input type="text" name="subject" placeholder="Type Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Subject</span>
                            </label>
                            <textarea type='text' name='message' className="textarea" placeholder="Type Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Contactus
