import "./TrendingSlider.css";
import TrendingItem from "./TrendingItem";

function TrendingSlider() {
  // function for sliding left
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  // function for sliding right
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="px-8 mt-2 mb-12">
      <div className="flex justify-between mb-6 items-center">
        <h3 className="text-2xl font-medium">Trending Items</h3>
        <div className="flex gap-2">
          <button
            onClick={slideLeft}
            className="p-2 bg-teal-600 text-white hover:bg-teal-800 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
          <button
            onClick={slideRight}
            className="p-2 bg-teal-600 text-white  hover:bg-teal-800 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="slider" className=" flex overflow-x-scroll">
        <div className="flex overflow-x-scoll gap-2">
          <TrendingItem />
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
