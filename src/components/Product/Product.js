import React, { Component } from "react";


class Product extends Component {
  render() {
    return (
       <div className="container">
           <div key={this.props.product.id}>
               <div className="box">
                   <img
                   src={this.props.product.image}
                   alt={this.props.product.name} />
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
                   <button>Delete</button>
                   <button>Edit</button>
               </div>
           </div>
       </div>
    );
  }
}

export default Product;
