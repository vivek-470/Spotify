import React from 'react'
import banner from '../assets/bannerdownload.jpg'
import Appimg from '../assets/microsoft.svg' 
import microsoftimg from '../assets/playstore.png'
import playstoreimg from '../assets/playstore.svg'
import platformimg from '../assets/platform_cherries.jpg'

const Download = () => {
  return (
    <div className='h-[1223px] w-full mt-4 relative'>
      <img className="h-[520px] object-cover w-full" src={banner} alt="" />
      <div className='absolute top-0  h-[200px] w-[800px]  flex ml-[400px] mt-[250px]  '>
      <div className=' flex flex-col items-center w-full gap-7'>
        <h1 className='text-white text-5xl font-bold'>Download spotify</h1>
        <h1 className='text-white text-3xl font-bold'>Play millions of songs and podcasts on your device.</h1>
        <h1 className='text-white text-xl'><u>Download directly from spotify</u></h1>
      </div>
      </div>
      <div className='bg-white h-[300px] w-full flex flex-col justify-center gap-7'>
       <h1 className=' ml-[550px] text-3xl font-bold'>Listen on mobile and tablet,too</h1>
       <h1 className=' ml-[550px] '>Using Spotify on your phone or tablet is free, easy, and fun.</h1>
       <div className='w-full h-[50px] flex items-center justify-center gap-2'>
        <img  src={Appimg} alt="" />
        <img  className='h-[40px] w-[150px]' src={playstoreimg} alt="" />
      
        <img  src={microsoftimg} alt="" />
      

       </div>

      </div>
      <div className='relative h-[500px] w-full'>
        <img  className="h-[415px] w-full" src={platformimg} alt="" />
        <div className='absolute top-0 ml-[450px] text-white mt-[250px]  h-[180px] w-[650px] flex flex-col items-center justify-center gap-7'>
          <h1 className='text-4xl font-bold'>One account,listen everywhere</h1>
          <div className='flex font-bold gap-5'>
          <h1>Mobile</h1>
          <h1>Computer</h1>
          <h1>Tablet</h1>
          <h1>Car</h1>
          <h1>Playstation</h1>
          <h1>Xbox</h1>
          <h1>TV</h1>
          <h1>Speaker</h1>
          <h1>Web player</h1>
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default Download
