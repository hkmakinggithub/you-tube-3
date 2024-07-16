import React, { useState, useEffect } from 'react';
import LeftSlifBar from '../../Componets/LeftSlidBar/LeftSlifBar';
import { useNavigate } from 'react-router-dom';
import './VideoCall.css';

const VideoCall = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const SubmitHandler = () => {
    if (input.trim() !== "") {
      navigate(`/room/${input}`);
    } else {
      alert("Please enter your name to join.");
    }
  };


  const isVideoCallEnabled = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 18 && currentHour <= 24;
  };

  const [videoCallEnabled, setVideoCallEnabled] = useState(isVideoCallEnabled());

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoCallEnabled(isVideoCallEnabled());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='conatienr_home_page'>
        <LeftSlifBar />
        <div className='conatienr_home_page_2'>
          <div className='Header_video_call'>
            {videoCallEnabled ? 'Create a VideoCall Room' : 'Video Call Available from 6 PM to 12 PM'}
          </div>

          <div className='Input_section'>
            <input 
              type="text" 
              placeholder='Enter Your Name' 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              required
              disabled={!videoCallEnabled}
            />
            <button 
              onClick={SubmitHandler} 
              className='Channel_btn_button_3' 
              disabled={!videoCallEnabled}
            >
          meet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCall;
