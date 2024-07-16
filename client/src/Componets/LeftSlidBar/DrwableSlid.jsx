
import './LeftSlifBar.css'
import {  AiFillPlaySquare, AiOutlineHome} from 'react-icons/ai'
import { SiShortcut } from "react-icons/si";
import { BsPersonSquare } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { TbPlaylist } from "react-icons/tb";
import { MdOutlineSubscriptions,  MdOutlineWatchLater } from 'react-icons/md'
import Short from "../assets/Short.svg"
import History from '../assets/History.svg'
import YourChannel from '../assets/YourChannel.svg'
import PlayList from '../assets/PalyList.svg'
import { NavLink } from 'react-router-dom'


const DrwableSlid = ({toggleDraw,ToggleDrawSlid}) => {
  return (
   <>
   <div className='Container_Draw' style={ToggleDrawSlid}>
        <div className='Container_Draw_2'>
            <div className="DrawLeft_Slid">
                <NavLink to={'/'} className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                        <AiOutlineHome size={22} className='Icon_slid' style={{margin: "auto 0.7rem"}}/>
                        <div className='Draw_text_icon'>
                            Home
                        </div>
                    </p>
                </NavLink>

                <NavLink to={'/Shorts'} className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                    <SiShortcut src={Short} className='Icon_slid' style={{ margin: "auto 0.7rem" }} />

                        <div className='Draw_text_icon'>
                            Short
                        </div>
                    </p>
                </NavLink>

                <NavLink to={'/Subscription'} className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                        <MdOutlineSubscriptions size={22} className='Icon_slid' style={{margin: "auto 0.7rem"}}/>
                        <div className='Draw_text_icon'>
                        Subscription
                        </div>
                    </p>
                </NavLink>
            </div>

            <div className='Library_draw_Left'>
                <div className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                        <BsPersonSquare src={YourChannel} size={22} className='Icon_slid' style={{margin: "auto 0.7rem"}}/>
                        <div className='Draw_text_icon'>
                        Your Channel
                        </div>
                    </p>
                </div>

                <div className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                        <IoMdTime src={History} size={22} className='Icon_slid' style={{margin: "auto 0.7rem"}}/>
                        <div className='Draw_text_icon'>
                        History
                        </div>
                    </p>
                </div>

                <div className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                        <TbPlaylist src={PlayList} size={22} className='Icon_slid' style={{margin: "auto 0.7rem"}}/>
                        <div className='Draw_text_icon'>
                        PlayList
                        </div>
                    </p>
                </div>

                <div className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                        <AiFillPlaySquare size={22} className='Icon_slid' style={{margin: "auto 0.7rem"}}/>
                        <div className='Draw_text_icon'>
                        Your Video
                        </div>
                    </p>
                </div>

                <div className="Icon_Slid_div text-decoration-none text-black">
                    <p>
                        <MdOutlineWatchLater size={22} className='Icon_slid' style={{margin: "auto 0.7rem"}}/>
                        <div className='Draw_text_icon'>
                        Watch Later
                        </div>
                    </p>
                </div>

             
            </div>
        </div>
        <div className="container_Dreaw_3" onClick={()=>toggleDraw()}></div>
   </div>
    
   </>
  )
}

export default DrwableSlid
