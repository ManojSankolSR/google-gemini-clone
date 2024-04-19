import React from 'react'
import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import { IconButton } from './IconButton';
import { IoIosMenu } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { VscHistory } from 'react-icons/vsc';
import { GoQuestion } from 'react-icons/go';


const DrawerItem=({icon,title,onclick})=>{
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
  return (
    <div>
      <Drawer PaperProps={{ sx: { width: '60%', padding: 1 } }} open={isDrawerOpen} onClose={() => { onDrawerClose(false) }} >
        <div>

          Gemini
        </div>
        <DrawerItem icon={<FiSettings size={20} />} title={'Settings'} onclick={()=>{}} />
        <DrawerItem icon={<VscHistory size={20} />} title={'Activity'} onclick={()=>{}} />
        <DrawerItem icon={<GoQuestion size={20} />} title={'Help'} onclick={()=>{}} />

        

      </Drawer>
    </div>
  )
}

export default SideDrawer