import React from 'react'
import './video.css'
const Video = () => {
  return (
    <>
    <div className="videoback">
        <h1 style={{color:"white",fontSize:"45px",width:"500px",position:"relative",top:"400px"}}>Get Closer view & Diffrent Feelings</h1>
    </div>
    <div className="video" style={{position:"absolute",top:"1940px",right:"440px"}}>
    <iframe width="960" height="515" src="https://www.youtube.com/embed/4K6Sh1tsAW4?si=Q5lHaS13G8Kjbg6e" frameborder="9" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{borderRadius:"20px 20px"}}></iframe>
    </div>
    </>
  )
}

export default Video