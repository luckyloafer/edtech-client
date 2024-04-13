import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Payment from './components/Payment'
import Login from './pages/Login'
import SignupComponent from './components/SignupComponent'
import HomeLayout from './layouts/HomeLayout'
import PaymentSuccess from './components/PaymentSuccess'
import PaymentFailure from './components/PaymentFailure'

const App = () => {


  return (
    <div className='text-white h-[200vh} flex justify-center items-center bg-cover' >
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignupComponent />} />
        <Route path='/home' element={<HomeLayout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/paymentSuccess' element={<PaymentSuccess />}/>
        <Route path='/paymentFailure' element={<PaymentFailure />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App




// function App() {
  

//   return <div className='App'></div>
    
  
// }

// export default App
