import React from "react";
import { Places } from './Places.js'

export default PrintPlaces;

let placesList = calculateDistanceBetweenPlaces(Places);

const Place = props => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.x}</td>
            <td>{props.y}</td>
            <td>{props.distance}</td>
            <td>{props.dayOfArrive}</td>
        </tr>
    )
}

function calculateDistanceBetweenPlaces(places) {
    for (let i = 0; i < places.length; i++) {
        if (i === 0) {
            continue;
        }

        else {
            let beforeSqrt = (places[i].x - places[i - 1].x) * (places[i].x - places[i - 1].x) + (places[i].y - places[i - 1].y) * (places[i].y - places[i - 1].y);
            let output = Math.round(Math.sqrt(beforeSqrt) * 111 * 100) / 100;
            places[i].distance = `${output} km`;
        }
    }

    return places;
}

export function PrintPlaces() {
    return (
        <div className="col">
            <h1 className="text-center display-4">Lista odwiedzanych miejsc</h1>
            <table className="table table-secondary table-hover table-striped table-bordered">
                <thead>
                    <tr className="text-center">
                        <th>Nazwa miasta</th>
                        <th>Długość geograficzna</th>
                        <th>Szerokość geograficzna</th>
                        <th>Odległość od poprzedniego miasta</th>
                        <th>Dzień dotarcia</th>
                    </tr>
                </thead>
                <tbody>
                    {placesList.map((place, key) => {
                        return (
                            <Place
                                key={key}
                                name={place.name}
                                x={place.x}
                                y={place.y}
                                distance={place.distance}
                                dayOfArrive={place.dayOfArrive}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}