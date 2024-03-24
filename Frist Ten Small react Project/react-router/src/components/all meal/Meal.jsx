import { Link } from "react-router-dom";


function Meal({meal}) {
  const {idCategory,strCategory,strCategoryDescription,strCategoryThumb}=meal;
  const {idMeal,strMeal,strMealThumb} = meal;
  return (
    <div className="card  bg-yellow-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={strCategoryThumb || strMealThumb} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{strCategory || strMeal}</h2>
    <Link to={`${meal.idMeal ? '/meal1/':'/meal/'}${strCategory || idMeal}`}>{idCategory ?"See More":"See details"}</Link>
  </div>
</div>
  )
}

export default Meal
