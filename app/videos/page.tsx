import React from 'react'

const VideoPlayer = () => {
    return (
        <div className=" justify justify-items center video-player">
        <video controls>
            <source src="/VID-20250630-WA0011.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>VG Group Members Coming Home</p>
        </div>
    )
}
export default VideoPlayer;