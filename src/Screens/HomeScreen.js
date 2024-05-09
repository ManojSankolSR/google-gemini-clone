import React, { useContext, useEffect, useRef, useState } from 'react'
import { BiSend } from "react-icons/bi";
import { IoIosMenu } from 'react-icons/io';
import SideDrawer from '../Components/SideDrawer';
import { AuthContext, ChatsContext } from '../Contexts/Contexts';
import UserChatComponent from '../Components/UserChatComponent';
import ModelChatComponent from '../Components/ModelChatComponent';
import { Avatar, Button, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import { auth } from '../Firebase/firebase';
import { FiLogOut } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import InitialHomeComponent from '../Components/InitialHomeComponent';
import { GrAdd } from 'react-icons/gr';












const HomeScreen = () => {
  const user = useContext(AuthContext);
  const [isDrawerOpen, openDrawer] = useState(false);
  const [Prompt, ChangePrompt] = useState('');
  const chatsProvider = useContext(ChatsContext);
  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handlePromptChange = (e) => {
    ChangePrompt(e.target.value);

  }

  const GenerateContent = async () => {
    ChangePrompt('');

    await chatsProvider.addChat(Prompt, user);




  }



  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');


  }



  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatsProvider.chats]);





  return (
    <div className='box-border flex-1 relative h-dvh  ' >
      <SideDrawer isDrawerOpen={isDrawerOpen} onDrawerClose={openDrawer} />
      <div className=' backdrop-blur-md  flex px-1  justify-between items-center h-16 bg-transparent absolute right-0 left-0 sm:px-4' >
        <div className='text-xl sm:text-2xl  md:text-2xl lg:text-2xl  flex items-center bg-transparent'>
          <div className='flex lg:hidden '>
            <IconButton onClick={() => { openDrawer(true); }}>
              <IoIosMenu size={25} />
            </IconButton>
          </div>
          &nbsp;
          Gemini
        </div>
        <div className='flex '>
          <div className='flex items-center space-x-3 lg:hidden  '>

          <IconButton onClick={ ()=>{chatsProvider.setChats([]);chatsProvider.setConversationId('') }} >
          <GrAdd  />
          </IconButton>
          <IconButton onClick={handleClick}>
            <Avatar alt="M" src={user.photoURL} />
          </IconButton>
          
            
            
          </div>
          
        </div>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }} >
          <br />
          <div className='flex flex-row px-4 items-center'  >
            <Avatar className='avatar' src={user.photoURL} />
            &nbsp;
            &nbsp;
            <div  >
              <div className='font-semibold' >
                {user.displayName}
              </div>
              <div id='useremail'>
                {user.email}
              </div>
            </div>

          </div>
          <br />
          <Divider />

          <MenuItem onClick={async () => await handleSignOut()}>

            <ListItemIcon>
              <FiLogOut />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>

          </MenuItem>

        </Menu>

      </div>

      <div className={`mx-auto my-auto max-w-[900px]   p-4 max-h-[100%] py-24  overflow-y-auto no-scrollbar`} >
        {
          chatsProvider.chats.length > 0
            ?
            <>
              {
                chatsProvider.chats.map(e => {
                  if (e.role === 'user') {
                    return (
                      <UserChatComponent Ques={e.parts[0].text} />
                    )
                  }

                  else {
                    return (

                      <ModelChatComponent Ans={e.parts[0].text} />

                    )
                  }
                })
              }
              <div ref={ref}></div>
            </>
            : <InitialHomeComponent ChangePrompt={ChangePrompt} />

        }
        {/* ${chatsProvider.chats.length > 0 ? 'max-w-[600px]' : 'max-w-[900px]'} */}
        <div className='absolute bottom-0 w-full  h-20 backdrop-blur-md'>
          <div className={`box-border absolute bottom-4   flex flex-row items-center w-[90%] max-w-[900px]  justify-between rounded-full  h-16 bg-slate-100 px-4 `}>

            <input type="text" value={Prompt} onChange={handlePromptChange} placeholder='Enter A Prompt Here' className='w-full h-full bg-transparent outline-none focus:outline-none ' />
            <IconButton onClick={GenerateContent} disabled={Prompt === '' || (chatsProvider.chats.length > 0 ? chatsProvider.chats[chatsProvider.chats.length - 1].parts[0].text === '' : false)}>
              <BiSend size={22} />

            </IconButton>



          </div>

        </div>









      </div>



    </div>



  )
}

export default HomeScreen