import React, { useContext } from 'react'
import { ChatsContext } from '../Contexts/Contexts';
import { ListItemComponent } from './ListItemComponent';
import { IconButton } from './IconButton';
import { BsChatLeft } from 'react-icons/bs';
import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';

const RecentConverastionComponent = () => {
    const chatContext = useContext(ChatsContext);



    return (
        <>

            <div className='h-[100%] w-full  overflow-y-auto'>
                <p className='font-semibold pl-3 pt-3 pb-1'>
                    Recent
                </p>



                {
                    chatContext.ConversationsList.length > 0
                    &&
                    chatContext.ConversationsList.map(e => {
                        return (
                            // <ListItem disableGutters sx={{padding:0,margin:0,width:'100%'}}>
                            //     <ListItemButton
                            //         autoFocus
                            //         onClick={() => { }}
                            //     >
                            //         <ListItemAvatar>
                            //             <IconButton icon={<BsChatLeft />} />

                            //         </ListItemAvatar>
                            //         <ListItemText primary={e.chats[0].parts[0].text} sx={{whiteSpace:'nowrap',padding:0,margin:0,borderRadius:8,wordBreak:'keep-all',textOverflow:'ellipsis',overflow:'clip'}} />
                            //     </ListItemButton>
                            // </ListItem>
                            <ListItemComponent isSelected={e.id === chatContext.ConversationId} component={<IconButton icon={<BsChatLeft />} />} title={e.chats[0].parts[0].text} onclick={() => { chatContext.setChats(e.chats); chatContext.setConversationId(e.id) }} />
                        )

                    })

                }


            </div>

        </>
    )
}

export default RecentConverastionComponent