import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
import UserContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';




function App() {

  const [user ,setuser] = useState({
    name:"Admin",
    email:"admin@gmail.com",
  });

  return (
    <Provider store = {store}>
    <UserContext.Provider value = {{
      user:user,
      setUser:setuser,
    }}> 
    <Header/>
    
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
    </Provider>
  );
}


export default App;
