import React from 'react'

const Printer = ({
    src,
    onClick

}) => {
  return (
   <img src={src} alt='printer' width={30} height={40} onClick={onClick} style={{cursor : "pointer"}}/>
  )
}

export default Printer