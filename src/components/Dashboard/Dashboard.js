import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: ""
    };
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  updateproduct(newProducts) {
    this.setState({ products: newProducts });
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          products: res.data
        });
        console.log("/api/inventory");
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "error happened"
        });
      });
  };

  deleteProduct(id) {
    axios
      .delete(`/api/product/${id}`)
      .then(res => this.getProducts(res))
      .catch(err => console.log("delete product axios error", err));
  }

  render() {
    const { products } = this.state;

    return (
      <section>
        {products.map((product, index) => (
          <Product
            products={this.state.products}
            key={product.id}
            product={product}
            updateproduct={this.updateproduct}
            deleteProduct={this.deleteProduct}
          />
        ))}
        Dashboard
      </section>
    );
  }
}

export default Dashboard;
