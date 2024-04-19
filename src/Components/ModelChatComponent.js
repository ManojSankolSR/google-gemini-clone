import React from 'react'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { IoShareSocialOutline } from "react-icons/io5";
import { Avatar, IconButton } from '@mui/material'
import { MdContentCopy } from "react-icons/md";
import { Skeleton } from '@mui/material';
import { RxSpeakerLoud } from "react-icons/rx";
import { CiPause1 } from "react-icons/ci";

const ModelChatComponent = ({ Ans }) => {

    const handleOnCopy = async () => {
        await navigator.clipboard.writeText(Ans);


    }

    const handleOnShare = async () => {
        await navigator.share({ text: Ans });
    }

    const handleOnSpeech=()=>{

        
        
        if(window.speechSynthesis.speaking){
            window.speechSynthesis.pause();
            console.log('paused');
        }
        else if(window.speechSynthesis.paused){
            window.speechSynthesis.resume();
            console.log('resumed');
        }
        else{
            const value=new SpeechSynthesisUtterance(Ans);
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(value);
            console.log('new');

        }
        
    }


    return (

        <div className='flex flex-col items-start my-3 p-2 gap-3 sm:flex-row' >
            <Avatar alt="M" src="/static/images/avatar/1.jpg" />


            <div className='p-6 bg-slate-100 rounded-xl text-sm w-full sm:text-base'>

                {
                    Ans === ''
                        ? <div className='space-y-1'>
                            <Skeleton className='rounded-md' variant='rectangular' height={20} width={'100%'} />
                            <Skeleton className='rounded-md' variant='rectangular' height={20} width={'70%'} />
                            <Skeleton className='rounded-md' variant='rectangular' height={20} width={'40%'} />
                        </div>
                        : Ans
                }
                <br />
                <div className='flex flex-row gap-x-2 justify-end'>
                    <IconButton onClick={handleOnCopy} >
                        <MdContentCopy />
                    </IconButton>
                    <IconButton onClick={handleOnShare}  >
                        <IoShareSocialOutline />
                    </IconButton>
                    <div className=' flex sm:hidden'>
                        <IconButton onClick={handleOnSpeech} >
                            <RxSpeakerLoud size={25} />
                        </IconButton>

                    </div>




                </div>

            </div>
            <div className=' hidden sm:flex'>
                <IconButton onClick={handleOnSpeech} >
                    {
                        window.speechSynthesis.speaking ? <CiPause1 /> : <RxSpeakerLoud size={25} />
                    }
                    
                </IconButton>

            </div>

        </div>
    )
}

export default ModelChatComponent