import React, { useContext } from 'react'
import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import { IconButton } from './IconButton';
import { IoIosMenu } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { VscHistory } from 'react-icons/vsc';
import { GoQuestion } from 'react-icons/go';
import { BsChatLeft } from 'react-icons/bs';
import { ChatsContext } from '../Contexts/Contexts';
import { ListItemComponent } from './ListItemComponent';
import RecentConverastionComponent from './RecentConverastionComponent';


const DrawerItem = ({ icon, title, onclick }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <IconButton icon={icon} onclick={onclick} />
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
        <span className='text-xl font-semibold px-1 pt-3 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text sm:text-2xl sm:px-3 sm:pt-3'>

          Gemini
        </span>
        <RecentConverastionComponent/>
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