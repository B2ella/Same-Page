import {Card, GenericCard} from '../Card/Card';
import { TbActivityHeartbeat } from "react-icons/tb";
import { Link } from 'react-router-dom';
 
const Enter = () => {
    return (
       <div>
       <Link to="/home" className='absolute top-10 right-10 border-[0.5px] border-white w-20 h-20 rounded-full animate-pulse'>
       <p className='text-white text-xl relative text-center mt-5 font-light'>Enter</p> 
       </Link>
       
       
      <div className=" relative top-48 animate-fadein ">
        <div className="flex flex-col sm:flex-row lg:flex-row xl:flex-row sm:gap-10 lg:gap-20 xl:gap-20 justify-center items-center ">
        <div className="flex flex-col mr-20 sm:flex-row lg:flex-row xl:flex-row sm:gap-10 lg:gap-20 xl:gap-10 justify-center items-center ">
        
       
      <GenericCard color="linear-gradient( #26444E, #000000 )">
     
      <p className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-3xl mt-10  ">
      THE
      </p>
      </GenericCard>
      

      <GenericCard  color="linear-gradient( #FFDD7C, #000000 )">
      <p  className="z-50 flex justify-center items-center relative sm:top-20 md:top-20  xl:top-1/2 text-white mt-10 opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-3xl ">
        SA<TbActivityHeartbeat classname="text-white text-3xl"/>E
      </p>
      </GenericCard>

     

      <GenericCard color="linear-gradient(  #C15B41, #000000 )">
      <p className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 
      text-8xxl sm:text-lg md:text-lg lg:text-3xl mt-10" >PAGE</p>
      </GenericCard>

    </div>  
      </div>
      </div>  
      </div>     
    )
}

export default Enter;