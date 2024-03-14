import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types'
const Cart = ({visitedCountry}) => {
   
  console.log(visitedCountry)

    return (
        <div className="bg-blue-200 rounded-xl w-1/4 h-auto p-3">
           <h2 className="text-2xl font-bold  text-center bg-blue-300 rounded-lg py-2">Visited Country 5</h2> 
           <ul className={`bg-white rounded-lg mt-5  ${visitedCountry.length > 0 && 'p-1' }`}>
             {
                visitedCountry.map(visited => <a href={`https://en.wikipedia.org/wiki/${visited.name.common}`} target="--blank" key={visited.cca2}> <li className="flex items-center mb-2 cursor-pointer justify-between px-2 bg-blue-100 rounded-lg">
                <p className="w-28 text-nowrap">{visited.name.common.slice(0,16)}</p>
                <figure>
                    <img src={visited.flags.png} alt="" className="w-10 h-10 py-2"/>
                </figure>
                <span><MdDelete className="text-red-500 text-xl cursor-pointer active:scale-105"></MdDelete></span>
             </li></a>)
             }
           </ul>
        </div>
    );
};

Cart.propTypes = {
    visitedCountry : PropTypes.array
}

export default Cart;