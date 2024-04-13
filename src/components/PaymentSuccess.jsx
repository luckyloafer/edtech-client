import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
    const navigate = useNavigate();
  return (
   <>
    <h1>success</h1><br/>
    <button onClick={()=>navigate('/home')}>Home</button>
   </>
  )
}

export default PaymentSuccess