import { useRouteError } from 'react-router-dom'

function RoutingError() {
  let err = useRouteError()
  console.log(err)
  return (
    <div className='container-fluid d-flex justify-content-center align-content-center flex-wrap bg-dark bg-gradient' style={{ height: '100vh' }}>
      {/* /<h2 className='text-warning w-auto h-auto'>{err.status}-{err.statusText}</h2> */}
      <div className='d-flex flex-column justify-content-center align-content-center flex-wrap'>
        <p className='display-3 text-light '>
          {err.status}-{err.statusText}
        </p>
        <a className='mx-auto text-center text-decoration-none text-light bg-primary bg-gradient px-2 p-1 rounded-pill' href="/">Go Home</a>
      </div>

    </div>
  )
}

export default RoutingError