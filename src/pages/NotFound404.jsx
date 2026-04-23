import React from 'react'
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <main className='grid place-content-center '>
      <h1 className='text-5xl my-5 px-5 font-bold text-black'>Page not found</h1>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Link className='mt-5 text-blue-700 text-center underline' to="/" >Go back to home page</Link>
    </main>
  )
}

export default NotFound404
