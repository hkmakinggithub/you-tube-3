import React from 'react';
import './Auth.css';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentUser';

const Auth = ({ User, setAuthbtn, setEditChannelBtn }) => {
  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(setCurrentUser(null));
    localStorage.removeItem('currentUser');
    alert("Logout Success");
    setAuthbtn(false);
  };

  const getInitial = () => {
    if (User?.result.name) {
      return User.result.name.charAt(0).toUpperCase();
    }
    return User?.result.email.charAt(0).toUpperCase();
  };

  return (
    <div className="Auth_container_1" onClick={() => setAuthbtn(false)}>
      <div className="Auth_container_2">
        <div className="auth_header">
          <h2>WELCOME TO YOUTHUBE</h2>
        </div>
        <div className="user_detail">
          <div className="Current_user_logo_1">
            <p className="Logo_app_1">{getInitial()}</p>
          </div>
          <div className="user_email">
            {User?.result.email}
          </div>
        </div>
        <div className="auth_actions">
          <div className="auth_btn">
            <input 
              type="submit" 
              className="auth-btns" 
              value={User?.result.channelName ? "Your Channel" : "Create Your Channel"} 
              onClick={() => setEditChannelBtn(true)} 
            />
          </div>
          <div className="logout_btn">
            <button className="logout" onClick={onLogoutSuccess}>Logout</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Auth;
