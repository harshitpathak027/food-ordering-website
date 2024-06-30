import { useEffect, useState } from 'react'

const useRestaurant = (id) => {
    const [restaurant,setrestaurant] = useState(null);


    useEffect(()=>{
      getRestaurant();
       // eslint-disable-next-line
    },[]);
    async function getRestaurant(){
      

        const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id );
        const temp = await data.json();
        const da =temp?.data?.cards[0].card.card.info
        setrestaurant(da)
        console.log(temp?.data?.cards[2].groupedCard)
  
    }
    return restaurant
}

export default useRestaurant