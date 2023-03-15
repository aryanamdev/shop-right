import "./TrendingSlider.css";
import TrendingItem from "./TrendingItem";

function TrendingSlider() {
  return (
    <div className="w-full flex px-8 overflow-x-scroll">
      <div className="flex overflow-x-scoll gap-4" id="slider">
        <TrendingItem />
      </div>
    </div>
  );
}

export default TrendingSlider;
