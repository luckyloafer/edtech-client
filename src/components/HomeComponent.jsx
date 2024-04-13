// import { config } from 'dotenv';
// config();
import React, { useState } from 'react'
import { onLogout } from '../api/AuthAPI'
import { loadStripe } from '@stripe/stripe-js'
// import axios from 'axios'

const carts = [
  {

    productImg: 'https://rukminim2.flixcart.com/image/850/1000/k8j3gcw0/book/9/6/5/objective-physics-for-neet-vol-1-2021-original-imafqgxhbjxdfqmb.jpeg?q=90&crop=false',
    price: 300,
    productName: 'DC PANDEY'
  },
  {
    productImg: 'https://m.media-amazon.com/images/I/A13FgnKTazS._AC_UF1000,1000_QL80_.jpg',
    price: 600,
    productName: 'HC VERMA'
  },
  {
    productImg: 'https://rukminim2.flixcart.com/image/850/1000/jpu324w0/book/5/9/2/wiley-s-solomons-fryhle-snyder-organic-chemistry-for-jee-main-original-imafbzpmng3phpga.jpeg?q=90&crop=false',
    price: 1000,
    productName: 'SOLOMON'
  }

]

const secretKey = import.meta.env.VITE_REACT_APP_publishStripekey;

const HomeComponent = () => {

  const [cartItems, setCartItems] = useState([]);

  const makePayment = async () => {
    const stripe = await loadStripe(secretKey)
    const body = {
      products: cartItems
    }
    const headers = {
      "Content-Type": 'application/json'
    }

    const response = await fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
    // const response = await axios.post('http://localhost:3000/create-checkout-session', carts,headers)
    // console.log(response)
    const session = await response.json();
    console.log(session)

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    })

    console.log(result)



    // if(result.error){
    //   console.log(error)
    // }
    // else{
    //   console.log('success')
    // }
  }

  console.log(carts)
  console.log(cartItems)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      <h1 className="text-3xl font-bold">Select items to purchase</h1>
      <div className="flex flex-row justify-between gap-4 mt-4">
        {carts.map((product) => {
          return <>
            <img
              src={product.productImg}
              alt={product.productName}
              width={100} height={100}
              className="cursor-pointer opacity-80"
              onClick={() => setCartItems(prev => [...prev, product])}
            />
          </>
        })}
      </div>

      <span className="mt-4">Cart Size</span><h3>{cartItems.length}</h3>

      {/* {cartItems.map((item)=>{
        return<> <p style={{fontSize:10}}>{item.productName}</p><br/></>
      })} */}

      <button onClick={makePayment}
        className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2'
      >Make payment with stripe
      </button><br />
      <button onClick={onLogout}
        className='w-full mb-4 text-[18px] mt-2 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2'
      >Logout</button>
    </div>
  )
}

export default HomeComponent