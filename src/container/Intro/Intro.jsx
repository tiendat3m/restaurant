import React, { useRef, useState } from 'react';
import { meal } from '../../constants';
import icons from '../../utils/icons';
import './Intro.css';

const { BsFillPlayFill, BsPauseFill } = icons

const Intro = () => {
  const [videoPlay, setVideoPlay] = useState(false)
  console.log(videoPlay)
  const videoRef = useRef()
  const handlePlayVideo = () => {
    setVideoPlay(prev => !prev)

    if(videoPlay) {
      videoRef.current.pause()
    }else {
      videoRef.current.play()
    }
}

  return (
    <div className='app__video' >
      <video 
        src={meal}
        ref={videoRef}
        type='video/mp4'
        muted
        loop
        controls={false}
      >

      </video>
      <div className="app__video-overlay flex__center ">
        <div className="app__video-overlay_circle flex__center" onClick={handlePlayVideo}>
          {videoPlay ? <BsFillPlayFill size={32} color='#fff'/> : <BsPauseFill size={32} color='#fff'/>}
        </div>
      </div>
    </div>
    )
  };

export default Intro;
