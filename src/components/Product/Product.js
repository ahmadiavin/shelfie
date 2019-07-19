import React, { Component } from "react";


class Product extends Component {
  render() {
    return (
       <div>
           <div key={this.props.product.id}>
               <div className="box">
                   <img
                   src={this.props.product.image}
                   alt={this.props.product.name} />
                   <div className="product-name">

                   </div>
               </div>
           </div>
       </div>
    );
  }
}

export default Product;
