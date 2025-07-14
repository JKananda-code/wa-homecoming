import React from 'react'
import Image from 'next/image'


const VideoPlayer = () => {
    
    return (
   <>
        <div className="relative h-screen  mt-2">
                 <Image
                  src="/Mulima-Tosha.jpg"
                  alt="Mount Kenya Photo"
                  width={1200}
                  height={800}
                  priority
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
         </div>
         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-black bg-yellow-300 font-bold">
         Mulima-Tosha
         </h1>
        <div>       
        <video width="640" height="360" controls className="mx-auto mb-4">
            <source src="/VID-20250630-WA0011.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>VG Group Members Coming Home</p>
        </div>
  </>   
    )
   
}
export default VideoPlayer;