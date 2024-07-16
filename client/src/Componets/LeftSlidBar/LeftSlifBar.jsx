
import './LeftSlifBar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions, } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { MdOutlineWifiCalling3 , MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
const LeftSlifBar = () => {
  return (
    <>
        <div className="container_leftSlidbar">
            <NavLink to={'/'} className="icon_slidbar">
                <IoHomeOutline size={22} className='Home_icon_slidbar '/>
                <div className='Home_icon_text'>Home</div>
            </NavLink>
            <NavLink to={'/Shorts'} className="icon_slidbar">
                <MdOutlineVideoLibrary size={22} className='Home_icon_slidbar'/>
                <div className='Home_icon_text'>Short</div>
            </NavLink>
            <NavLink to={'/Subscription'} className="icon_slidbar">
                <MdOutlineSubscriptions size={22} className='Home_icon_slidbar'/>
                <div className='Home_icon_text'>Subscription</div>
            </NavLink>
            <NavLink to={'/VideoCall'} className="icon_slidbar">
                <MdOutlineWifiCalling3 size={22} className='Home_icon_slidbar'/>
                <div className='Home_icon_text'>Calling</div>
            </NavLink>
            <NavLink to={'/Library'} className="icon_slidbar">
                <MdOutlineAccountCircle  size={22} className='Home_icon_slidbar'/>
                <div className='Home_icon_text'>Account</div>
            </NavLink>
        </div>
    </>
  )
}

export default LeftSlifBar
