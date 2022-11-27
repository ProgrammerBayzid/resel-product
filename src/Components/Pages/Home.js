import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory'
import Contactus from './Contactus'
import OurService from './OurService'
import Phone from './phone'
import PhoneBuy from './PhoneBuy'
import Review from './Review'


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <OurService></OurService>
            <Phone></Phone>
            <PhoneBuy></PhoneBuy>
            <Contactus></Contactus>
            <Review></Review>
        </div>
    )
}

export default Home
