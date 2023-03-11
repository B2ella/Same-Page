const Card = (props) => {
    return (
       
         <div className="rounded-t-lg w-[75vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] xl:w-[30vw] 2xl:w-[30vw] h-[50vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] xl:h-[54vh] 2xl:h-[70vh]" 
         style={{backgroundImage: props.color}}>{props.children}
         
          </div>
        
    )
}


const GenericCard = (props) => {
    return (
        <div className="rounded-t-lg w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[40vw] xl:w-[25vw] 2xl:w-[30vw] h-[60vh] sm:h-[30vh] md:h-[30vh] lg:h-[40vh] xl:h-[60vh] 2xl:h-[70vh] "
        style={{backgroundImage: props.color}}>{props.children}
        
        </div>
    )
}

export {Card, GenericCard};

