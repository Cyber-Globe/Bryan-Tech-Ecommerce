import { useParams } from "react-router-dom";
import all_product from "../components/assets/all_product";

function ShopCategory() {
  const { category } = useParams();

  // filter products by category
  const filteredProducts = all_product.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>{category} Products</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found in {category}.</p>
        )}
      </div>
    </div>
  );
}

export default ShopCategory;
