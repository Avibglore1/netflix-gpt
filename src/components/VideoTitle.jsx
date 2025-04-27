import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='absolute bg-gradient-to-r bg-black bg-opacity-35 w-screen aspect-video text-white
    pt-44 pl-20'>
        <h1 className='text-5xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-1/3 font-semibold'>{overview}</p>
        <div className='space-x-3'>
            <button className='bg-white text-black px-12 py-3 text-xl rounded-md hover:bg-opacity-35'>Play</button>
            <button className='bg-gray-500 text-white px-12 py-3 text-xl rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle