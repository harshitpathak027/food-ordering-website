export const filterData=(searchtext,filterResturant)=>{
    const filterData= filterResturant.filter((restaurant)=>{
      
        return restaurant.info.name?.toLowerCase().includes(searchtext)
    })
    
    return filterData 

}
