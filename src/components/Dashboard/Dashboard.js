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

  render() {
    const { products } = this.state;

    return (
      <section>
        {products.map((product, index) => (
          <Product products={this.state.products} key={product.id} product={product} updateproduct={this.updateproduct}/>
        ))}
        Dashboard
      </section>
    );
  }
}

export default Dashboard;
