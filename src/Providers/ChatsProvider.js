import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, ChatsContext, ConversationsContext } from '../Contexts/Contexts';
import { GoogleGenerativeAI, } from '@google/generative-ai';
import { CloudConversations } from '../Firebase/CloudChats';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase';



const genAi = new GoogleGenerativeAI('AIzaSyC_u5hQojjhykG8Y_i42JyXJtv8deLBKoY');
const model = genAi.getGenerativeModel({ model: 'gemini-pro' });

const ChatsProvider = ({ children }) => {
    const [chats, setChats] = useState([]);
    const user=useContext(AuthContext)
    const [ConversationsList, ChangeConversationsList] = useState([]);
    const [ConversationId, setConversationId] = useState([]);


    useEffect(() => {

        onAuthStateChanged(auth,(user)=>{
            if(user){
                CloudConversations.GetChats(ChangeConversationsList,user);

            }
            
        

        });

        

        

        
    }, [])


    const addChat = async (Prompt) => {

        setChats((Updatedchats) => [...Updatedchats, { role: 'user', parts: [{ text: Prompt }] }]);

        setChats((Updatedchats) => [...Updatedchats, { role: 'model', parts: [{ text: '' }] }]);



        const chat = model.startChat({
            history: Array.from(chats.map(e => {
                return {
                    role: e.role,
                    parts: [{ text: e.parts[0].text }]
                }
            })),
            generationConfig: {
                maxOutputTokens: 500,
            },
        }


        )
        const result = await chat.sendMessageStream(Prompt);
        let text = '';
        
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
          
            text += chunkText;
            setChats((Updatedchats) => {
                const newChats = Updatedchats;
                newChats.pop();
                newChats.push({ role: 'model', parts: [{ text: text}] });
                return [...newChats];
    
            });


        }


      
        // result.response.text()
        setChats((Updatedchats)=>{
            
            if(Updatedchats.length-2 > 0){
                CloudConversations.AddChat(ConversationId,Updatedchats,user);

            }else{
                CloudConversations.AddNewConversation(Updatedchats,setConversationId, ChangeConversationsList);
            }
            
           
            return [...Updatedchats];

        })

        
        

        


        
        

      

        

        

    }


    return (
  
        <ChatsContext.Provider value={{ chats, addChat,ConversationsList,setChats,ConversationId,setConversationId}}>
            {
                children
            }

        </ChatsContext.Provider>

    )
}

export default ChatsProvider