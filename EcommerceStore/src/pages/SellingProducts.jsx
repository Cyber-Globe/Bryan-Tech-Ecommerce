import new_sales from "../components/assets/new_collections";
import "./CSS/Product.css";

export default function SellingProduct() {
  return (
    <section className="new-salling-product">
      <div className="products-cat">
        <h3>Browse New Products</h3>
        <button className="btn-product">View All</button>
      </div>
      <div className="selling_product">
        {new_sales.map((item) => (
          <div key={item.id} className="bestSales">
            <div className="product-img">
              <img
                src={item.image}
                alt={item.name}
                className="new_product_img"
              />
            </div>
            <div className="new_card-Product">
              <h4>{item.name}</h4>
              <p>
                {item.new_price}{" "}
                <span className="oldPrice">{item.old_price}</span>
              </p>
              <p>
                ⭐⭐⭐⭐⭐ <span> (65)</span>
              </p>
            </div>
          </div>
        ))}
        {/* New flex item placeholder */}
      </div>
    </section>
  );
}
