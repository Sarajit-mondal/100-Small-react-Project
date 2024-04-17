import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import "animate.css";

function ImageSlider() {
  const [curentImage, setCurentImage] = useState(0);
  const images = useLoaderData();

  const handleLeftArrow = () => {
    setCurentImage(curentImage === 0 ? images.length - 1 : curentImage - 1);
  };
  const handleRightArrow = () => {
    setCurentImage(curentImage === images.length - 1 ? 0 : curentImage + 1);
  };

  console.log(images);
  return (
    <div className="flex justify-center mt-10">
      <div className="flex relative  w-[600px] h-[450px] rounded-xl overflow-hidden">
        <FaArrowLeft
          onClick={handleLeftArrow}
          className="absolute top-2/4 -translate-y-2/4 left-3 z-10 text-3xl cursor-pointer hover:text-blue-500"
        ></FaArrowLeft>
        {images && images.length
          ? images.map((item, index) => (
              <div
                key={index}
                className={curentImage == index ? `block ` : `hidden`}
              >
                <img
                  src={item.download_url}
                  alt=""
                  className="w-full h-full absolute "
                />
              </div>
            ))
          : null}
        <FaArrowRight
          onClick={handleRightArrow}
          className="absolute top-2/4 -translate-y-2/4 right-3 z-10 text-3xl cursor-pointer hover:text-blue-500"
        ></FaArrowRight>
        {/* navigation button */}
        <div className="absolute bottom-5 left-2/4 -translate-x-2/4  z-10">
          {images && images.length
            ? images.map((item, index) => (
                <button
                  onClick={() => setCurentImage(index)}
                  className={`size-4 mx-1 rounded-full bg-gray-600 ${
                    curentImage === index ? "bg-gray-300" : "bg-gray-600"
                  }`}
                  key={index}
                ></button>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
