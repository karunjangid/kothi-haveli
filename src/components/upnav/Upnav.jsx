import React from 'react'
import './upnav.css'
import { IoMailOpen, IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Upnav = () => {
  return (
    <div className="upnav">
      <div className="upnav__left">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmHbvzPxHZWPrdGNnMVmmhqRsCZqxFjZrfBsFbqPnrrJnXnfTBZPVkzhFGsBlNwLQDJCZBl"><p className='up-text'><IoMailOpen style={{ color: "orangered", position: "relative", top: "2px", right: "4px" }} />jangidkind@gmail.com</p></a>
        <a href="https://maps.app.goo.gl/DQ7rHYrcEkNxjDYEA"><p className='up-text'><IoLocationSharp style={{ color: "orangered" }} />112,hui jaipur 202030</p></a>
      </div>
      <div className="upnav__right">
        <a href="https://www.facebook.com/profile.php?id=61561196073655" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/immkarun/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://github.com/karunjangid" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </div>
  )
}

export default Upnav