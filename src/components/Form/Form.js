import React, { Component } from "react";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            image: '',
            productName: '',
            price: ''

        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        this.baseState = this.state;

       
    }

    cancelButton = () => {
        this.setState(this.baseState)
    }


  render() {
    return (
       <form>
       <div className="input-field">
           <h6>Image URL:</h6>
          <input className="form-input"
          onChange={this.handleChange} placeholder="Image URL:" />
           
           <h6>Product Name:</h6>
          <input className="form-input"
           onChange={this.handleChange} placeholder="Product Name:" />
           
           <h6>Price:</h6>
          <input className="form-input"
           onChange={this.handleChange} placeholder="Price:"/>

       </div>

       <div className="input-buttons">
           <button onClick={this.cancelButton}>Cancel</button>
           <button>Add to Inventory</button>
       </div>
       </form>
    );
  }
}

export default Form;
