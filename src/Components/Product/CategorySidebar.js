import React from 'react';
import img1 from "../../Assets/Images/1.png";
import img2 from "../../Assets/Images/2.png";
import img3 from "../../Assets/Images/3.png";
import img4 from "../../Assets/Images/4.png";
import "./CategorySidebar.css";

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryImage: img1,
            categoryName: 'Category 1',
        },
        {
            id: 2,
            categoryImage: img2,
            categoryName: 'Category 2',
        },
        {
            id: 3,
            categoryImage: img3,
            categoryName: 'Category 3',
        },
        {
            id: 4,
            categoryImage: img4,
            categoryName: 'Category 4',
        },
        {
            id: 5,
            categoryImage: img1,
            categoryName: 'Category 5',
        },
        {
            id: 6,
            categoryImage: img2,
            categoryName: 'Category 6',
        },
        {
            id: 7,
            categoryImage: img3,
            categoryName: 'Category 7',
        },
        {
            id: 8,
            categoryImage: img4,
            categoryName: 'Category 8',
        },
        {
            id: 9,
            categoryImage: img3,
            categoryName: 'Category 3',
        }
    ]
  return (
    <div className='categorysidebar'>
        {
            data.map((item) => {
                return (
                    <div className='category'>
                        <img src={item.categoryImage} alt="categoryImage" />
                        <h1>{item.categoryName}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CategorySidebar