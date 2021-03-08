import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { v4 as uuid } from "uuid";

class GroceryCart extends Component {
  total = () => {
    return this.props.cart.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  render() {
    console.log(this.props.cart.length);
    if (this.props.cart.length === 0)
      return <h3 style={{ margin: "0px 10px" }}>Cart is empty!</h3>;
    return (
      <div id="grocery-cart">
        <table border="1">
          <tbody>
            <tr>
              <th></th>
              <th>Item name</th>
              <th>Item price</th>
            </tr>

            {this.props.cart.map(({ name, price }, index) => (
              <tr key={uuid()}>
                <td>
                  <button onClick={() => this.props.removeFromCart(index)}>
                    Remove
                  </button>
                </td>
                <td>{name}</td>
                <td>{price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total: ${this.total().toFixed(2)}</p>
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
});

const mapDispatch = (dispatch) => ({
  removeFromCart: (index) => dispatch({ type: "REMOVE_FROM_CART", index }),
});

export default connect(mapState, mapDispatch)(GroceryCart);
