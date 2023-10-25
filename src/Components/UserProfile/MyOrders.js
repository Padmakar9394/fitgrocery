import React from 'react'

import "./MyOrders.css";

const MyOrders = () => {
    const data = [
        {
            id: 12311,
            date: '12/12/2021',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 12312,
            date: '19/12/2021',
            status: 'On the way',
            total: 650
        },
        {
            id: 12313,
            date: '20/12/2021',
            status: 'Delivered',
            total: 800
        },
        {
            id: 12314,
            date: '18/12/2021',
            status: 'Cancelled',
            total: 1735
        },
        {
            id: 12315,
            date: '12/12/2021',
            status: 'Delivered',
            total: 1000
        },
        {
            id: 12316,
            date: '19/12/2021',
            status: 'On the way',
            total: 650
        },
        {
            id: 12317,
            date: '20/12/2021',
            status: 'Delivered',
            total: 800
        },
        {
            id: 12318,
            date: '18/12/2021',
            status: 'Cancelled',
            total: 1735
        },
    ]
  return (
    <div className='yourorders'>
        <h1 className='mainhead1'>Your Orders</h1>
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.date}</td>
                                <td>
                                    <p>
                                        {item.status === 'Delivered' && <span className='greendot'></span>}{item.status === 'On the way' && <span className='yellowdot'></span>}{item.status === 'Cancelled' && <span className='reddot'></span>}
                                        {item.status} 
                                    </p>
                                </td>
                                <td>${item.total}</td>
                                <td>
                                    <button className='mainbutton1'>View</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default MyOrders