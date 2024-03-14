
import './App.css'
import Cart from './componets/Cart'

import NavBar from './componets/NavBar'
import Countries from './componets/Countries'
import { useState } from 'react'



function App() {
const [visitedCountry,setVisiteCountry] = useState([])

  const totalVisitedCountry = (countryData) =>{
    const wasAdded =  visitedCountry.filter(visite => visite.area == countryData.area)
    if(wasAdded.length === 0){
   const visited = [countryData,...visitedCountry];
    setVisiteCountry(visited)
    }else{
      alert("That is allready added")
    }
    
  }

  return (
    <>
     <header>
       <NavBar></NavBar>
     </header>

     <main className='flex flex-col md:flex-row gap-5'>
      <Countries totalVisitedCountry={totalVisitedCountry}></Countries>
      <Cart visitedCountry={visitedCountry}></Cart>
     </main>
    </>
  )
}

export default App
