import React from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constant';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem, removeItems } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
  //  const [restaurant,setrestaurant] = useState(null)
    const restaurant = useRestaurant(id);

    const dispatch = useDispatch();
   const addFoodItems=(item)=>{
    dispatch(addItem(item));
   }

  return (!restaurant)?<Shimmer/>:(
    <>
     <div className='flex'>
    <div>

    <h1>Restaurant Menu</h1>
    <p>Restaurant Id:{id}</p>
    <p> {restaurant?.name} </p>
    <p> {restaurant?.areaName} </p>
  
    <p> {restaurant?.avgRating} </p>
<img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} key={restaurant?.id}  alt="" />
    </div>
  
    <div>

   
    <h1>cuisines</h1>
    {(restaurant?.cuisines)?.map((item)=>{
      return <li>{item} <button className='p-1 bg-green-300 rounded-lg' onClick={()=>addFoodItems(restaurant)}>add</button> </li>
    })}
    </div>
   
   </div>
    </>
    
  )
}

export default RestaurantMenu