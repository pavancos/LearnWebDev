import React, { useEffect } from 'react'
import './Hook.css'
const Hook = () => {
    useEffect(() => {
        console.log('effect is running')
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Hook
