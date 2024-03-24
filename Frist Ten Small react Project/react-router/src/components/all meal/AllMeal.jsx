
import { useLoaderData } from "react-router-dom"
import Meal from "./Meal"


function AllMeal() {
  
 const meals = useLoaderData()
 console.log(meals)
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     {
     meals.categories.length > 0 && meals.categories.map(meal => <Meal key={meal.idCategory} meal={meal}></Meal>)
     }
    
    </div>
  )
}

export default AllMeal