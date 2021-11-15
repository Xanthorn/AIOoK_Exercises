import React from "react";
import { Link } from "react-router-dom";
import { statuses } from "./class/ProductClass";

const Product = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.status}
            </td>
            <td className="text-end">
                {props.status === statuses.ACTIVE ? (
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => props.setProductStatus(props.id, statuses.INBASKET)}>Ustaw jako "w koszyku"</button>
                        <Link className="btn btn-outline-dark" to={`/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" onClick={() => props.deleteProduct(props.id)}>Usuń produkt</button>
                    </div>
                ) : props.status === statuses.INBASKET ? (
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => props.setProductStatus(props.id, statuses.ACTIVE)}>Ustaw jako "aktywny"</button>
                        <button className="btn btn-outline-dark" onClick={() => props.setProductStatus(props.id, statuses.BOUGHT)}>Ustaw jako "kupiony"</button>
                        <Link className="btn btn-outline-dark" to={`/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" onClick={() => props.deleteProduct(props.id)}>Usuń produkt</button>
                    </div>
                ) : (
                    <div>
                        <button className="btn btn-outline-dark" onClick={() => props.setProductStatus(props.id, statuses.INBASKET)}>Ustaw jako "w koszyku"</button>
                        <Link className="btn btn-outline-dark" to={`/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" onClick={() => props.deleteProduct(props.id)}>Usuń produkt</button>
                    </div>
                )
                }
            </td>
        </tr>
    )
}

export default Product;