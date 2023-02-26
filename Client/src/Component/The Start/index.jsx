import { Link } from 'react-router-dom'
import React, { useRef, useState } from "react";
import { IoIosArrowRoundBack} from "react-icons/io";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import {Card, GenericCard} from '../Card/Card';

const TheStart = () => {
    return (
        <div className='animate-fadeleft'>
        <Link to="/home">
        <IoIosArrowRoundBack className='text-gray-400 text-5xl relative left-5 top-5 animate-pulse '/>
        </Link>
        
        <h1 className="text-white flex justify-center text-3xl font-thin relative top-20">Choose your topic of discussion.</h1>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={1}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="relative top-40 mr-20"
          >

{/* <li><link to="/dashboard">Dashboard<link></li> */}
            <SwiperSlide>
            <GenericCard color="linear-gradient( #26444E, #000000 )">
            <Link to="/finances" className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-xl mt-10 font-thin">Finances</Link>
            </GenericCard>

            </SwiperSlide>

            <SwiperSlide className="text-white">
            <GenericCard color="linear-gradient( #D5B867, #000000 )">
            <Link to="/family" className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-xl mt-10 font-thin ">Family</Link>
            </GenericCard>
            </SwiperSlide>

            <SwiperSlide className="text-white">
            <GenericCard color="linear-gradient(  #C15B41, #000000 )">
            <Link to='/children' className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-xl mt-10 font-thin ">Children</Link>
            </GenericCard>
            </SwiperSlide>

            <SwiperSlide className="text-white">
            <GenericCard color="linear-gradient(  #ad438f, #000000 )">
            <Link to='/love' className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-xl mt-10 font-thin ">Love</Link>
            </GenericCard>
            </SwiperSlide>

            <SwiperSlide className="text-white">
            <GenericCard color="linear-gradient(  #436dad, #000000 )">
            <Link to="/health" className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-xl mt-10 font-thin ">Health</Link>
            </GenericCard>
            </SwiperSlide>

            <SwiperSlide className="text-white">
            <GenericCard color="linear-gradient(  #7843ad, #000000 )">
            <Link to="/religion" className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-xl mt-10 font-thin ">Religion</Link>
            </GenericCard>
            </SwiperSlide>

  
          </Swiper>
        </div>
      );
}

export default TheStart;

