import React from 'react'
import Image from 'next/image'


const VideoPlayer = () => {
    
    return (
   <>
        <div className="relative mt-100">
                 <Image
                  src="/Mulima-Tosha.jpg"
                  alt="Mount Kenya Photo"
                  width={1200}
                  height={600}
                  priority
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
         </div>
         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-black bg-yellow-300 font-bold">
         Mulima-Tosha
         </h1>
        <div> 
        <div>    
        <video width="1200" height="400" controls className="mx-auto mb-4">
            <source src="/VID-20250630-WA0011.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>VG Group Members Coming Home</p>
        </div>
        </div>
  </>   
    )
   
}
export default VideoPlayer;