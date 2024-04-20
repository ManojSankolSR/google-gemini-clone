import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import Sidebar from './Components/Sidebar';
import ChatsProvider from './Providers/ChatsProvider';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AuthProvider from './Auth/AuthProvider';
import { useContext } from 'react';
import { AuthContext } from './Contexts/Contexts';
import { Toaster } from 'react-hot-toast';

function App() {

  const user = useContext(AuthContext);



  const router = createBrowserRouter([

    {
      path: '/',
      element: <div className='MainDiv'><LogIn /></div>
    },
    {
      path: '/SignUp',
      element: <div className='MainDiv'><SignUp /></div>
    },])











  const Authenticatedrouter = createBrowserRouter([


    {
      path: '/',
      element: <div className='flex max-h-screen overflow-hidden'>
      <Sidebar />
      <HomeScreen />

    </div>
    },


  ])




  return (
    
      <ChatsProvider>
        <Toaster />
        <RouterProvider router={user != null ? Authenticatedrouter : router} />
        

      </ChatsProvider>


  



  );
}

export default App;
