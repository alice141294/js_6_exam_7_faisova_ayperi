import React, {Component} from 'react';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import OrderDetails from './components/OrderDetails/OrderDetails'

class App extends Component {
  state = {
    
    menu: [
      
      {name: 'Burger', count: 0, price: 80, },
      {name: 'Cheeseburger', count: 0, price: 90, },
      {name: 'Fries', count: 0, price: 45, },
      {name: 'Coffee', count: 0, price: 70, },
      {name: 'Tea', count: 0, price: 50 },
      {name: 'Cola', count: 0, price: 40 },
      
    ],
    totalPrice: 0,
    
  };

  addNewOrder = (elem) =>{
    const menu = [...this.state.menu]
    let totalPrice = this.state.totalPrice;
    let index = menu.findIndex( i => i.name === elem.name);
    menu[index].count ++;
    totalPrice += elem.price;
    this.setState({totalPrice, menu});
  };

  removeItem = (elem) =>{
    const menu = [...this.state.menu]
    let totalPrice = this.state.totalPrice;
    let index = menu.findIndex( i => i.name === elem.name);
    menu[index].count --;
    totalPrice -= elem.price;
    this.setState({totalPrice, menu});
  };

  render(){
    return (
      <div className="App">
        <OrderDetails
        orderedItem = {this.state.menu}
        removeItem ={this.removeItem}
        price = {this.state.totalPrice}
        />
        <AddItems
        oneItem = {this.state.menu}
        addNewOrder = {this.addNewOrder}
        />
      </div>
    )
  }

}

export default App;
