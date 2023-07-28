import {useState, useEffect} from 'react'
import {Card, GenericCard} from '../Card/Card';
import {Title, Title2} from '../Title/title';

const Health = () => {
    const [question, setQuestion] = useState(['Click to start'])

    

    useEffect(() => {
        const getQuestion = async () => {
            const response = await fetch("http://localhost:3000/health", {
                method: "GET",
                headers: {
                     'Content-Type': 'application/json'
                 }
            });
            
            const data = await response.json();
            setQuestion(data.payload);
        };
        getQuestion()
    }, []);
    

    return (
        <div className='animate-fadein'>
        <Title2 color="#436dad"/>
        <div className='grid place-content-center '>
    
        <Card color="linear-gradient( #436dad, #000000 )" >
        <div className='flex justify-center items-center mt-10'>
            <button className='text-white text-xl mt-28 font-thin px-14' onClick={() => setQuestion()}>{question}</button>
            </div>
            </Card> 
            </div>
            </div>
    )
}

export default Health;