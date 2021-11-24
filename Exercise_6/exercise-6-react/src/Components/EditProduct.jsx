import React, { useState, useEffect } from "react";
import ProductsService from "../Services/ProductsService";
import { useParams } from "react-router";

function EditProduct() {
    const [name, setName] = useState("");
    const [status, setStatus] = useState(0);
    const { id } = useParams();

    useEffect(function effectFunction() {
        async function fetchProduct() {
            let productService = new ProductsService();
            let fetchedProduct = await productService.GetProductById(id);
            setName(fetchedProduct.name);
            setStatus(fetchedProduct.status);
        }
        fetchProduct();
    }, [setName, setStatus, id]);

    async function updateProduct() {
        let productsService = new ProductsService();
        await productsService.UpdateProduct(id, name, status)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h3>Edycja produktu</h3>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <input type="text" className="form-control form-control-lg form" id="name" placeholder="Nazwa produktu" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-4">
                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="status" value={status} onChange={e => setStatus(e.target.value)}>
                        <option selected>Status produktu</option>
                        <option value={0}>aktywny</option>
                        <option value={1}>w koszyku</option>
                        <option value={2}>kupiony</option>
                    </select>
                </div>
                <div className="col-2">
                    <button className="btn btn-lg btn-outline-dark" onClick={() => updateProduct()}>Edytuj produkt</button>
                </div>
            </div>
        </div>
    )
}

export default EditProduct;