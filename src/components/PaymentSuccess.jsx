import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';


const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div style={{ position:'relative',display: 'flex', padding: 20, flexDirection: 'column', alignItems: 'center', gap: 20 }}>
    <div style={{position:'absolute'}}>
      <h1 className='text-[25px] font-bold'>Payment Successfully handled</h1>
    </div>
      <Player
        src='https://lottie.host/9a1bd5c5-21c3-4092-a080-5e5e8e53e5a5/Df7WcGOQoV.json'
        style={{ width: 400, height: 400 }}
        loop
        autoplay
      />
      <div style={{position:'absolute', bottom:10, alignItems:'center', display:'flex', flexDirection:'column', gap:10}}>
        <p style={{textAlign:'center'}}>Your payment history will be recorded for the future necessaries..Thank You</p>
        <button onClick={() => navigate('/home')} style={{ backgroundColor: '	#6aa84f', padding: 10, borderRadius: 20, fontWeight: 'bold' }}>Go to Home</button>
      </div>


    </div>
  )
}

export default PaymentSuccess

{/* <h1>success</h1><br/>
    <button onClick={()=>navigate('/home')}>Home</button>
    <img src='../../public/pngwing.com (1).png' width={60} height={60}/> */}