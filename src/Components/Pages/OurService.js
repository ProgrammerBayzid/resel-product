import React from 'react';

const OurService = () => {
    return (
        <div className=' gap-10 mt-32 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto'>
            <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">


                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/3178/3178795.png" alt='' />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Free Return</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Return money within 15 days</span>

                </div>
            </div>

            <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">

                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/4108/4108042.png" alt='' />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">100% Payment Secured
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">We ensure secure payment with PEV</span>

                </div>
            </div>
            <div className="w-full  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">


                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/176/176072.png" alt='' />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">100% Guarantee</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">From all orders over $500 Top 10 Booking</span>

                </div>

            </div>




        </div>
    );
};

export default OurService;