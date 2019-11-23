import React from 'react';
import './AddItems.css';

const ItemsInMenu = [

    {name: 'Burger', price: 80, image: 'http://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png' },
    {name: 'Cheeseburger', price: 90, image: 'http://atlas-content-cdn.pixelsquid.com/stock-images/cheese-burger-q1yoznC-600.jpg'  },
    {name: 'Fries', price: 45, image: 'https://icon2.cleanpng.com/20180125/qtq/kisspng-hamburger-french-fries-doughnut-fast-food-pizza-hd-fries-5a6a90a2587a03.3712851615169332823624.jpg' },
    {name: 'Coffee', price: 70, image: 'https://pics.clipartpng.com/White_Cup_with_Coffee_PNG_Clipart-563.png'  },
    {name: 'Tea', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_1DNfZh7SRim7igIyktKh_DUTaK1LHwRt_nRVZmychwNXqkc8'  },
    {name: 'Cola', price: 40, image: 'https://banner2.cleanpng.com/20180201/bze/kisspng-coca-cola-cherry-soft-drink-diet-coke-coca-cola-5a72b33a0b9cd5.2615029515174664260476.jpg' },
    

];
const AddItems = (props) =>{   
    return (
        <div className='MenuBar'>
        <h2>Add Items</h2>
        {ItemsInMenu.map((oneIngr) => (
            <div className='newOrder'>
                <img  onClick={() => props.addNewOrder(oneIngr)} className="OrderImg" src={oneIngr.image} alt={oneIngr.name}/>
                <span className='ingrname'>{oneIngr.name}</span>
                <p> Price {oneIngr.price} KGZ</p>
            </div>
            
        ))}
    </div>
    )
}

export default AddItems;