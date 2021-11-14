import React from "react";
import PropTypes from "prop-types";

const PersonInCrew = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            { props.age === 0 || props.age >= 5 ? (
            <td>{props.age} lat</td>
            ) :  props.age === 1 ? (
                <td>{props.age} rok</td>
            ) : (
                <td>{props.age} lata</td>
            )
            }
            <td>{props.rank}</td>
            <td>{props.email}</td>
        </tr>
    )
}

PersonInCrew.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    rank: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default PersonInCrew;