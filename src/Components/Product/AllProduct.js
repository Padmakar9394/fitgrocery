import React from 'react'
import ProductCard from './ProductCard';
import img1 from "../../Assets/Images/1.png";
import img2 from "../../Assets/Images/2.png";
import img3 from "../../Assets/Images/3.png";
import img4 from "../../Assets/Images/4.png";
import "./AllProduct.css"

const AllProduct = () => {
    const products = [
        {
            id: 1,
            productName: 'Product 1',
            productImage: img1,
            productPrice: 100,
            countType: '1 each',
            discountPercent: 12,
        },
        {
            id: 2,
            productName: 'Product 2',
            productImage: img2,
            productPrice: 200,
            countType: '1 per kg',
            discountPercent: 12,
        },
        {
            id: 3,
            productName: 'Product 3',
            productImage: img3,
            productPrice: 300,
            countType: '1 per kg',
            discountPercent: 19,
        },
        {
            id: 4,
            productName: 'Product 4',
            productImage: img4,
            productPrice: 400,
            countType: '1 each',
            discountPercent: 15,
        },
        {
            id: 5,
            productName: 'Product 5',
            productImage: img1,
            productPrice: 100,
            countType: '1 each',
            discountPercent: 12,
        },
        {
            id: 6,
            productName: 'Product 6',
            productImage: img2,
            productPrice: 200,
            countType: '1 per kg',
            discountPercent: 12,
        },
        {
            id: 7,
            productName: 'Product 7',
            productImage: img3,
            productPrice: 300,
            countType: '1 per kg',
            discountPercent: 19,
        },
        {
            id: 8,
            productName: 'Product 8',
            productImage: img4,
            productPrice: 400,
            countType: '1 each',
            discountPercent: 15,
        },
        {
            id: 9,
            productName: 'Product 9',
            productImage: img1,
            productPrice: 100,
            countType: '1 each',
            discountPercent: 12,
        },
        {
            id: 10,
            productName: 'Product 10',
            productImage: img2,
            productPrice: 200,
            countType: '1 per kg',
            discountPercent: 12,
        },
        {
            id: 11,
            productName: 'Product 11',
            productImage: img3,
            productPrice: 300,
            countType: '1 per kg',
            discountPercent: 19,
        },
        {
            id: 12,
            productName: 'Product 12',
            productImage: img4,
            productPrice: 400,
            countType: '1 each',
            discountPercent: 15,
        },
    ]
  return (
    <div className='allproducts'>
        <h1>All Products</h1>
        <div className='products'>
            {
                products.map((item) => {
                    return(
                        <ProductCard key={item.id} data={item} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllProduct