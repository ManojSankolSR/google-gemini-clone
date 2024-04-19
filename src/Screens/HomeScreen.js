import React, { useContext, useEffect, useRef, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiSend } from "react-icons/bi";
import { GoLightBulb } from "react-icons/go";
import { MdDraw } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { IoIosMenu } from 'react-icons/io';
import Drawer from '@mui/material/Drawer';
import SideDrawer from '../Components/SideDrawer';
import { ChatContext, ChatsContext } from '../Contexts/Contexts';
import UserChatComponent from '../Components/UserChatComponent';
import ModelChatComponent from '../Components/ModelChatComponent';
import { IconButton } from '@mui/material'






const items = [
  {
    title: 'Find flights and weather for an upcoming trip'
  },
  {
    title: 'Help me compare these college majors'
  },
  {
    title: 'Give me ways to add certain foods to my diet'
  },
  {
    title: 'Ideas to surprise a friend on their birthday'
  },
]


const Card = ({ title, icon, onclick }) => {
  return (
    <div onClick={onclick} className='p-3 flex flex-col justify-between h-52  rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-blue-100' >
      <p className='text-lg' >{title}</p>
      <div className='self-end rounded-full bg-white p-2'>
        {
          icon
        }
      </div>
    </div>

  )
}


const HomeScreen = () => {
  const [isDrawerOpen, openDrawer] = useState(false);
  const [Prompt, ChangePrompt] = useState('');
  const chatsProvider = useContext(ChatsContext);
  const ref = useRef(null);


  const handlePromptChange = (e) => {
    ChangePrompt(e.target.value);

  }

  const GenerateContent = async () => {
    ChangePrompt('');

    await chatsProvider.addChat(Prompt);



  }

  const handleCardTap = (text) => {
    ChangePrompt(text);
  }

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatsProvider.chats]);





  return (
    <div className='box-border flex-1 relative h-screen  ' >
      <SideDrawer isDrawerOpen={isDrawerOpen} onDrawerClose={openDrawer} />
      <div className=' backdrop-blur-md flex px-1 justify-between items-center h-16 bg-transparent absolute right-0 left-0 sm:px-4' >
        <div className='text-xl sm:text-2xl md:text-2xl lg:text-2xl  flex items-center bg-transparent'>
          <div className='flex lg:hidden '>
            <IconButton onClick={() => {
              openDrawer(true);
            }}>
              <IoIosMenu size={25} />

            </IconButton>


          </div>

          &nbsp;
          Gemini
        </div>
        <MdOutlineAccountCircle style={{
          fontSize: 30
        }} />

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
            :
            <>
              <span className='text-3xl  font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text  xl:text-5xl font-sans sm:text-3xl md:text-4xl lg:text-5xl'  >Hello, Maonj</span>
              <p className='text-3xl xl:text-5xl font-bold text-gray-300 sm:text-3xl md:text-4xl lg:text-5xl' >How can I Help you Today ?</p>
              <br />
              <br />
              <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-4 justify-center'  >
                <Card icon={<GoLightBulb size={28} />} title={items[0].title} onclick={() => (handleCardTap(items[0].title))} />
                <Card icon={<MdDraw size={28} />} title={items[1].title} onclick={() => (handleCardTap(items[1].title))} />
                <Card icon={<MdOutlineExplore size={28} />} title={items[2].title} onclick={() => (handleCardTap(items[2].title))} />
                <Card icon={<MdOutlineExplore size={28} />} title={items[3].title} onclick={() => (handleCardTap(items[3].title))} />
              </div>

            </>
        }
        {/* ${chatsProvider.chats.length > 0 ? 'max-w-[600px]' : 'max-w-[900px]'} */}
        <div className='absolute bottom-0 w-full  h-20 backdrop-blur-md'>
          <div className={`box-border absolute bottom-4   flex flex-row items-center w-[90%] max-w-[900px]  justify-between rounded-full  h-16 bg-slate-100 px-4 `}>

            <input type="text" value={Prompt} onChange={handlePromptChange} placeholder='Enter A Prompt Here' className='w-full h-full bg-transparent outline-none focus:outline-none ' />
            <IconButton onClick={GenerateContent} disabled={Prompt==='' }>
              <BiSend size={22} />

            </IconButton>



          </div>

        </div>









      </div>



    </div>



  )
}

export default HomeScreen