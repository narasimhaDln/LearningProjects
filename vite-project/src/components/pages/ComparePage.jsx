import React from 'react';
import CompareProducts from '../CompareProducts';

const ComparePage = ({ comparedProducts, onRemove }) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Compare Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {comparedProducts.length === 0 ? (
                    <p>No products selected for comparison.</p>
                ) : (
                    comparedProducts.map((product, index) => (
                        <div key={index} className="border rounded-lg shadow-lg p-4 bg-white">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover rounded-md mb-2" />
                            <h3 className="font-bold text-lg">{product.title}</h3>
                            <p className="text-gray-600">Brand: {product.brand}</p>
                            <p className="text-gray-600">Price: ${product.price}</p>
                            <p className="text-gray-600">Discount: {product.discountPercentage}%</p>
                            <button onClick={() => onRemove(product)} className="mt-2 text-red-500 hover:underline">
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ComparePage;