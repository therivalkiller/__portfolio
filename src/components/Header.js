import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaStream} from 'react-icons/fa'

function Header() {
  const [showMenu , setshowMenu] = useState('md:hidden')
  const menuItems = [
    {
      title:'Home',
      key:'/'
    },
    {
      title:'Projects',
      key:'/projects'
    },
    {
      title:'Resume',
      key:'/resume'
    },
    {
      title:'Contact',
      key:'/contact'
    }
  ]

  const pathname = window.location.pathname

  return (
    <div className='text-white font-mont fixed top-0 left-0 right-0 z-10'>
      <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu!=='md:hidden' && 'md:flex-col'}`}>

          <div className='flex justify-between w-full items-center'>
            <Link to='/'><h1 className='text-4xl md:text-2xl font-semibold hover:text-yellow-500 cursor-pointer'>Amritanshu</h1></Link>
            <p className='h-14 items-left'><lottie-player src="https://assets2.lottiefiles.com/packages/lf20_rhnmhzwj.json"  background="transparent" speed="5" loop autoplay></lottie-player></p>
            <FaStream onClick={()=>{
              if(showMenu==='md:hidden'){
                setshowMenu('')
              }
              else{
                setshowMenu('md:hidden')
              }
             }}
             className='lg:hidden xl-hidden 2xl:hidden md:flex cursor-pointer'/>
          </div>


             {/* Web View */}


          <div className='flex md:hidden'>
            {menuItems.map((item) => {
              return ( 
              <li className={`list-none p-1 mx-5 ${item.key === pathname && 'bg-white text-black rounded-md'}`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
          </div>


          {/* Mobile Menu */}


          <div className={`mt-5 md:flex items-start justify-start w-full flex-col lg:hidden xl:hidden 2xl:hidden ${showMenu}`}>
            {menuItems.map((item) => {
              return ( 
              <li className={`list-none my-2 ${item.key === pathname && 'bg-white text-black rounded-md px-5'}`}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
          </div>


      </div>
    </div>
  );
}

export default Header