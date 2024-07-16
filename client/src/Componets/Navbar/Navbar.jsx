import  { useEffect, useState, } from 'react';
import Youtube from '../../assets/th.jpeg';
import Hambler from '../../assets/Hamler.svg';
import Auth from '../../Pages/Auth/auth';
import './Navbar.css';
import Serach from '../Search/Serach';
import { RiVideoAddLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { gapi } from 'gapi-script';

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleDraw, setEditChannelBtn }) => {
  const [Authbtn, setAuthbtn] = useState(false);
  const CurrentUser = useSelector(state => state.currentUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: "420622967304-37r1nnbf4gdnnhk68qh1uh2p5eub8qkc.apps.googleusercontent.com",
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

  return (
    <>
      <div className='container_Navbar'>
        <div className='logo_navbar' onClick={() => toggleDraw()}>
          <img src={Hambler} alt="" height={24} />
        </div>
        <Link to={'/'} className='logo_img'>
          <img src={Youtube} alt="Youtube" className='logo_img' />
        </Link>
        <Serach />
        <div className='Navbar_last'>
     <Link to={"/VideoCall"} className='Navbar_last2'  >
      <RiVideoAddLine size={30} className='Create_Video'  />
     </Link>
          <IoMdNotificationsOutline size={30} className='Notification' />

          {CurrentUser && CurrentUser.result ? (
            <>
              <div className="Current_user_logo" onClick={() => setAuthbtn(true)}>
                <p className='Logo_app'>
                  {CurrentUser.result.name
                    ? CurrentUser.result.name.charAt(0).toUpperCase()
                    : CurrentUser.result.email.charAt(0).toUpperCase()}
                </p>
              </div>
              <div>
                <p className='points'>
                  Points: {CurrentUser.result.points}
                </p>
              </div>
            </>
          ) : (
            <button className='Channel_btn_button_1' onClick={handleSignInClick}>Sign In</button>
          )}
        </div>
      </div>
      {Authbtn &&
        <Auth User={CurrentUser} setAuthbtn={setAuthbtn} setEditChannelBtn={setEditChannelBtn} />
      }
    </>
  );
}

export default Navbar;
