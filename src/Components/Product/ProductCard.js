import React, { useState } from 'react'
import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({data}) => {
    const [show, setShow] = useState(false);
    const [qty, setQty] = useState(3);

    // const getproductid = () => {
    //     console.log(data.id);
    // }
  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.productImage} alt={data.productName} />
        </div>
        <div className='s2'>
            <h3>
                {
                    data.productPrice - (data.productPrice * data.discountPercent / 100)
                }
                <span>${data.productPrice}</span>
            </h3>
            <p>{data.productName}</p>
        </div>
        <div className='s3'>
            <p>{data.countType}</p>
        </div>
        {
            show ? 
            <div className='addBtn'>
                <div className='qty'>
                    <button onClick={() => {
                        if(qty > 1) {
                            setQty(qty - 1);
                        }
                    }}>-</button>
                    <p>{qty}</p>
                    <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <button className='addtocart' onClick={() => {
                    setShow(false)
                    alert("added to cart!")
                    }}>
                    Add to cart
                </button>
            </div> :
            <div className='addBtn'>
                <Link to={`/product/${data.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg"     fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" 
                onClick={() => setShow(true)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
        }
    </div>
  )
}

export default ProductCard;