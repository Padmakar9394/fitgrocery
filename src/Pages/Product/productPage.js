import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import img1 from "../../Assets/Images/1.png";
import img2 from "../../Assets/Images/2.png";
import img3 from "../../Assets/Images/3.png";
import img4 from "../../Assets/Images/4.png";
import Navbar from '../../Components/Navbar/Nav';
import Footer1 from "../../Components/Footer/Footer1";
import Footer2 from "../../Components/Footer/Footer2";
import ProductsSlider from '../../Components/Product/ProductsSlider';

//css
import "./productPage.css";


const ProductPage = () => {
    const {prodid} = useParams();
    const [images, setImages] = useState(null);
    const [productData, setProductData] = useState([]);
    const [activeImg, setActiveImg] = useState({});
    const [qty, setQty] = useState(1);
    const [showReview, setShowReview] = useState(false);
    const [rating, setRating] = useState(0);

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
        window.scroll(0, 0);
    }, []);

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
                                 alt="item" className={activeImg.id === item.id ? 'active' : ''}/>
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
                    <div className='formgroup'>
                        <label htmlFor=''>Rating</label>
                        <div className='rating'>
                            <div className='star' onClick={() => setRating(1)}>
                                {
                                    rating >= 1 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                              
                                }
                            </div>
                            <div className='star'onClick={() => setRating(2)}>
                                {
                                    rating >= 2 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                              
                                }
                            </div>
                            <div className='star'onClick={() => setRating(3)}>
                                {
                                    rating >= 3 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                              
                                }
                            </div>
                            <div className='star'onClick={() => setRating(4)}>
                                {
                                    rating >= 4 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                              
                                }
                            </div>
                            <div className='star'onClick={() => setRating(5)}>
                                {
                                    rating >= 5 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                              
                                }
                            </div>
                        </div>
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
                                    <div className='rating1'>
                                    <div className='star'>
                                        {
                                            item.Rating >= 1 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    
                                        }
                                    </div>
                                    <div className='star'>
                                        {
                                            item.Rating >= 2 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    
                                        }
                                    </div>
                                    <div className='star'>
                                        {
                                            item.Rating >= 3 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    
                                        }
                                    </div>
                                    <div className='star'>
                                        {
                                            item.Rating >= 4 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    
                                        }
                                    </div>
                                    <div className='star'>
                                        {
                                            item.Rating >= 5 ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                    
                                        }
                                    </div>
                        </div>
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
        <div className='slidercont'>
            <ProductsSlider products={products} categoryname='Realated Products' />
        </div>
        <div className='slidercont'>
            <ProductsSlider products={products} categoryname='Explore More' />
        </div>
        <Footer1 />
        <Footer2 />
    </div>
  )
}

export default ProductPage;