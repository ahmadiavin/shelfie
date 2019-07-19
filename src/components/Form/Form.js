import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.baseState = this.state;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  cancelButton = () => {
    this.setState(this.baseState);
  };

  handleSubmit() {
    let { name, price, image } = this.state;
    let product = {
      name,
      price: Number(price),
      image
    };
    axios
      .post("/api/product", product)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => console.log(error, "error on POST"));
  }
  render() {
    return (
      <div className="form">
        <div className="input-field">
          <h6>Image URL:</h6>
          <input
            className="form-input"
            onChange={this.handleChange}
            placeholder="Image URL:"
          />

          <h6>Product Name:</h6>
          <input
            className="form-input"
            onChange={this.handleChange}
            placeholder="Product Name:"
          />

          <h6>Price:</h6>
          <input
            className="form-input"
            onChange={this.handleChange}
            placeholder="Price:"
          />
        </div>

        <div className="input-buttons">
          <button onClick={this.cancelButton}>Cancel</button>
          <button onClick={this.handleSubmit}>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
