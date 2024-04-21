import React, { useContext } from 'react'
import { ChatsContext } from '../Contexts/Contexts';
import { ListItemComponent } from './ListItemComponent';
import { IconButton } from './IconButton';
import { BsChatLeft } from 'react-icons/bs';

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
                            <ListItemComponent isSelected={e.id === chatContext.ConversationId} component={<IconButton icon={<BsChatLeft />} />} title={e.chats[0].parts[0].text} onclick={() => { chatContext.setChats(e.chats); chatContext.setConversationId(e.id) }} />
                        )

                    })

                }


            </div>

        </>
    )
}

export default RecentConverastionComponent