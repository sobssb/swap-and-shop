import React from 'react'

const Button = ({className, buttonTitle}) => {
  // this is just for the buttons on the website
  return (
    <button  className={`text-3xl font-bold rounded-2xl ${className}`}>
      {buttonTitle}
    </button>
  )
}

export default Button
