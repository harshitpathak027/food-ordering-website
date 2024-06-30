import { useContext, useEffect, useState } from "react";

import { ResturantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";



const Body = () => {

  const {user,setUser} = useContext(UserContext)
  const [searchtext, setsearchtext] = useState()
  const [allrestaurant, setallrestaurant] = useState([])
  const [filterResturant, setFilterResturant] = useState(allrestaurant)

  useEffect(() => {
    getResturant()
  }, [])

  async function getResturant() {
    const response = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await response.json();
    async function checkJsonData() {
      let checkData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (checkData !== undefined) {
        return checkData;
      }

    }



    const resData = await checkJsonData(json);

    // update the state variable restaurants with Swiggy API data
    setallrestaurant(resData);
    console.log(resData)
    setFilterResturant(resData);


  }
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴offline please check your internet connectivity</h1>
  }

  return (allrestaurant?.length === 0) ? <Shimmer /> : (
    <>


      <div className=" flex justify-end items-center gap-72  " >
        <h1 className="  text-purple-800 text-xl" >Welcome to the Food ordering </h1>
        <div className="">
          <input type="text" className="search p-1  rounded-full focus:bg-green-300" placeholder="search" value={searchtext} onChange={(e) => { setsearchtext(e.target.value) }} />
          <button className="p-2 m-2 bg-purple-600 hover:bg-purple-800 text-white rounded-md" onClick={() => {

            const data = filterData(searchtext, allrestaurant)
            setFilterResturant(data)

          }}>Search  </button>
          <input value ={user.name} onChange={e=>setUser({
            name:e.target.value
          })}></input>

        </div>
      </div>
      <div className="flex flex-wrap">
        {
          filterResturant?.map((restaurant, index) => {
            return <Link to={"/restaurant/" + restaurant?.info?.id} key={index++}  > <ResturantCard {...restaurant?.info} /></Link>
          })
        }
      </div>
      BOdy

    </>
  );
}



export default Body;