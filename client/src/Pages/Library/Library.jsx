import React, { useEffect } from "react";
import LeftSlifBar from "../../Componets/LeftSlidBar/LeftSlifBar";
import "./Library.css";
import { FaHistory, FaPlayCircle, FaUser } from "react-icons/fa";
import love from '../../Componets/video/Tere Pyaar Mein (Full Video) Tu Jhoothi Main Makkaar_ Ranbir,Shraddha_ Pritam_Arijit,Nikhita,Amitabh.mp4';
import { login } from '../../actions/auth';
import { useDispatch, useSelector } from "react-redux";
import { gapi } from 'gapi-script';

export const Library = () => {
  
  
  const CurrentUser = useSelector(state => state.currentUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: "861778122358-sag7gf1qc4uuekidqtvikqutapqp769h.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          const user = authInstance.currentUser.get();
          const profile = user.getBasicProfile();
          const email = profile.getEmail();
          const userObj = { email };
          dispatch(login(userObj));
          localStorage.setItem('currentUser', JSON.stringify(userObj));
        }
      });
    });
  }, [dispatch]);

  const handleLoginSuccess = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    const user = authInstance.currentUser.get();
    const profile = user.getBasicProfile();
    const email = profile.getEmail();
    const userObj = { email };
    dispatch(login(userObj));
    localStorage.setItem('currentUser', JSON.stringify(userObj));
  };

  const handleLoginFailure = (error) => {
    console.log('Login Failed:', error);
  };

  const handleSignInClick = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn().then(handleLoginSuccess, handleLoginFailure);
  };

  const History = [
    {
      _id: 1,
      video_src: love,
      channel: "63646547636f73736",
      title: "Sulthan Video Song (Hindi) | KGF Chapter 2 | Rocking Star Yash | Prashanth Neel | Ravi Basrur | Hombale",
      uploader: "abc",
      Date: '1-1-2001',
      Name: "Hombly Movies"
    }
  ];

  return (
    <div className="conatienr_home_page">
      <LeftSlifBar />
      <div className="conatienr_home_page_2">
        <div className="container">
          <div className="Channel_detail">
            <div className="Library_account">
              <div className="Current_logo">
                <span> 
                  {CurrentUser?.result?.name
                    ? CurrentUser.result.name.charAt(0).toUpperCase()
                    : CurrentUser?.result?.email.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            <div className="channel_Name">
              <div className="Channel_title">
                <h6>{CurrentUser?.result?.channelName || 'Channel Name'}</h6>
              </div>
              <div className="Channel_Id">
                <span>@{CurrentUser?.result?.channelId || 'UserID'}</span>
                <div className="Channel_id_dot"></div>
                <b className="Channel_id_b">View Channel</b>
              </div>
              <div className="channel_btn">
                <button className="Channel_btn_button">
                  <span>
                    <FaUser size={15} />
                  </span>
                  Switch account
                </button>
                {CurrentUser && CurrentUser.result ? (
            <>
              <button className="Channel_btn_button" onClick={handleSignInClick}>Logout</button>
              
            </>
          ) : (
            <button className="Channel_btn_button" onClick={handleSignInClick}>Singin</button>
          )}
              <button className="Channel_btn_button">
                Points: {CurrentUser?.result?.points || 0}
              </button>
              </div>
            </div>
            
          </div> 
                
          {CurrentUser &&<>
          <div className="Library_history_contaienr">
            <div className="historyname">
              <div className="history_title">
                <div className="History_Icon">
                  <FaHistory size={22} className="text-white"/>
                  <p>History</p>
                </div>
              </div>
              <div className="histoty_btn">
                <button className="histoty_btn_button">View all</button>
              </div>
            </div>
            <div className="Histroy_content">
              {History.map(item => (
                <div key={item._id} className="history_video_1">
                  <video src={item.video_src} controls className="history_video"></video>
                  <div className="Video_detail_libray">
                    <h4>{item.title}</h4>
                    <p>{item.Name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> 

          {/* Playlist Section */}
          <div className="Library_history_contaienr">
            <div className="historyname">
              <div className="history_title">
                <div className="History_Icon">
                  <FaPlayCircle size={22} className="text-white"/>
                  <p>PlayList</p>
                  <div className="History_Icon">
                    <div className="div_button">Recently added</div>
                  </div>
                </div>
              </div>
              <div className="histoty_btn">
                <button className="histoty_btn_button">View all</button>
              </div>
            </div>
            <div className="Histroy_content">
              {History.map(item => (
                <div key={item._id} className="history_video_1">
                  <video src={item.video_src} controls className="history_video"></video>
                  <div className="Video_detail_libray">
                    <h4>{item.title}</h4>
                    <p>{item.Name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> 

          {/* ClipSection */}
         
          </>} </div>
      </div>
    </div>
  );
};

export default Library;
