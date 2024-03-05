import React, { useState } from 'react';
import { Card } from 'antd';
import '../cssfiles/Dashboard.css'

const { Meta } = Card;
const productsData = [
    {
        id: 1,
        imageUrl: '/images/product-1.png',
        name: 'Dell Laptop',
        description: 'Dell Alienware m18 R1 Gaming Laptop, Intel Core i9-13980HX Processor/64GB/1TB SSD/18.0" (45.72cm) QHD+ FHD 165Hz/NVIDIA RTX 4090 16GB GDDR6/Win 11 +',
        price: 'Rs.60000/-',
        ratings: 4.6,

    },
    {
        id: 2,
        name: 'Lenovo Laptop',
        description: 'Lenovo Thinkpad m18 R1 Gaming Laptop, Intel Core i9- 13980HX Processor / 64GB / 1TB SSD / 18.0" (45.72cm) QHD+ FHD 165Hz/NVIDIA RTX 4090 16GB GDDR6/Win 11',
        price: 'Rs.90000/-',
        imageUrl: '/images/product-4.png',
        ratings: 4.6,
    },
    {
        id: 3,
        name: 'iPad',
        description: 'Ipad',
        price: 'Rs.90000/-',
        imageUrl: '/images/product-2.png',
        ratings: 4.6,
    },
];

const Dashboard = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
     
            <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight: '20px' }}>
                    <h3>Category</h3>
                    {productsData.map((product) => (
                        <div
                            key={product.id}
                            className={`product ${selectedProduct && selectedProduct.id === product.id ? 'selected' : ''}`}
                            onClick={() => handleProductClick(product)}
                        >
                            <h4>{product.name}</h4>
                        </div>
                    ))}
                </div>
                {selectedProduct && (
                    <div style={{ flex: '2' }}>
                        <h3>Product Details</h3>
                        <Card title={selectedProduct.name} style={{ width: '90%' }}>
                            <Meta
                                description={<div className="product-details">
                                    <p>{selectedProduct.description}</p>
                                    <img src={selectedProduct.imageUrl} alt={selectedProduct.name} style={{ maxWidth: '100%' }} />
                                    <p>Price: {selectedProduct.price}</p>
                                    <p>ratings: {selectedProduct.ratings}</p>
                                </div>} />
                        </Card>
                    </div>
                )}
            </div>
            </div>
      
    );
};

export default Dashboard;
