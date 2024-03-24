import {
  createBrowserRouter
} from "react-router-dom";
import Home from '../components/home/Home.jsx';
import AllMeal from '../components/all meal/AllMeal.jsx';
import Details from '../components/all meal/Details.jsx';
import SimolerMeal from '../components/all meal/SimolerMeal.jsx';
import From from "../components/from/From.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
   
    
    children:[
      {
        path:'/',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element:<AllMeal></AllMeal>
      },{
        path:'/meal/:strCategory',
        loader:({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
        element: <SimolerMeal></SimolerMeal>
      },
      {
        path:'/meal1/:idMeal',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element:<Details></Details>

      },
      {
        path:'/american',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=American'),
         element: <SimolerMeal></SimolerMeal>

      },
      {
        path:'/breakfast',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast'),
         element: <SimolerMeal></SimolerMeal>

      },
      {
        path:'/item/:mealItem',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.mealItem.replace(':','')}`),
         element: <SimolerMeal></SimolerMeal>

      },
      {
        path:'/country/:countryMeals',
        loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.countryMeals}`),
         element: <SimolerMeal></SimolerMeal>

      },
      {
        path:'/signUp',
        element: <From fromType={'signUp'}></From>
      },
      {
        path:'/logIn',
        element: <From fromType={'logIn'}></From>
      }
    ]
  },
  
]);


export default router;