import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom"


function Details() {
  const [ingredient,setIngredient] = useState([1,2,3,4,5])
  const details = useLoaderData()
 const  meals = details.meals;
  const {strArea,strCategory,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strInstructions,strMeal,strMealThumb,strYoutube}=meals[0];

  const back = useNavigate()
  
  const handleBack =()=>{
    back(-1)
  }
  
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">This is Your meal details</h1>
      <h2 className="text-white">{strArea}</h2>
      <h3>{strCategory}</h3>
        <img src={strMealThumb} alt="" className="w-96 h-72 mx-auto"/>
        <p>{strIngredient1}</p>
        <p>{strIngredient2}</p>
        <p>{strIngredient3}</p>
        <p>{strIngredient4}</p>
        <p>{strIngredient5}</p>
        <div>
          <Link to={'/'} className="mr-10">Home</Link>
          <Link><button onClick={handleBack}>Back</button></Link> 
        </div>


    </div>
  )
}

export default Details
