import React, { useContext } from 'react'
import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText,IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { VscHistory } from 'react-icons/vsc';
import { GoQuestion } from 'react-icons/go';
import { BsChatLeft } from 'react-icons/bs';
import { ChatsContext } from '../Contexts/Contexts';
import { ListItemComponent } from './ListItemComponent';
import RecentConverastionComponent from './RecentConverastionComponent';
import { CgClose } from "react-icons/cg";


const DrawerItem = ({ icon, title, onclick }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {
            icon
          }
         
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  )


}

const SideDrawer = ({ isDrawerOpen, onDrawerClose }) => {
  const chatContext = useContext(ChatsContext);
  return (
    <div>
      <Drawer PaperProps={{ sx: { width: '60%', padding: 1 } }} open={isDrawerOpen} onClose={() => { onDrawerClose(false) }} >
        <div className='flex justify-between'>
          <span className=' font-semibold px-1 pt-3 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-xl sm:text-2xl sm:px-3 sm:pt-3'>

            Gemini
          </span>
          <IconButton onClick={() => { onDrawerClose(false) }}>
            <CgClose />

          </IconButton>


        </div>
        <br />
        <RecentConverastionComponent />
        <br />
        <div>
          <DrawerItem icon={<FiSettings size={20} />} title={'Settings'} onclick={() => { }} />
          <DrawerItem icon={<VscHistory size={20} />} title={'Activity'} onclick={() => { }} />
          <DrawerItem icon={<GoQuestion size={20} />} title={'Help'} onclick={() => { }} />
        </div>



      </Drawer>
    </div>
  )
}

export default SideDrawer