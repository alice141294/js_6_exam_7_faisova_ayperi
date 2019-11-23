import React from 'react';
import nanoid from 'nanoid';


const orders = ( arr,props) => {
    let arrDiv =[];
    for (let i = 0; i < arr.length;i++) {
        arrDiv.push(arr[i].count > 0 ? <div key={nanoid()} className={arr[i].name}>
        <span className='orderTitle'>{arr[i].name}</span>
        <span className='orderTitle'> x {arr[i].count} </span>
        <span>  {arr[i].price * arr[i].count} KGS</span>
        <button className='remove' onClick={() => props.removeItem(arr)}>Remove</button>
        </div> : null)
    };
    
    return arrDiv
} ;

const Orderdetails = props =>{
    return(
        <div className='Orderdetail'>
        <h2>Order Details</h2>
        {orders(props.orderedItem)}
        <div className='price'>Общая стоимость {props.price}</div>
        </div>

        )
    }
    
    export default Orderdetails;