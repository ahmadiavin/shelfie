import React, { Component } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ``,
            price: 0,
            image: ``
        }
    }

    componentDidUpdate(){
        this.setState(this.handleEdit)
    }



    handleEdit = () => {
        const {name, price, image} = this.state;
        Axios.put("/api/product/:id" + this.props.id, {
            name,
            price,
            image
        }).then(res => {
            this.props.updateProduct(res.data)
        })
    }
  render() {
    return (
      <div className="container">
        <div key={this.props.product.id}>
          <div className="box">
            <img src={this.props.product.image} alt={this.props.product.name} />
            <br />
            <div className="product-name">
              <h6> {this.props.product.name}</h6>
            </div>
            <br />
            <div className="product-price">
              <h5>{this.props.product.price} </h5>
            </div>
          </div>
          <div className="edit-delete-div">
            <button onClick={() => {
                Axios.delete(`/api/product/:id${this.props.id}`).then(res => {
                    this.props.updateProduct(res.data);
                })
            }}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
