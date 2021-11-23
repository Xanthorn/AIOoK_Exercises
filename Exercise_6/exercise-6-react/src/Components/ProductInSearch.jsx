import React from "react";

const ProductInSearch = (props) => {
    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td>
                {props.status}
            </td>
        </tr>
    )
}

export default ProductInSearch;