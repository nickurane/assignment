import React from 'react'
import  delhi from "./assets/delhi.mp4"


const Video = () => {
  return (
    <div className='md:w-[450px] '>
    <video controls  >
    <source src={delhi} type="video/mp4"  className='md:w-[450px] '/>

   </video>
   </div>
  )
}

export default Video
