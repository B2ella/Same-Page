import {useState, useEffect} from 'react'
import {Card, GenericCard} from '../Card/Card';
import {Title, Title2} from '../Title/title';

const Religion = () => {
    const [question, setQuestion] = useState(['Click to start'])

    const getQuestion = async () => {
        const response = await fetch("http://localhost:3000/religion", {
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
        <Title2 color="#7843ad"/>
        <div className='grid place-content-center '>
    
        <Card color="linear-gradient( #7843ad, #000000 )" >
        <div className='flex justify-center items-center mt-10'>
            <button className='text-white text-xl mt-28 font-thin px-14' onClick={() => getQuestion()}>{question}</button>
            </div>
            </Card> 
            </div>
            </div>
    )
}

export default Religion;