import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"
import { useEffect, useState } from "react";

const AvailableMeals = () => {
const [meals, setMeals]=useState([])
const [isLoading, setIsLoading]=useState(false)

 useEffect(()=>{
 const fetchMeals= async()=>{
  setIsLoading(true)
 const response = await fetch('https://react-httpps-default-rtdb.firebaseio.com//meals.json');
 const responseData= await response.json();
 

 const loadedMeals=[];

for(const key in responseData){

loadedMeals.push({

id:key, 
name:responseData[key].name,
description:responseData[key].description,
price:responseData[key].price,

});
}
setMeals(loadedMeals)
setIsLoading(false)
 }
fetchMeals();

 },[]);


if(isLoading){

  return <p>Loading</p>
}



  const MealsList = meals.map((meals) => <MealItem key={meals.id} id={meals.id} name={meals.name} description={meals.description} price={meals.price} />);
  return (
  
  
  <section className={classes.meals}>
      <ul>
        <Card>{MealsList}</Card>
      </ul>
    </section>
  )
}
export default AvailableMeals;