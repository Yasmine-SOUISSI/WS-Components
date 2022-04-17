import React from "react";
import { productData } from "../Data";
function ProductCard() {
    console.log("Products", productData);
    return (
        <div>
            {productData.map((product) => (
                <div className="card">
                    <div className="card-image">
                        <img src={product.image} alt="img" />
                    </div>
                    <div className="card-content">
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;
