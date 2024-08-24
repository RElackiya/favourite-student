import { useContext } from "react";
import { Arrcontext } from "./Context";

const Favstudents = () => {
  const { favourite, setFavourite } = useContext(Arrcontext); // Correct casing

  const removeFav = (item) => {
    setFavourite(favourite.filter((fav) => fav !== item));
  };

  return (
    <div className="pl-10 mt-5 flex flex-col gap-3">
      {favourite.length > 0 ? (
        favourite.map((item, index) => (
          <div key={index} className="flex items-center justify-between w-full max-w-md bg-white p-4 border border-gray-300 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-gray-800">{index + 1}. {item}</h1>
            <button
              onClick={() => removeFav(item)}
              className="ml-10 bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No favourite students added yet.</p>
      )}
    </div>
  );
};

export default Favstudents;
