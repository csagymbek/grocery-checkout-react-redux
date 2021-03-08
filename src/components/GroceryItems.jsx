import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class GroceryItems extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        <table border="10" className="groceryItems__table">
          <tbody>
            <tr>
              <th></th>
              <th>Item name</th>
              <th>Item price</th>
            </tr>

            {this.props.items.map((item, i) => (
              <tr key={i}>
                <td>
                  <button onClick={() => this.props.addToCart(item)}>
                    Add
                  </button>
                </td>
                <td>{item.price}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = (state) => ({
  items: state.forSale,
});

const mapDispatch = (dispatch) => ({
  addToCart: (item) => dispatch({ type: "ADD_TO_CART", item }),
});

export default connect(mapState, mapDispatch)(GroceryItems);
