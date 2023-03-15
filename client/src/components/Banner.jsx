import { Link } from "react-router-dom";

function Banner({ title, text }) {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-container">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src="..img/banner/banner1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
