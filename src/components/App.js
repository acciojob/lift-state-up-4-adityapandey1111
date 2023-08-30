import React, { Component } from 'react';
import './../styles/App.css';

class ChildComponent extends Component {
  render() {
    const { cartItems, removeItem } = this.props;

    return (
      <div className="child">
        <h2>Child Component</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span id="itemName">{item.name}</span> - <span id="itemPrice">${item.price}</span>
              <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 15 },
        { name: 'Item 3', price: 20 },
      ],
      newItemName: '',   // Track the new item's name
      newItemPrice: '',  // Track the new item's price
    };
  }

  addItem = () => {
    const { newItemName, newItemPrice, cartItems } = this.state;

    if (newItemName && newItemPrice) {
      const newCartItem = { name: newItemName, price: parseFloat(newItemPrice) };
      const updatedCartItems = [...cartItems, newCartItem];
      this.setState({
        cartItems: updatedCartItems,
        newItemName: '',   // Reset the newItemName field
        newItemPrice: '',  // Reset the newItemPrice field
      });
    }
  };

  handleNameChange = (event) => {
    this.setState({ newItemName: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ newItemPrice: event.target.value });
  };

  removeItem = (index) => {
    const updatedCartItems = [...this.state.cartItems];
    updatedCartItems.splice(index, 1);
    this.setState({ cartItems: updatedCartItems });
  };

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <div className='name'>
          <div className='parentt'>
            <p>Item Name :</p>
            <input
              placeholder='Enter item name'
              value={this.state.newItemName}
              onChange={this.handleNameChange}
            />
          </div>
          <div className='parentt'>
            <p>Item Price :</p>
            <input
              placeholder='Enter item price'
              value={this.state.newItemPrice}
              onChange={this.handlePriceChange} type='number'
            />
          </div>
          <div className='btn'>
            <button onClick={this.addItem}>Add Item</button>
          </div>
        </div>
        <ChildComponent cartItems={this.state.cartItems} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default ParentComponent;
