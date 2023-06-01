import React from 'react'

const Video = ({url}) => {
  return (
    <div className='md:w-[450px] md:h-[100px]'>
    <video controls  >
    <source src={url} type="video/mp4" />

   </video>
   </div>
  )
}

export default Video
