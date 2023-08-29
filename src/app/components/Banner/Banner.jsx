"use client"
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';




import { Navigation } from 'swiper/modules';
const Banner = () => {
  return (
    <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <div className='bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.ibb.co/V94f7qz/wp10615928-movie-collection-wallpapers.jpg)] bg-center bg-no-repeat bg-cover py-52'>
<div className='text-center'>
<h1 className='text-white lg:text-6xl text-2xl  md:text-4xl font-bold'>One of The Best Movies Are Available</h1>
<p className='text-white  lg:text-lg text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolorem eveniet cupiditate facere!</p>
</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://townsquare.media/site/442/files/2015/10/star-wars-posters-pic.jpg?w=980&q=75)] bg-center bg-no-repeat bg-cover py-52'>
        <div className='text-center'>
<h1 className='text-white lg:text-6xl text-2xl md:text-4xl font-bold'>One of The Best Movies Are Available</h1>
<p className='text-white  lg:text-lg text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolorem eveniet cupiditate facere!</p>
</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://i.ibb.co/V94f7qz/wp10615928-movie-collection-wallpapers.jpg)] bg-center bg-no-repeat bg-cover py-52'>
        <div className='text-center'>
<h1 className='text-white lg:text-6xl text-2xl md:text-4xl font-bold'>One of The Best Movies Are Available</h1>
<p className='text-white  lg:text-lg text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolorem eveniet cupiditate facere!</p>
</div>
        </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Banner
