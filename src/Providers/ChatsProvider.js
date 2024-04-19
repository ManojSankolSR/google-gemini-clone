import React, { useEffect, useState } from 'react'
import { ChatsContext } from '../Contexts/Contexts';
import { GoogleGenerativeAI, } from '@google/generative-ai';

const genAi = new GoogleGenerativeAI('AIzaSyC_u5hQojjhykG8Y_i42JyXJtv8deLBKoY');
const model = genAi.getGenerativeModel({ model: 'gemini-pro' });

const ChatsProvider = ({ children }) => {
    const [chats, updateChats] = useState([]);


    useEffect(() => {
        console.log(chats);
    }, [chats])


    const addChat = async (Prompt) => {

        updateChats((Updatedchats) => [...Updatedchats, { role: 'user', parts: [{ text: Prompt }] }]);

        updateChats((Updatedchats) => [...Updatedchats, { role: 'model', parts: [{ text: '' }] }]);



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
            console.log(chunkText);
            text += chunkText;
            updateChats((Updatedchats) => {
                const newChats = Updatedchats;
                newChats.pop();
                newChats.push({ role: 'model', parts: [{ text: text}] });
                return [...newChats];
    
            });
        }
        // result.response.text()

        

        console.log(chats);

    }


    return (
        <ChatsContext.Provider value={{ chats, addChat }}>
            {
                children
            }

        </ChatsContext.Provider>

    )
}

export default ChatsProvider