import React from "react";
import { Table, Col } from 'react-bootstrap';
import { Places } from './Places.js'

export default PrintPlaces;

let places = Places;

const Place = props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.longtitude}</td>
            <td>{props.latitude}</td>
            <td>{props.distance}</td>
            <td>{props.dayOfArrive}</td>
        </tr>
    )
}

export function PrintPlaces() {
    return (
        <Col>
            <h1 className="text-center display-4">List of places</h1>
            <Table className="table table-secondary table-hover table-striped table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>Name</th>
                        <th>Longtitude</th>
                        <th>Latitute</th>
                        <th>Distance</th>
                        <th>Day Of Arrive</th>
                    </tr>
                </thead>
                <tbody>
                    {places.map((place, key) => {
                        return (
                            <Place
                                key={key}
                                name={place.name}
                                longtitude={place.longtitude}
                                latitude={place.latitude}
                                distance={place.distance}
                                dayOfArrive={place.dayOfArrive}
                            />
                        );
                    })}
                </tbody>
            </Table>
        </Col>
    )
}