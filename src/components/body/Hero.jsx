import React, { useContext } from 'react'
import banner from '../../../public/assets/banner.jpg'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/userContext';

const Hero = () => {

  const navigate = useNavigate();
  const {isLoggedIn} = useContext(UserContext)
  const buttonHandler = ()=>{
    if(isLoggedIn){
      navigate('/dashboard')
    }else{
      navigate('/login')
    }
  }

  return (
    <div className='w-full h-[90vh] flex items-center justify-between relative' style={{backgroundImage:`url(${banner})` , backgroundPosition:'center' , backgroundSize:'cover'}}>
      
      <div className='w-full md:w-[60vw] lg:w-[50vw] flex flex-col justify-between gap-4 pl-10 text-left'>
        <h3 className='text-2xl w-max md:text-3xl lg:text-[50px] font-bold text-[#daa88c] backdrop-blur-[2px]'>Empowering Business </h3>
        <h3 className='text-2xl md:text-3xl lg:text-[50px] font-bold text-[#daa88c] backdrop-blur-[2px] w-max '>Networks</h3>
        <p className='text-lg md:text-xl lg:text-2xl text-white '>From Raw Materials to Tailors, Designers, and Sellers</p>
        <button className=' w-max text-lg bg-[#daa88c] text-gray-100 px-4 py-2 rounded-full' onClick={buttonHandler}>Start Now</button>
      </div>
    </div>
  )
}

export default Hero
