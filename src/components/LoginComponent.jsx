import React, { useEffect, useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
import { Link, useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga'
// import { BiSolidUser } from "react-icons/bi";

const LoginComponent = () => {

  const navigate = useNavigate();
  const [credentails, setCredentials] = useState({});

  const login = async () => {

    try {
      let res = await LoginAPI(credentails.email, credentails.password)
      console.log(res)
      localStorage.setItem('userEmail', res.user.email)
      ReactGA.event({
        user:credentails.email
      })
      navigate('/home')
    } catch (error) {
      alert('Invalid credentials')

      console.log(error)

    }
  }

  useEffect(()=>{

    ReactGA.pageview(window.location.pathname)

  },[])
  return (
    <div>
      <div className='bg-gradient-to-b from-black via-gray-900 to-black bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>

        <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>

        <div className='relative my-4'>

          <input
            onChange={(e) => setCredentials({ ...credentails, email: e.target.value })}
            placeholder='Enter email'
            type='email'
            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
          />
          {/* <label className=" text-sm text-white duration-300 transform translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">Your Email</label> */}
          <label>Your Email</label>
          {/* <BiSolidUser/> */}
        </div>

        <div className='relative my className=""-4'>

          <input
            onChange={(e) => setCredentials({ ...credentails, password: e.target.value })}

            placeholder='Enter password'
            type='password'
            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
          />

          {/* <label className="absolute text-sm text-white duration-300 transform translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6">Password</label> */}
          <label>Password</label>
        </div>

        <button onClick={login} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2'>Sign in</button>
        <div>
          <span className='m-4'>New Here? <Link to='/signup' className='text-blue-500'>Create an Account</Link></span>
        </div>
      </div>

      {/* No account? <button onClick={() => navigate("/signup")} className='join-now '>Join now</button> */}
    </div>
  )
}

export default LoginComponent