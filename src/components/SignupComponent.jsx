import React, { useState } from 'react'
import { RegisterAPI, postUserData } from '../api/AuthAPI'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'

const SignupComponent = () => {
    const navigate = useNavigate();
    const [credentails, setCredentials] = useState({});

    const register = async () => {

        try {
            let res = await RegisterAPI(credentails.email, credentails.password)
            //toast.success('Account Created')
            let id = await uuid();
            console.log(id)
            postUserData({
                userID: id,
                email: credentails.email,
            })
            console.log(res)
            navigate('/')
            localStorage.setItem('userEmail', res.user.email)
        } catch (error) {
            console.log(error)
            // toast.error('Error')
        }

    }
    return (
        <div>

            <div className='bg-gradient-to-b from-black via-gray-900 to-black bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>

                <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Sign Up</h1>

                <div className='relative my-4'>
                    <input
                        onChange={(e) => setCredentials({ ...credentails, email: e.target.value })}

                        placeholder='Enter email'
                        type='email'
                        className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                    />
                    <label>Your Email</label>
                </div>

                <div className='relative my className=""-4'>

                    <input
                        onChange={(e) => setCredentials({ ...credentails, password: e.target.value })}

                        placeholder='password (6 or more characters)'
                        type='password'
                        className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                    />
                    <label>Password</label>
                </div>

                <button onClick={register} className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2'>Agree & Join</button>

            </div>

        </div>
    )
}

export default SignupComponent



//     < input
// onChange = {(e) => setCredentials({ ...credentails, password: e.target.value })}

// placeholder = 'password (6 or more characters)'
// type = 'password'
//     />

    