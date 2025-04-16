import React from 'react'
import Image from '../assets/premium.png'



const premium = () => {
  return (
    <div className=' h-[700px] w-[100%]  bg-gray-800 relative '>
      <div className='  h-[60px] w-[100%]  absolute '>
        <img  className=' ml-[670px] h-[450px] w-[850px] ' src={Image} alt="" />
        <div className=' w-[580px] h-[500px] text-white mt-[-400px] ml-[150px] '>
          <h1 className='text-5xl font-bold'>Listen without limits. Try 2 months of Premium for ₹119. </h1>
          <h1 className='mt-[10px]' >Only ₹119/month after. Cancel anytime.</h1>
          <div className='mt-[25px] gap-[20px] flex'>
            <button className='bg-white text-black h-[50px] w-[200px] font-bold rounded-3xl hover:scale-110 transition-transform ease-in-out'>Try 2 months for ₹119</button>
            <button className='bg-black text-white h-[50px] w-[170px] rounded-3xl font-bold hover:scale-110 transition-transform ease-in-out'>View all plans</button>
          </div>
          <h1 className='text-[12px] w-[320px] mt-[20px]'>₹119 for 2 months, then ₹119 per month after. Offer only available if you haven’t tried Premium before. Terms apply.</h1>
          <div className='mt-[170px] ml-[300px] w-[650px] flex flex-col items-center'>
            <h1 className='text-4xl text-white font-bold'>Experience the difference</h1>
            <h1 className='text-2xl'>Go Premium and enjoy full control of your listening. Cancel</h1>
            <h1 className='text-2xl'>anytime.</h1>

          </div>

        </div>
    

      </div>
 
      
    </div>
  )
}

export default premium
