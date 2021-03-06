import React from "react";
import "./ProductDescription.css";

const ProductDescription = ({ product }) => {
  return (
    <div className="row" id="prodDesc">
      <div className="col m6">
        <h5>Description</h5>
        <ul>{product.description.map((des, k) => <li key={k}>{des}</li>)}</ul>
      </div>
      <div className="col m6">
        <h5>Product Code:</h5>
        <p>{product.productCode}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
