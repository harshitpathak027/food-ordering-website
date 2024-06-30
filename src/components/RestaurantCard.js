import { useContext } from "react"
import { IMG_CDN_URL } from "../constant"
import UserContext from "../utils/userContext"



export const ResturantCard = ({name,cuisines,avgRating,cloudinaryImageId})=>{
  const {user } = useContext(UserContext);
    return (
      
      <div className="w-64  p-2 m-2 shadow-lg bg-pink-200 hover:scale-105 hover:shadow-slate-700 ">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="imagess" />
        <h2>{name}</h2>
        

        <h6 className=" flex flex-wrap text-xs text-wrap" >{cuisines}</h6>
        
        <h4>{avgRating}</h4>
        <h4> {user.name} </h4>
      </div>
    )
  }