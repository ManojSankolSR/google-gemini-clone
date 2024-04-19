import React, { useState } from 'react'
import '../index.css'
import { IoIosMenu } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { VscHistory } from "react-icons/vsc";
import { GoQuestion } from "react-icons/go";
import { IconButton } from './IconButton';

const ListItem = ({ component, title }) => {
  return (
    <div className='flex flex-row items-center px-2 gap-2 rounded-md w-full hover:bg-slate-200'>
      {
        component
      }
      <div className='text-sm font-semibold'>
        {
          title
        }
      </div>

    </div>
  )
}

const Sidebar = () => {
  const [isSidebarOpen, openSideBar] = useState(false);


  return (
    <div className={`hidden lg:flex lg:flex-col  lg:justify-between py-4  px-4 gap-2  lg: ${isSidebarOpen ? 'w-72 items-start' : 'w-20 items-center '} bg-slate-100 h-screen md:hidden sm:hidden`}>
      <div>
        <IconButton icon={<IoIosMenu size={25} />} onclick={() => {
          openSideBar(!isSidebarOpen);
          console.log(isSidebarOpen);
        }} />
        <br />
        <br />
        <div className={`flex flex-row items-center gap-3 rounded-full  ${isSidebarOpen ? 'py-2 px-3' : 'p-4'} bg-slate-200 `}>
          <GrAdd style={{
            size: 45
          }} />
          <div className={` ${!isSidebarOpen ? 'hidden' : 'flex'}`} >
            {
              'New Chat'
            }

          </div>


        </div>
      </div>
      <div className={`flex flex-col ${isSidebarOpen ? 'items-stretch' : 'items-center'}  w-full`}>

        {
          isSidebarOpen
            ?
            <div>
              <ListItem component={<IconButton icon={<FiSettings size={20} />} />} title={'Settings'} />
              <ListItem component={<IconButton icon={<VscHistory size={20} />} />} title={'Activity'} />
              <ListItem component={<IconButton icon={<GoQuestion size={20} />} />} title={'Help'} />
            </div>


            :
            <div className='space-y-2'>
              <IconButton icon={<FiSettings size={20} />} />
              <IconButton icon={<VscHistory size={20} />} />
              <IconButton icon={<GoQuestion size={20} />} />


            </div>

        }



      </div>



    </div>
  )
}

export default Sidebar