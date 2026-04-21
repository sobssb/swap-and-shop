import React from 'react'

const Button = ({className, buttonTitle}) => {
  // this is just for the buttons on the website
  return (
    <button  className={`px-2 py-1 text-2xl rounded-2xl ${className}`}>
      {buttonTitle}
    </button>
  )
}

export default Button
