import React, { Component } from "react";
import { statuses } from "../Classes/ProductClass";

class EditProduct extends Component {
    constructor(props) {
        super(props);
        let product = 0;
        let i;
        for (i = 0; i < this.props.products.length; i++) {
            if (this.props.products[i].id === this.props.id) {
                product = this.props.products[i];
                break;
            }
        }
        this.state = {
            name: product.name,
            status: product.status,
            index: i
        };
    }

    editProduct() {
        this.props.products[this.state.index].name = this.state.name;
        this.props.products[this.state.index].status = this.state.status;
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
                    <div className="col text-center">
                        <h3>Edycja produkt</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control form-control-lg form" id="name" placeholder="Nazwa produktu" value={this.state.name} onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="col">
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="status" value={this.state.status} onChange={(e) => this.onChange(e)}>
                            <option selected>Status produktu</option>
                            <option value={statuses.ACTIVE}>aktywny</option>
                            <option value={statuses.INBASKET}>w koszyku</option>
                            <option value={statuses.BOUGHT}>kupiony</option>
                        </select>
                    </div>
                    <div className="col">
                        <button className="btn btn-lg btn-outline-dark" onClick={() => this.editProduct()}>Edytuj produkt</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProduct;