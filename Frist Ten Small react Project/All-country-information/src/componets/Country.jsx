

import PropTypes from 'prop-types';
import { useState } from 'react';
const Country = ({countryData,totalVisitedCountry}) => {
    const {name:{common},continents,capital,flags:{png},area} = countryData;
    
    const [visited,setVisited] = useState(false)
    const [mark,setMark] = useState(false)

    const handlevisited = () =>{
      setVisited(!visited)
      totalVisitedCountry(countryData)
    }
    const handleMark = () =>{
      setMark(!mark)
    }

    return (
     <div className={`card w-auto bg-base-100 shadow-xl p-3 mt-4 ${mark && 'bg-blue-200'}`}>
  <figure><img src={png} alt="Flag" className='w-full h-auto ' /></figure>
  <div className="card-body">
    <h2>{common}</h2>
            <p>{capital}</p>
            <small>{continents}</small>
            <p>{area}</p>
    <div className="card-actions justify-between">
      <div onClick = {()=>{handlevisited();}} className=
      {`badge badge-outline cursor-pointer ${visited && 'bg-green-400'}`} >{visited ? "visited" : "Going"}</div> 
      <div onClick={handleMark} className={`badge badge-outline cursor-pointer`}>{mark ?'Marked' : 'Mark'}</div>
    </div>
  </div>
</div>
    );
};

Country.propTypes = {
 countryData : PropTypes.object,
 totalVisitedCountry : PropTypes.func

}
export default Country;