import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import Sidebar from './Components/Sidebar';
import ChatsProvider from './Providers/ChatsProvider';

function App() {
  return (
    <ChatsProvider>
      <div className='flex max-h-screen overflow-hidden'>
        <Sidebar />
        <HomeScreen />

      </div>

    </ChatsProvider>


  );
}

export default App;
