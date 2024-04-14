import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';

const PaymentFailure = () => {
    const navigate = useNavigate();
  return (
    <div style={{ position:'relative',display: 'flex', padding: 20, flexDirection: 'column', alignItems: 'center', gap: 20 }}>
    <div >
      <h1 className='text-[25px] font-bold'>Payment Failed</h1>
    </div>
      <Player
        src='https://lottie.host/5a0553c1-2f1f-4bde-ba63-ba85f54e5ee0/jZdvpHGUqz.json'
        style={{ width: 200, height: 200 }}
        loop
        autoplay
      />
      <div style={{ alignItems:'center', display:'flex', flexDirection:'column', gap:10}}>
        <p style={{textAlign:'center'}}>Your payment history will be recorded for the future necessaries..Thank You</p>
        <button onClick={() => navigate('/home')} style={{ backgroundColor: '	#6aa84f', padding: 10, borderRadius: 20, fontWeight: 'bold' }}>Go to Home</button>
      </div>


    </div>
  )
}

export default PaymentFailure