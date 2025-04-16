import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import gta from '../assets/gta.jpg'
import crowd from '../assets/crowd.jpg'
import vidyasagar from '../assets/vidyasagar.jpg'
import finding from '../assets/finding.jpg'
import backlash from '../assets/backlash.jpg'
import maand from '../assets/maand.jpg'



const Home = () => {

  const [text,setText]=useState("")
  const [count,setCount]=useState(0)

  const upperCase=()=>{
    setText(text.toUpperCase())
  }
  const LowerCase=()=>{
    setText(text.toLowerCase())
  }
  return (
    <div className='h-[600px] bg-black ml-2 flex gap-2'>
      {/* library card start */}
      <div className='bg-gray-900 h-[600px] w-[420px] rounded-[5px] text-white '>
        <div className='text-white py-3 flex justify-between'>
          <h1 className='ml-5 font-bold'>Your library</h1>
          <IoMdAdd className='mr-5 text-2xl' />
        </div>
        <div className='bg-gray-700 h-[130px] w-[400px] ml-3 rounded-[5px] mt-5'>
          <h1 className='font-bold ml-5 py-3'> Create your first playlist </h1>
          <h1 className='ml-5 text-[14px] font-bold select-none'>Its easy we'll help you </h1>
          <button className='bg-white h-[30px] w-[120px] text-black text-[14px] font-bold rounded-[14px] mt-4 ml-5 hover:transition hover:transform hover:scale-110 hover:ease-in-out'>Create playlist
          </button>



        </div>
        <div className='bg-gray-700 h-[130px] w-[400px] ml-3 rounded-[5px] mt-5'>
        <h1 className='font-bold ml-5 py-3'> Lets's find some podcasts to follow </h1>
          <h1 className='ml-5 text-[14px] font-bold select-none'>We'll keep you updated on new episodes</h1>
          <button className='bg-white h-[30px] w-[140px] text-black text-[14px] font-bold rounded-[14px] mt-4 ml-5 hover:transition hover:transform hover:scale-110 hover:ease-in-out'>Browse podcasts
          </button>



        </div>
        <div className='h-[130px] w-[400px] ml-4 mt-15 flex flex-col gap-2 '>
        <div className='flex  gap-5 ml-4'>
          <h1 className='text-[12px] text-gray-400'>Legal</h1>
          <h1 className='text-[12px] text-gray-400'>Safety&PrivacyCenter</h1>
          <h1 className='text-[12px] text-gray-400'>PrivacyPolicy</h1>
          <h1 className='text-[12px] text-gray-400'>Cookies</h1>
        </div>
        <div className='flex gap-5 ml-4'>
          <h1 className='text-[12px] text-gray-400'>AboutAds</h1>
          <h1 className='text-[12px] text-gray-400'>Accesibility</h1>
          
         
        </div>
        <div className='flex gap-5 ml-4'>
          <h1 className='text-[12px] text-white'>Cookies</h1>
     
          
         
        </div>
        <div className='h-[30px] w-[90px] border-[1px] border-gray-400 rounded-2xl flex justify-center items-center gap-1 mt-6 ml-5'>
          <CiGlobe className='text-[16px]' />
          <h1 className='text-[14px] text-white font-bold '>English</h1>
     
          
         
        </div>
        </div>
      


      </div>
      {/* library card end */} 
       {/* <div className='bg-blue-400 h-[300px] w-[800px] flex flex-col items-center gap-[20px]'>
        <h1 className='text-white'>Text converter</h1>
        <input type="text" className='h-[60px] w-[700px] bg-white rounded-[5px] BORDER-3 outline-none border-none' value={text} onChange={(e)=>setText(e.target.value)}/>
        <div className=' flex gap-[10px]'>
        <button className='bg-green-300 text-white w-[180px] rounded-[5px]' onClick={upperCase}>Convert to UpperCase</button>
        <button className='bg-green-300 text-white w-[180px] rounded-[5px]' onClick={LowerCase}>Convert to LowerCase</button>
        <button className='bg-green-300 text-white w-[180px] rounded-[5px]' onClick={()=>upperCase()}>Convert to uppercase</button>
        <button className='bg-green-300 text-white w-[180px] rounded-[5px]' onClick={()=>upperCase()}>Convert to uppercase</button>
        </div>
        <div>
          <h1 className='text-white'>the count is {count}</h1>
          <button className="h-[30px] w-[70px] rounded-[5px] bg-red-300 flex justify-center items-center text-white" onClick={()=>setCount(count+1)}>counter</button>

        </div>

      </div> */}
        <div className='h-[600px] w-[100%]  rounded-xl bg-gray-900 py-4 px-4'>
          <h1 className='text-white font-bold text-2xl'>Trending songs</h1>
           {/* main div */}
          <div className='h-[250px]  mt-5 flex gap-4'>
            <div className='w-[160px]'>
              <img className='h-[170px] w-[160px]' src={gta} alt="" />
              <h1 className='text-white font-semibold'>Pal Pal</h1>
              <h1 className='text-gray-400 text-[14px] font-semibold '>Afusic,AliSoomro Music</h1>

            </div>
            <div className='w-[160px]'>
              <img className='h-[170px] w-[160px]' src={crowd} alt="" />
              <h1 className='text-white font-semibold'>Superstar</h1>
              <h1 className='text-gray-400 text-[14px] font-semibold'>dox,JASKARAN,Rita Kim</h1>

            </div>
            <div className='w-[160px]  break-words'>
              <img className='h-[170px] w-[160px]' src={vidyasagar} alt="" />
              <h1 className='text-white font-semibold'>Thottu Thottu</h1>
              <h1 className='text-gray-400 text-[14px] font-semibold w-[150px] '>Swarnalatha, Pushpavanam</h1>

            </div>
            <div className='w-[160px]'>
              <img className='h-[170px] w-[160px]' src={finding} alt="" />
              <h1 className='text-white font-semibold'>Finding Her</h1>
              <h1 className='text-gray-400 text-[14px] font-semibold'>Kushagra,Bharath, Saaheal</h1>

            </div>
            <div className='w-[160px]'>
              <img className='h-[170px] w-[160px]' src={backlash} alt="" />
              <h1 className='text-white font-semibold'>BACKLASH</h1>
              <h1 className='text-gray-400 text-[14px] font-semibold'>Prem Dhillon,The Kidd</h1>

            </div>
            <div className='w-[160px] '>
              <img className='h-[170px] w-[160px]' src={maand} alt="" />
              <h1 className='text-white font-semibold'>Maand</h1>
              <h1 className='text-gray-400 text-[14px] font-semibold'>Bayaa,Hasan Raheem, Rovalio</h1>

            </div>
          </div>

        </div>
   
    </div>
  )
}

export default Home
