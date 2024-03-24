import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";


function SimolerMeal() {
    const mealDetails = useLoaderData();
    console.log(mealDetails)
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {
        mealDetails.meals ?
        mealDetails.meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>) : <h1>No Data</h1>
      }
     
    </div>
  )
}

export default SimolerMeal
