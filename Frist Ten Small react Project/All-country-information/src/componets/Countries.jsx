import { useEffect, useState } from "react";
import Country from "./Country";
import PropTypes from 'prop-types'


const Countries = ({totalVisitedCountry}) => {
    const [country,setCountry] = useState([])

    useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountry(data))
    },[])
    return (
        <div className="w-4/5 border-2 border-red-500">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
          country.map(countryData => <Country totalVisitedCountry={totalVisitedCountry} key={countryData.cca3}  countryData={countryData}></Country>)
         }
         </div>
         
        </div>
    );
};

Countries.propTypes ={
totalVisitedCountry : PropTypes.func
}

export default Countries;