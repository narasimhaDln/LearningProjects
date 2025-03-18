// vite-project/src/components/CompareProducts.jsx
import React from 'react';

const CompareProducts = ({ comparedProducts, onRemove }) => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Compared Products</h2>
            {comparedProducts.length === 0 ? (
                <p>No products selected for comparison.</p>
            ) : (
                <div className="grid grid-cols-2 gap-4">
                    {comparedProducts.map((product, index) => (
                        <div key={index} className="border p-4">
                            <h3 className="font-bold">{product.title}</h3>
                            <p>Brand: {product.brand}</p>
                            <p>Price: ${product.price}</p>
                            <p>Discount: {product.discountPercentage}%</p>
                            <button onClick={() => onRemove(product)} className="text-red-500">Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CompareProducts;