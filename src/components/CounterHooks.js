import React, {useState, useEffect} from  'react'

const CounterHooks = () =>{
    const [counter, setCounter]= useState(0)

    useEffect(() => {
        const timer= setInterval(()=>{
            setCounter(counter+1)
        }, 100 )
        console.log('Component use effect ${counter}');
        return ( )=> {
            console.log('Component cleaned')
            clearInterval(timer);
        };
    });
    console.log ('the render');
    return <h1>
        {counter}
    </h1>
}
export default CounterHooks;