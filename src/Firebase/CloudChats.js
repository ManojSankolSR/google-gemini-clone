import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { auth, firestore } from "./firebase"
import { v4 as Uuidv4 } from "uuid";

export class CloudConversations {
    
    static GetChats = async (setConversationsCollection,user) => {
        const ConversationsCollection = await getDocs(collection(firestore, 'Users', user.uid, 'ConversationsCollection'));
        
        const Conversations = Array.from(ConversationsCollection.docs.map(e => {
           
            return e.data();

        }));
        setConversationsCollection(Conversations);


    }

    static AddNewConversation= async (Chats,setConversationId, ChangeConversationsList)=>{
        const ConversationId=Uuidv4();
        await setDoc(doc(firestore, 'Users', auth.currentUser.uid, 'ConversationsCollection',ConversationId),{id:ConversationId,chats:[...Chats]});
        
        setConversationId(ConversationId);
        
        ChangeConversationsList((ConversationsList)=>{
            const ll=[{id:ConversationId,chats:[...Chats]},...ConversationsList];
            
            return ll;
        });


    }


    static AddChat = async (ConversationId,Chats,user) => {
        await setDoc(doc(firestore, 'Users', user.uid, 'ConversationsCollection',ConversationId),{id:ConversationId,chats:[...Chats]});
       


    }
}