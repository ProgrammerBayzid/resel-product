import React from 'react'

import banner1 from '../../assets/images/_Banner1.png'
// import banner2 from '../../assets/images/_Banner2.png'
// import banner3 from '../../assets/images/_Banner3.png'
import BannerItem from './BannerItem'




const bannerData = [
    {
        image: banner1,
        prev: 3,
        id: 1,
        next: 2
    },
    // {
    //     image: banner2,
    //     prev: 1,
    //     id: 2,
    //     next: 3
    // },
    // {
    //     image: banner3,
    //     prev: 2,
    //     id: 3,
    //     next: 1
    // },
]

const Banner = () => {


    return (
        <div>

            {
                bannerData.map(banner =>
                    <BannerItem
                        key={banner.id}
                        banner={banner}
                    ></BannerItem>)
            }



        </div>
    )
}

export default Banner
