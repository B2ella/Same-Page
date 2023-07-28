import {useState, useEffect} from 'react'
import { IoIosArrowRoundBack} from "react-icons/io";
import {Card, GenericCard} from '../Card/Card';
import {Title, Title2} from '../Title/title';

const Family = () => {
    const [question, setQuestion] = useState(['Click to start'])

    const getQuestion = async () => {
        const response = await fetch("http://localhost:3000/family", {
            method: "GET",
            headers: {
                 'Content-Type': 'application/json'
             }
        });
        
        const data = await response.json();
        setQuestion(data.payload);
    };



    return (
        
        <div className='animate-fadein'>
        <Title2 color="#D5B867"/>
        <div className='grid place-content-center '>
    
        <Card color="linear-gradient( #D5B867, #000000 )" >
        <div className='flex justify-center items-center mt-10'>
            <button className='text-white text-xl mt-28 font-thin px-14' onClick={() => getQuestion()}>{question}</button>
            </div>
            </Card> 
            </div>
            </div>
    )
}

export default Family;