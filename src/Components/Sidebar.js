import React, { useContext, useState } from 'react'
import '../index.css'
import { IoIosMenu } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { VscHistory } from "react-icons/vsc";
import { GoQuestion } from "react-icons/go";
import { IconButton } from './IconButton';
import { ChatsContext } from '../Contexts/Contexts';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { BsChatLeft } from "react-icons/bs";
import { ListItemComponent } from './ListItemComponent';
import RecentConverastionComponent from './RecentConverastionComponent';

// const DrawerItem=({icon,title,onclick})=>{
//   return (
//     <ListItem  disablePadding  sx={{ overflow:'hidden', textOverflow:'ellipsis', wordBreak:'keep-all', padding:0,whiteSpace:'nowrap', width:'100%'}  }>
//           <ListItemButton>
//             <ListItemIcon>
//               <IconButton icon={icon} onclick={onclick} />
//             </ListItemIcon>
//             <ListItemText primary={title} sx={{}}li  />
//           </ListItemButton>
//         </ListItem>
//   )


// }

const Sidebar = () => {
  const [isSidebarOpen, openSideBar] = useState(false);
  const chatContext = useContext(ChatsContext);



  return (
    <div className={`hidden lg:flex lg:flex-col  lg:justify-between py-4  px-4 gap-2  lg: ${isSidebarOpen ? 'w-72 items-start' : 'w-20 items-center '} bg-slate-100 h-screen md:hidden sm:hidden`}>
      <div>
        <IconButton icon={<IoIosMenu size={25} />} onclick={() => {
          openSideBar(!isSidebarOpen);
         
        }} />
        <br />
        <br />
        <div onClick={() => { chatContext.setChats([]);chatContext.setConversationId('')  }} className={`flex flex-row items-center gap-3 rounded-full cursor-pointer  ${isSidebarOpen ? 'py-2 px-3' : 'p-4'} bg-slate-200 `}>
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
      {
        isSidebarOpen && <RecentConverastionComponent/>
       
        
        

      }


      <div className={`flex flex-col ${isSidebarOpen ? 'items-stretch' : 'items-center'}  w-full`}>

        {
          isSidebarOpen
            ?
            <div>
              <ListItemComponent component={<IconButton icon={<FiSettings size={20} />} />} title={'Settings'} />
              <ListItemComponent component={<IconButton icon={<VscHistory size={20} />} />} title={'Activity'} />
              <ListItemComponent component={<IconButton icon={<GoQuestion size={20} />} />} title={'Help'} />
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