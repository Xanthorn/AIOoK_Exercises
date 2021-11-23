import React, { Component } from "react";
import ProductClass from "../Classes/ProductClass";
import Product from "./Product";
import "../Stylesheets/Product.cs"
import AddProduct from "./AddProduct";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products
        }
    }

    addProduct = (s) => {
        this.setState(state => {
            let productsList = state.products;

            let newProduct = new ProductClass(s.name, s.status);
            productsList.push(newProduct);

            return { products: productsList }
        });
    }

    setProductStatus = (id, status) => {
        this.setState(state => {
            let productsList = state.products;

            for (let i = 0; i < productsList.length; i++) {
                if (productsList[i].id === id) {
                    productsList[i].status = status;
                }
            }

            return { products: productsList }
        });
    }

    deleteProduct = (id) => {
        this.setState(state => {
            let productsList = state.products;

            productsList = productsList.filter(x => {
                return x.id !== id;
            });

            return { products: productsList }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Nazwa</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Zarządzanie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map((product, key) => {
                                        return (
                                            <Product
                                                key={key}
                                                id={product.id}
                                                name={product.name}
                                                status={product.status}
                                                setProductStatus={this.setProductStatus}
                                                deleteProduct={this.deleteProduct}
                                            />
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <AddProduct addProduct={this.addProduct} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;