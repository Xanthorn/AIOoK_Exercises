import React from "react";
import { Link } from "react-router-dom";
import { statuses } from "../Classes/ProductClass";

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
                        <button className="btn btn-outline-dark" >Ustaw jako "w koszyku"</button>
                        <Link className="btn btn-outline-dark" to={`/product/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" >Usuń produkt</button>
                    </div>
                ) : props.status === statuses.INBASKET ? (
                    <div>
                        <button className="btn btn-outline-dark" >Ustaw jako "aktywny"</button>
                        <button className="btn btn-outline-dark" >Ustaw jako "kupiony"</button>
                        <Link className="btn btn-outline-dark" to={`/product/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" >Usuń produkt</button>
                    </div>
                ) : (
                    <div>
                        <button className="btn btn-outline-dark" >Ustaw jako "w koszyku"</button>
                        <Link className="btn btn-outline-dark" to={`/product/${props.id}`}>Wyświetl szczegóły</Link>
                        <button className="btn btn-outline-dark" >Usuń produkt</button>
                    </div>
                )
                }
            </td>
        </tr>
    )
}

export default Product;