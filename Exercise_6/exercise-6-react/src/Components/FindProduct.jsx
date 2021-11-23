import React, { Component } from "react";
import ProductInSearch from "./ProductInSearch";

class FindProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedPhrase: "",
            filteredProducts: []
        };
    }

    filterProducts(phrase) {
        let filteredProducts = this.props.products;

        filteredProducts = filteredProducts.filter(x => {
            return x.name.includes(phrase);
        });

        this.setState(state => {
            return {filteredProducts: filteredProducts}
        });
    }

    onChange(e) {
        let target = e.target.id;
        this.setState({
            [target]: e.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-4 text-center">Wyszukaj produkt</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control form-control-lg form" id="searchedPhrase" placeholder="Szukana fraza" onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="col">
                        <button className="btn btn-lg btn-outline-dark" onClick={() => this.filterProducts(this.state.searchedPhrase)}>Wyszukaj</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Znalezione produkty</h2>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Nazwa</th>
                                    <th className="text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.filteredProducts.map((product, key) => {
                                        return (
                                            <ProductInSearch
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
            </div>
        )
    }
}

export default FindProduct;