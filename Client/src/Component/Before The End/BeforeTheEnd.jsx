import {useState, useEffect} from 'react'
import {Card} from '../Card/Card';
import {Title} from '../Title/title';

const BeforeTheEnd = () => {
    const [question, setQuestion] = useState(['Click to start'])


    

    

    useEffect(() => {
        //getQuestion function sends a fetch request to the db/server to get the data 
        const getQuestion = async () => {
            const response = await fetch("http://localhost:3000/beforetheend", {
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
        <Title color="#C15B41"/>
        <div className='grid place-content-center '>
    
        <Card color="linear-gradient( #C15B41, #000000 )" >
        <div className='flex justify-center items-center mt-10'>
            <button className='text-white text-xl mt-28 font-thin px-14' onClick={() => setQuestion()}>{question}</button>
            </div>
            </Card> 
            </div>
            </div>
    )
}

export default BeforeTheEnd;