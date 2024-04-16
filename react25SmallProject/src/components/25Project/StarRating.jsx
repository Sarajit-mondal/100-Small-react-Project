import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ willStar = 10 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleOnMouseMove = (index) => {
    setHover(index);
  };
  const handleOnMouseLeave = (index) => {
    setHover(rating);
  };
  return (
    <div className="flex justify-center mt-20">
      <div className="flex gap-1 mx-auto">
        {[...Array(willStar)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              size={40}
              className={
                index <= (hover || rating) ? `text-yellow-500` : `text-black`
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleOnMouseMove(index)}
              onMouseLeave={() => handleOnMouseLeave(index)}
            ></FaStar>
          );
        })}
      </div>
    </div>
  );
}

export default StarRating;
