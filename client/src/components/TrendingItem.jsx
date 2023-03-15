import "./TrendingSlider.css";
import { items } from "./AllData";
import { useNavigate } from "react-router-dom";

function TrendingItem() {
  const navigate = useNavigate();

  const filteredItems = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItems.map((item) => (
        <div
          onClick={() => {
            navigate(`/products/${item.id}`);
            window.scroll(0, 0);
          }}
          key={item.id}
          className="flex flex-col h-96 w-72 border-gray-300 hover:border-black border-2 cursor-pointer"
        >
          {/* <Link onClick={() => window.top(0, 0)} to={`products/${item.id}`}> */}
          <div className="item-header">
            <img src={item.img} className="object-cover" alt="product" />
          </div>
          <div className="item-description p-2">
            <p className="text-xl">{item.description}</p>
            <p className="item-price text-2xl font-semibold font-mono">
              {item.price}$
            </p>
          </div>
          {/* </Link> */}
        </div>
      ))}
    </>
  );
}

export default TrendingItem;
