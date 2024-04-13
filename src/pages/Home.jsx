import React,{useEffect,useState} from 'react'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';
// import Loader from '../components/common/Loader';

const Home = ({currentUser}) => {

   const navigate = useNavigate();

   const [loading,setLoading] = useState(true);
   console.log('home')
    console.log(currentUser)

  useEffect(()=>{
    
    onAuthStateChanged(auth, res=>{
      if(!res?.accessToken){
        navigate('/')
     }
     else{
      setLoading(false);
     }
    })

  },[])
  return <>
    {loading ? <h1>loading</h1>:<HomeComponent currentUser={currentUser}/>}
  </>
}

export default Home