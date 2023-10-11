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
            "ProductId": 1,
            "ProductName": "Product 1",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
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
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Product 2",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img2
                },
                {
                    id: 2,
                    image: img1
                },
                {
                    id: 3,
                    image: img4
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 17,
            "ProductUnit": "Unit 1",
            "ProductPrice": 300,
            "SalesPrice": 170,
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
                    "Name": "Kunal Pandit",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Swapnil Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Product 3",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img4
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img1
                }
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
            "ProductPrice": 400,
            "SalesPrice": 300,
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
                    "Name": "Viajay Myakalwad",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 4,
            "ProductName": "Product 4",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img4
                },
                {
                    id: 3,
                    image: img3
                }
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
                    "Name": "Swapnil Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Padmakar",
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
        },
        {
            "ProductId": 5,
            "ProductName": "Product 6",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 17,
            "ProductUnit": "Unit 1",
            "ProductPrice": 300,
            "SalesPrice": 170,
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
                    "Name": "Kunal Pandit",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Swapnil Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 6,
            "ProductName": "Product 6",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img4
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img1
                }
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
            "ProductPrice": 400,
            "SalesPrice": 300,
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
                    "Name": "Viajay Myakalwad",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 7,
            "ProductName": "Product 7",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img4
                },
                {
                    id: 3,
                    image: img3
                }
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
                    "Name": "Swapnil Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Padmakar",
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
        },
        {
            "ProductId": 8,
            "ProductName": "Product 8",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img1
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img3
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 17,
            "ProductUnit": "Unit 1",
            "ProductPrice": 300,
            "SalesPrice": 170,
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
                    "Name": "Kunal Pandit",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Swapnil Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 9,
            "ProductName": "Product 9",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: img4
                },
                {
                    id: 2,
                    image: img2
                },
                {
                    id: 3,
                    image: img1
                }
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
            "ProductPrice": 400,
            "SalesPrice": 300,
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
                    "Name": "Viajay Myakalwad",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
    ]
  return (
    <div className='allproducts'>
        <h1>All Products</h1>
        <div className='products'>
            {
                products.map((item, index) => {
                    return(
                        <ProductCard key={index} data={item} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default AllProduct