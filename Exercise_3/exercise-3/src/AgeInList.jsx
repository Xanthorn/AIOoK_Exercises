import React from "react";

const AgeInList = (props) => {
    return (
        <li className="list-group-item">
            { props.age === 0 || props.age >= 5 ? (
               <strong>{props.age} lat</strong>
            ) : props.age === 1 ? (
                <strong>{props.age} rok</strong>
            ) : (
                <strong>{props.age} lata</strong>
            )
            }
        </li>
    )
}

export default AgeInList;