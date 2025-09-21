import mainproduct from "../components/assets/new_selling_product";
import LeftArrow from "../components/assets/LeftArrow.png";
import RightArrow from "../components/assets/RightArrow.png";

export default function AppProducts() {
  return (
    <section className="flash-sales productList">
      <div className="category-header">
        <h3>Browse Our Category</h3>
        <div className="arrow">
          <span>
            <img src={LeftArrow} alt="left-arrow-sign" />
          </span>
          <span>
            <img src={RightArrow} alt="right-arrow-sign" />
          </span>
        </div>
      </div>
      <div className="flash-grid">
        {mainproduct.map((item) => (
          <div key={item.id} className="flash-card">
            <img src={item.image} alt={item.name} className="flash-img" />
            <button className="flash-btn">Add to Cart</button>
            <p className="flash-name">{item.name}</p>
            <p>
              <span className="new-price">${item.new_price} </span>
              <span>
                ⭐⭐⭐⭐⭐<span className="percentage">{item.percentage}%</span>
              </span>
            </p>
          </div>
        ))}
      </div>
      <button className="product-btn">View All Products</button>
    </section>
  );
}
