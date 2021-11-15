import React, { Component } from "react";
import ProductClass, { statuses } from "./class/ProductClass";
import Product from "./Product";
import './Product.css';
import AddProduct from "./AddProduct";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                new ProductClass("Masło", statuses.ACTIVE),
                new ProductClass("Chleb", statuses.INBASKET),
                new ProductClass("Ciastka", statuses.BOUGHT)
            ]
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