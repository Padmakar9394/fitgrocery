import React, { useState } from 'react'

import "./MyOrders.css";
import OrderSuccessful from '../Order/OrderSuccessful';
import { useRecoilState } from 'recoil';
import { orderSuccessfulProvider } from '../../Providers/OrderSuccessfulProvider';

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

    const [selectedOrderID, setSelectedOrderID] = useState(0);
    const [orderSuccessCont, setOrderSuccessCont] = useRecoilState(orderSuccessfulProvider);
  return (
    <div className='yourorders'>
        <h1 className='mainhead1'>Your Orders</h1>
        {orderSuccessCont && <OrderSuccessful orderid={selectedOrderID} message={`Order ID: ${selectedOrderID}`} />}
        <table>
            <thead>
                <tr>
                    <th scope='col'>Order ID</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Total</th>
                    <th scope='col'>Invoice</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td data-label='OrderID'>{item.id}</td>
                                <td data-label='OrderDate'>{item.date}</td>
                                <td data-label='Delivery Status'>
                                    <p>
                                        {item.status === 'Delivered' && <span className='greendot'></span>}{item.status === 'On the way' && <span className='yellowdot'></span>}{item.status === 'Cancelled' && <span className='reddot'></span>}
                                        {item.status} 
                                    </p>
                                </td>
                                <td data-label='Total'>${item.total}</td>
                                <td data-label='Invoice'>
                                    <button className='mainbutton1' onClick={() => {
                                        setSelectedOrderID(item.id)
                                        setOrderSuccessCont(true)
                                    }}>View</button>
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