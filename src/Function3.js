import React,{useState , useEffect} from "react";

function Fun3(){
    const [count ,setcount]=useState(0)

    useEffect(()=>{
        console.warn("work 1")
    },[])

    useEffect(()=>{
        console.warn("work 2 1")
    },[])
    return (
        <div>
        <p>numbers increments further{count} </p>
        <button onClick={()=>(setcount(count+1))}>click me</button>
        </div>

    )
}
export default Fun3;