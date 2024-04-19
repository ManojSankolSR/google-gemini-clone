import { Avatar } from '@mui/material'
import React from 'react'
import { MdOutlineAccountCircle } from 'react-icons/md'

const UserChatComponent = ({Ques}) => {
  return (
    <div className='flex flex-col items-start my-3 p-2 gap-3 sm:flex-row sm:items-center ' >
        <Avatar alt="M" src="/static/images/avatar/1.jpg" />
      
    <div className='w-full text-sm sm:text-base'>
        {
            Ques
        }
    </div>
    {/* <br />
    <br />
    <br />
    <br /> */}
    </div>
  )
}

export default UserChatComponent