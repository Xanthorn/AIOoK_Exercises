import React, { Component } from "react";
import { statuses } from "./class/ProductClass";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: ""
        };
    }

    onChange(e) {
        let target = e.target.id;
        this.setState({
            [target]: e.target.value
        });
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <input type="text" className="form-control form-control-lg form" id="name" placeholder="Nazwa produktu" onChange={(e) => this.onChange(e)} />
                        </td>
                        <td>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="status" onChange={(e) => this.onChange(e)}>
                                <option value={statuses.ACTIVE}>aktywny</option>
                                <option value={statuses.INBASKET}>w koszyku</option>
                                <option value={statuses.BOUGHT}>kupiony</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-lg btn-outline-dark" onClick={() => this.props.addProduct(this.state)}>Dodaj produkt</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default AddProduct;