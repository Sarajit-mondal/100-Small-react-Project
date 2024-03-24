import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"



function Header() {

  const [countries,setCountries] = useState([])
  const [allMeals,setAllMeals] = useState([])
 const [theme,setTheme] = useState('light')

 

  useEffect(()=>{
     
     localStorage.setItem('theme',theme)
     const localTheme =  localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
    localTheme === 'synthwave' && document.querySelector('input').checked;
  },[theme])
  const handleDrakTheme =(e)=>{
      if(e.target.checked){
        setTheme('synthwave')
      }else{
        setTheme('light')
      }
  }





  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    .then(res => res.json())
    .then(data => setCountries(data.meals))

    // all meals items
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then(res => res.json())
    .then(data => setAllMeals(data.meals) )
  },[])

  

  const list = <>
  <li> <NavLink to={'/'}>Home</NavLink></li>
  <li> <NavLink to={'/american'}>American</NavLink></li>
  <li> <NavLink to={'/breakfast'}>BreakFast</NavLink></li>

      <li>
        <details>
          <summary>Countries Meal</summary>
          <ul className="p-2 bg-gray-300" >
            {
              countries.map((country,inx) =>{
                const countryMeals = country.strArea;
                return(
                  <li key={inx}><Link to={`/country/${countryMeals}`}>{country.strArea}</Link></li>
                )
              })
            }
          
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Meals Item</summary>
          <ul className="p-2 bg-gray-300" >
             {
              allMeals.map((meal,inx) => {
                const mealItem = meal.strCategory;
  
                return(
                   <li key={inx}><Link to={`/item/:${mealItem}`}>{meal.strCategory}</Link></li>
                )
                
              })}
          </ul>
        </details>
      </li>
      <li> <NavLink to={'/logIn'}>Log In</NavLink></li>
      <li> <NavLink to={'/signUp'}>Sign Up</NavLink></li>
      
  </>

  return (
    <nav>
      <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        list
       } 
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">React Router</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-5">
       {
        list
       }
    </ul>
  </div>
  <div className="navbar-end">
   <label className="cursor-pointer grid place-items-center">
  <input onClick={handleDrakTheme} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

  
  </div>
</div>
    </nav>
  )
}

export default Header