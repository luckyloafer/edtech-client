import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentFailure = () => {
    const navigate = useNavigate();
  return (
    <>
    <h1>failure</h1><br/>
    <button onClick={()=>navigate('/home')}>Home</button>
    </>
  )
}

export default PaymentFailure