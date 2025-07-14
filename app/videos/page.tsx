import React from 'react'

const VideoPlayer = () => {
    return (
        <div className="video-player">
        <video width="640" height="360" controls className="mx-auto mb-4">
            <source src="/VID-20250630-WA0011.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>VG Group Members Coming Home</p>
        </div>
    )
}
export default VideoPlayer;