import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import img1 from "../../Assets/Images/1.png";
import img2 from "../../Assets/Images/2.png";
import img3 from "../../Assets/Images/3.png";
import Navbar from '../../Components/Navbar/Nav';
import Footer1 from "../../Components/Footer/Footer1";
import Footer2 from "../../Components/Footer/Footer2";

import "./productPage.css";

const ProductPage = () => {
    const {prodid} = useParams();
    const [images, setImages] = useState(null);
    const [productData, setProductData] = useState([]);
    const [activeImg, setActiveImg] = useState({});
    const [qty, setQty] = useState(1);
    const [showReview, setShowReview] = useState(false);

    const getproductdatabyid = async() => {
        let temp = {
            "Code": 200, 
            "Message": "Success",
            "Data": [
                {
                    "ProductId": 1,
                    "ProductName": "Product 1",
                    "ProductDescription": "Product 1 Description",
                    "ProductImage": [ 
                        {
                            id: 1,
                            image: img1,
                        },
                        {
                            id: 2,
                            image: img2,
                        },
                        {
                            id: 3,
                            image: img3,
                        },
                    ],
                    "ProductCode": "P1",
                    "ProductCategory": "Category 1",
                    "ProductSubCategory": "Sub Category 1",
                    "ProductBrand": "Brand 1",
                    "ProductColor": "Color 1",
                    "ProductSize": "Size 1",
                    "ProductWeight": "Weight 1",
                    "ProductMaterial": "Material 1",
                    "ProductQuantity": 10,
                    "ProductUnit": "Unit 1",
                    "ProductPrice": 100,
                    "SalesPrice": 80,
                    "ProductDiscount": 20,
                    "ProductDiscountType": "Percentage",
                    "ProductTax": 20,
                    "ProductTaxType": "Percentage",
                    "ProductShippingCharge": 20,
                    "ProductShippingChargeType": "Percentage",
                    "ProductShippingTime": "1-2 days",
                    "ProductShippingTimeType": "Days",
                    "ProductShippingLocation": "Location 1",
                    "ProductShippingLocationType": "Country",
                    "ProductShippingReturnPolicy": "Return Policy 1",
                    "ProductShippingReturnPolicyType": "Days",
                    "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
                    "ProductShippingReturnPolicyDescriptionType": "Days",
                    "ProductReviews": [
                        {
                            "ReviewId": 1,
                            "Name": "Padmakar Gore",
                            "Email": "",
                            "Rating": 5,
                            "Date": "2021-08-01",
                            "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        },
                        {
                            "ReviewId": 2,
                            "Name": "Deepesh Kautkar",
                            "Email": "",
                            "Rating": 1,
                            "Date": "2021-08-01",
                            "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                        },
                        {
                            "ReviewId": 3,
                            "Name": "Kunal Pandit",
                            "Email": "",
                            "Rating": 4,
                            "Date": "2021-08-01",
                            "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        }
                    ]
                }
            ],
        }

        if(temp.Code === 200) {
            setImages(temp?.Data[0]?.ProductImage);
            setProductData(temp?.Data[0]);
            setActiveImg(temp?.Data[0]?.ProductImage[2]);
        }
    }

    useEffect(() => {
        getproductdatabyid();
    }, []);
  return (
    <div className='productpage'>
        {/* <h1>Product id is - {prodid}</h1>
        <p>{JSON.stringify(productData)}</p> */}

        <Navbar />

        <div className='pc1'>
            <Link to='/'>
                <button className='goback'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    Go Back
                </button>
            </Link>

            <div className='c11'>
                <div className='imgset'>
                    {
                        images && images?.map((item, idx) => {
                           return (
                            <div className='imgsmall' onClick={() => {setActiveImg(item)}}>
                                <img src={item.image}
                                 alt="item" className={activeImg.id == item.id ? 'active' : ''}/>
                            </div>
                           ) 
                        })
                    }
                </div>
                <div className='imgbig'>
                    <img src={activeImg.image} alt="activeImg" />
                </div>  
            </div>
            <div className='c12'>
                <h1 className='head1'>{productData.ProductName}</h1>
                <div className='c121'>
                    <p className='price'>${productData.SalesPrice * qty}
                    <span>${productData.ProductPrice * qty}</span>
                    </p>

                    <div className='incrdecr'>
                        <button onClick={() => {
                            if(qty > 1) {
                                setQty(qty - 1);
                            }
                        }}>-</button>
                        <p>1</p>
                        <button onClick={() => {
                            if(qty < 10) {
                                setQty(qty + 1);
                            }
                        }}>+</button>
                    </div>
                </div>
                <div className='btncont'>
                    <button onClick={() => {
                        alert("Added to cart!");
                    }}>
                        Add to cart
                    </button>
                    <button onClick={() => {
                        alert("Buy Now!");
                    }}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
        <div className='pc2'>
        {
            showReview ?
            <div className='tabs'>
                <button className='inactive' onClick={() => setShowReview(false)}>Description</button>
                <button className='active' onClick={() => setShowReview(true)}>Review</button>
            </div> :
            <div className='tabs'>
                <button className='active' onClick={() => setShowReview(false)}>Description</button>
                <button className='inactive' onClick={() => setShowReview(true)}>Review</button>
            </div>
        }
        {
            showReview ? 
            <div className='reviewcont'>
                <form>
                    <div className='formgroup'>
                        <label htmlFor=''>Name</label>
                        <input type='text' />
                    </div>
                    <div className='formgroup'>
                        <label htmlFor=''>Name</label>
                        <input type='email' />
                    </div>
                    <div className='formgroup'>
                        <label htmlFor=''>Review</label>
                        <textarea name='' id='' cols='30' rows='10'></textarea>
                    </div>

                    <button>Submit</button>
                </form>

                <div className='allreview'>
                    <h1 className='head1'>Product Reviews</h1>
                {
                    productData?.ProductReviews && 
                    productData.ProductReviews.map((item, idx) => {
                        return(
                            <div className='review'>
                                <div className='reviewhead'>
                                    <p className='name'>{item.Name}</p>
                                    <span className='date'>
                                        {item.Date}
                                    </span>
                                </div>
                                <div className='reviewbody'>
                                    {item.Review}
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div> :
            <div className='desc'>{productData.ProductDescription}</div>
        }
        </div>
        
        <Footer1 />
        <Footer2 />
    </div>
  )
}

export default ProductPage;