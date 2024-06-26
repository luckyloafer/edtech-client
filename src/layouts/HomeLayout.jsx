import React ,{useMemo, useState}from 'react'
import Home from '../pages/Home'
import { getCurrentUser } from '../api/AuthAPI'



const HomeLayout = () => {

  const [currentUser, setCurrentUser] = useState({})

  useMemo(async()=>{
    await getCurrentUser(setCurrentUser)
    
  },[])
  console.log(currentUser)
  return (

    <div>
      
      <Home currentUser={currentUser}/>
    </div>
  )
}

export default HomeLayout