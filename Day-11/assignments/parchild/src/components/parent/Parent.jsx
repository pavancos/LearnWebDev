import React,{useState} from 'react'
import Child from '../child/Child'
const Parent = () => {
    let [counter, setCounter] = useState(0)
    let [sample, setSample] = useState(100)
    function getDataFromChild(data){
        setSample(data)
    }
    return (
        <div className='bg-dark max-auto mt-5 p-4 text-light text-center '>
            <h1>Parent</h1>
            <button className='btn btn-danger p-3'onClick={()=>{
                setCounter(counter+1)
            }}  >Increement</button>
            <h3>Counter in Parent: {counter}</h3>
            <h3>Data from Child: {sample}</h3>
            <Child count={{counter, setCounter}} passToParent={getDataFromChild} />
        </div>
    )
}

export default Parent