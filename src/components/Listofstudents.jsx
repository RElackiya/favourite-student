import { useContext, useState } from "react";
import { Arrcontext } from "./Context";

const Listofstudents = () => {
  const { ArrActivity, favourite, setFavourite } = useContext(Arrcontext);
  const [clickedItems, setClickedItems] = useState([]);

  // Function to add an item to the favorites list
  const addFav = (item) => {
    if (!favourite.includes(item)) {
      setFavourite([...favourite, item]);
      setClickedItems([...clickedItems, item]);
    }
  };

  return (
    <div className="pl-10 mt-5 flex flex-col gap-4">
      {ArrActivity.map((item, index) => (
        <div key={index} className="flex items-center justify-between w-full max-w-md bg-white p-4 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h1 className="text-lg font-semibold text-gray-800">{index + 1}. {item}</h1>
          <button
            className={`bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition ${clickedItems.includes(item) ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => addFav(item)}
            disabled={clickedItems.includes(item)}
          >
            Add to Favourite
          </button>
        </div>
      ))}
    </div>
  );
};

export default Listofstudents;
