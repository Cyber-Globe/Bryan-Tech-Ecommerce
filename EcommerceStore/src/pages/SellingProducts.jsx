import React from "react";
import new_sales from "../components/assets/new_collections";
import "./CSS/Product.css";

export default function SellingProduct() {
  return (
    <section className="new-salling-product">
      <div className="selling_product">
        {new_sales.map((item) => (
          <div key={item.id} className="bestSales">
            <img src={item.image} alt={item.name} />
            <div className="new_card-Product">
              <p>{item.name}</p>
              <p>{item.new_price}</p>
              <p>{item.old_price}</p>
            </div>
          </div>
        ))}
        {/* New flex item placeholder */}
        <div className="flex-placeholder">New Flex Item</div>
      </div>
    </section>
  );
}
