import React from 'react'
import { GoLightBulb } from 'react-icons/go'
import { MdDraw, MdOutlineExplore } from 'react-icons/md'
import { auth } from '../Firebase/firebase'


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

const InitialHomeComponent = ({ChangePrompt}) => {
    const handleCardTap = (text) => {
        ChangePrompt(text);
      }
  return (
    <>
              <span className='text-3xl  font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text  xl:text-5xl font-sans sm:text-3xl md:text-4xl lg:text-5xl'  >Hello, {auth.currentUser.displayName}</span>
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
  )
}

export default InitialHomeComponent