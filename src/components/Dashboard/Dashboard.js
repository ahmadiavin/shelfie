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
