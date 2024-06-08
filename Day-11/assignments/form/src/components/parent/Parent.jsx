import React,{useState} from 'react'
import Child from '../child/Child'
const Parent = () => {
    let [counter, setCounter] = useState(0)
    let [sample, setSample] = useState(100)
    function getDataFromChild(data){
        setSample(data)
    }
    return (
        <div className='bg-danger bg-gradient mx-auto p-5  text-center h-100 d-flex flex-column font-monospace '>
            <h1>Parent</h1>
            <div className='bg-dark mx-auto p-4 mb-3 rounded-4'>
            <h3 className='text-light'>Counter : {counter}</h3>
            </div>
            
            <Child count={{counter, setCounter}} passToParent={getDataFromChild} />
        </div>
    )
}

export default Parent