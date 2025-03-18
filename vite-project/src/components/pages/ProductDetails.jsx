import React, { useState } from 'react';
import ProductTable from '../ProductTable';

const ProductDetails = ({ onCompare }) => {
    const [comparedProducts, setComparedProducts] = useState([]);

    const handleCompare = (product) => {
        if (!comparedProducts.includes(product) && comparedProducts.length < 4) {
            setComparedProducts([...comparedProducts, product]);
            onCompare(product);
        }
    };

    const handleRemove = (product) => {
        setComparedProducts(comparedProducts.filter(p => p !== product));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product Details</h1>
            <ProductTable onCompare={handleCompare} comparedProducts={comparedProducts} />
        </div>
    );
};

export default ProductDetails;