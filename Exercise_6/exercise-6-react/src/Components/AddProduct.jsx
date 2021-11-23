import React, { useState } from "react";
import ProductsService from "../Services/ProductsService";

function AddProduct() {
    const [name, setName] = useState(""); 
    const [status, setStatus] = useState(0);

    async function addProduct() {
        const productsService = new ProductsService();
        await productsService.CreateProduct(name, status);
    }

    return (
        <table className="table">
            <tbody>
                <tr className="justify-content-center">
                    <td className="col-7">
                        <input type="text" className="form-control form-control-lg form" id="name" placeholder="Nazwa produktu" onChange={e => setName(e.target.value)} />
                    </td>
                    <td className="col-3">
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" defaultValue={"DEFAULT"} id="status" onChange={e => setStatus(e.target.value)}>
                            <option value="DEFAULT" disabled>Status produktu</option>
                            <option value={0}>aktywny</option>
                            <option value={1}>w koszyku</option>
                            <option value={2}>kupiony</option>
                        </select>
                    </td>
                    <td className="col-2">
                        <button className="btn btn-lg btn-outline-dark" onClick={addProduct}>Dodaj produkt</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default AddProduct;