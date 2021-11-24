import React from "react";
import { Link } from "react-router-dom";
import { statuses } from "../Classes/ProductClass";
import ProductsService from "../Services/ProductsService";

function Product(props) {

    async function updateProduct(id, name, status) {
        const productsService = new ProductsService();
        await productsService.UpdateProduct(id, name, status)
    };

    async function deleteProduct(id) {
        const productsService = new ProductsService();
        await productsService.DeleteProduct(id);
    };

    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {statuses[props.status]}
            </td>
            <td className="text-end">
                {props.status === 0 ? (
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => updateProduct(props.id, props.name, 1)}>Ustaw jako "w koszyku"</button>
                        <Link className="btn btn-outline-dark" to={`/product/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" onClick={() => deleteProduct(props.id)}>Usuń produkt</button>
                    </div>
                ) : props.status === 1 ? (
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => updateProduct(props.id, props.name, 0)}>Ustaw jako "aktywny"</button>
                        <button className="btn btn-outline-dark" onClick={() => updateProduct(props.id, props.name, 2)}>Ustaw jako "kupiony"</button>
                        <Link className="btn btn-outline-dark" to={`/product/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" onClick={() => deleteProduct(props.id)}>Usuń produkt</button>
                    </div>
                ) : (
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => updateProduct(props.id, props.name, 1)}>Ustaw jako "w koszyku"</button>
                        <Link className="btn btn-outline-dark" to={`/product/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" onClick={() => deleteProduct(props.id)}>Usuń produkt</button>
                    </div>
                )
                }
            </td>
        </tr>
    )
}

export default Product;