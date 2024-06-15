import React from 'react'
import {useRouteError} from 'react-router-dom'
const RoutingError = () => {
    let {error} = useRouteError()
    console.log(error)

  return (
    <div>
        <h1>
            {error.data}
        </h1>
        <h2>
            {error.status}-{error.statusText}
        </h2>
        </div>
  )
}

export default RoutingError