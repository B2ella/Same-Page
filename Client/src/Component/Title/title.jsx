import {BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import { IoIosArrowRoundBack} from "react-icons/io";

const Title = (props) => {
    return (
       <div>
         <Link to="/home">
        <IoIosArrowRoundBack className='text-gray-400 text-5xl absolute left-5 top-5 animate-pulse '/>
        </Link>
        <h1 className= 'pt-8 flex justify-center text-[23px] sm:text-[30px] md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin relative xl:top-40 lg:top-20 md:top-20 sm:top-20 top-28 px-14 text-center '
        style={{color: props.color}}>{props.children}Time to check if you are on the same page.</h1>
            <p className= 'flex justify-center text-[8px] sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-white font-thin relative 2xl:top-40 xl:top-40 lg:top-20 md:top-20 sm:top-20 top-28 xl:mb-60 lg:mb-52 md:mb-52 sm:mb-52 mb-52 opacity-60'>(click on the question to go to the next)</p>
           </div>
    )
}


const Title2 = (props) => {
    return (
        <div>
          <Link to="/thestart">
         <IoIosArrowRoundBack className='text-gray-400 text-5xl absolute left-5 top-5 animate-pulse '/>
         </Link>
         <h1 className= 'pt-12 flex justify-center text-[23px] sm:text-[30px] md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-thin relative xl:top-40 lg:top-20 md:top-20 sm:top-20 top-28 px-14 text-center '
         style={{color: props.color}}>{props.children}Time to check if you are on the same page.</h1>
             <p className= 'flex justify-center text-[8px] sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-white font-thin relative 2xl:top-40 xl:top-40 lg:top-20 md:top-20 sm:top-20 top-28 xl:mb-60 lg:mb-52 md:mb-52 sm:mb-52 mb-52 opacity-60'>(click on the question to go to the next)</p>
            </div>
     )
}

export {Title, Title2};