import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-theme w-screen flex justify-center">
      <div className="md:w-full w-1/2">
        <div className="p-10 font-mont text-center">
          <p className="text-gray-50 pb-5">Designed and Developed By</p>

          <div className="h-1 border-2 border-white border-dotted"></div>

          <div className="flex text-white w-full justify-between py-3 z-10">
          <div className="z-10"><a href="https://www.facebook.com/amrit.anshu.988" target="blank"><FaFacebook/></a></div>
          <div className="z-10"><a href="https://www.instagram.com/therivalkiller/" target="blank"><FaInstagram /></a></div>
          <div className="z-10"><a href="mailto:amritanshu3011@gmail.com" target="blank"><FaMailBulk /></a></div>
          <div className="z-10"><a href="https://github.com/" target="blank"><FaGithub /></a></div>
          <div className="z-10"><a href="https://www.linkedin.com/in/amritanshu-sharma-b53787166/" target="blank"><FaLinkedin /></a></div>
          </div>

          <div className="h-1 border-2 border-gray-50 border-dotted"></div>

          <p className="text-gray-50 text-xl my-2">Amritanshu</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
