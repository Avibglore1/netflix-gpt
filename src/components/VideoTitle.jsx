import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3 font-semibold'>{overview}</p>
        <div className='space-x-3'>
            <button className='bg-gray-500 text-white px-12 py-3 text-xl rounded-md'>Play</button>
            <button className='bg-gray-500 text-white px-12 py-3 text-xl rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle