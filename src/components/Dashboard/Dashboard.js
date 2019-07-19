import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [["WOW"]],
      error: ""
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get("/api/products")
      .then(res => {
        this.setState({
          products: res.data
        });
        console.log("/api/products");
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "error happened"
        });
      });
  };

  render() {
    const { products } = this.state;

    return (
      <section>
        {products.map((product, index) => (
          <Product products={this.state.products} key={index} product={product}/>
        ))}
        Dashboard
      </section>
    );
  }
}

export default Dashboard;
