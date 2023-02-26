import { Link } from "react-router-dom";
import {Card, GenericCard} from '../Card/Card';




const Landing = () => {
    return (
        <div className="animate-fadein">
            <h1 className="text-white text-3xl  opacity-80 font-thin flex justify-center relative top-10 sm:top-10 md:top-16 lg:top-20 xl:top-20 ">Pick a card...</h1>
         <div className=" relative top-28 sm:top-28 md:top-32 lg:top-36 xl:top-48 ">
        
         
         
        <div className="flex flex-col mr-20 sm:flex-row lg:flex-row xl:flex-row sm:gap-10 lg:gap-20 xl:gap-10 justify-center items-center ">
        
        
        <GenericCard color="linear-gradient( #26444E, #000000 )">
       
        <Link to="/thestart" className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl xl:text-xl mt-10  ">
         THE START
        </Link>
        </GenericCard>
        

        <GenericCard  color="linear-gradient( #D5B867, #000000 )">
        <Link to="/themiddle" 
        className="z-50 flex justify-center items-center relative sm:top-20 md:top-20  xl:top-1/2 text-white mt-10 opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl ">
        THE MIDDLE</Link>
        </GenericCard>

       

        <GenericCard color="linear-gradient(  #C15B41, #000000 )">
        <Link to="/beforetheend" className="z-50 flex justify-center items-center relative sm:top-20 md:top-20 xl:top-1/2 text-white opacity-70 text-8xxl sm:text-lg md:text-lg lg:text-xl mt-10">
        THE END</Link>
        </GenericCard>

      </div> 
      </div>
      </div>
  
    )
}

export default Landing;