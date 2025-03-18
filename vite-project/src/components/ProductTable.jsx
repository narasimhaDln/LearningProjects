// vite-project/src/components/ProductTable.js
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';

const ProductTable = ({ onCompare, comparedProducts }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }, []);

    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Discount Percentage', dataIndex: 'discountPercentage', key: 'discountPercentage' },
        { title: 'Brand', dataIndex: 'brand', key: 'brand' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        {
            title: 'Compare Products',
            render: (text, record) => (
                <Button
                    type="primary"
                    onClick={() => onCompare(record)}
                    disabled={comparedProducts.includes(record)}
                >
                    Compare
                </Button>
            ),
        },
    ];

    return <Table dataSource={products} columns={columns} pagination />;
};

export default ProductTable;