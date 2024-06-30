import { useContext, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";




const HeaderComponent = ()=>{
  const [isLoggedIn,setisLoggedIn] = useState(true);
  const isOnline = useOnline();
  const cartItems = useSelector(store=>store.cart.items)
  console.log(cartItems)
  const {user} = useContext(UserContext);
    return(
      <>
      <div className="flex py-4 px-4 justify-between bg-gray-200 shadow-lg w-" >
        <div className="title">
  
      <Title/>
        </div>
      <div className='flex '>
        
        <ul className="flex gap-16 ">
          <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/contact">
          <li>contact</li>
          </Link>
          <Link to="/about">
          <li>About</li>
          </Link>
          <Link to="/cart">
          <li>Cart{cartItems.length} </li>
          </Link>
          <Link to="/instamart">
          <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "🟢":"🔴"} {user.name} </h1>
      
      {isLoggedIn? <button onClick={()=>setisLoggedIn(!isLoggedIn)}>Logout  </button> :<button onClick={()=>setisLoggedIn(!isLoggedIn)}>Login</button>}
      </div>
      </>
    )
  }
  export default HeaderComponent;