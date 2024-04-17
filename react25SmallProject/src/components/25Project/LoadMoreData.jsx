import { useEffect, useState } from "react";

function LoadMoreData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        skip === 0 ? 0 : 20 * skip
      }`
    )
      .then((product) => product.json())
      .then((result) => {
        console.log(result.products);
        console.log(data);
        if (result.products) {
          setData((preveData) => [...preveData, ...result.products]);
        }
      });
  }, [skip]);

  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 m-5 gap-5 ">
        {data &&
          data.map((product) => (
            <div
              className="text-center p-5 cursor-pointer bg-pink-200 border-2 border-pink-500"
              key={product.id}
            >
              <img src={product.images[0]} alt="" className="h-60 mx-auto" />
              <h2 className="text-xl mt-2 font-bold ">{product.title}</h2>
            </div>
          ))}
      </div>
      <button
        onClick={() => setSkip(skip + 1)}
        className="mx-auto block p-5 border-2 rounded-xl mb-10 active:scale-95"
      >
        Load more Data
      </button>
      <p>{data.length}</p>
    </div>
  );
}

export default LoadMoreData;
