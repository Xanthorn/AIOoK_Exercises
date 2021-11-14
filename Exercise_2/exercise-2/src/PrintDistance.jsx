import React from "react";
import PropTypes from "prop-types";

function calculateDistance(props) {
    let firstXDegrees = parseInt(props.firstXDegrees);
    let firstXMinutes = parseInt(props.firstXMinutes);
    let firstXSeconds = parseInt(props.firstXSeconds);
    let firstXDirection = props.firstXDirection;

    let firstYDegrees = parseInt(props.firstYDegrees);
    let firstYMinutes = parseInt(props.firstYMinutes);
    let firstYSeconds = parseInt(props.firstYSeconds);
    let firstYDirection = props.firstYDirection;

    let secondXDegrees = parseInt(props.secondXDegrees);
    let secondXMinutes = parseInt(props.secondXMinutes);
    let secondXSeconds = parseInt(props.secondXSeconds);
    let secondXDirection = props.secondXDirection;

    let secondYDegrees = parseInt(props.secondYDegrees);
    let secondYMinutes = parseInt(props.secondYMinutes);
    let secondYSeconds = parseInt(props.secondYSeconds);
    let secondYDirection = props.secondYDirection;


    // First Coordinates

    let firstX = firstXDegrees + (1.0 * firstXMinutes / 60) + (1.0 * firstXSeconds / 60 / 60);

    if (firstXDirection === "E") {
        firstX *= -1;
    }

    let firstY = firstYDegrees + (1.0 * firstYMinutes / 60) + (1.0 * firstYSeconds / 60 / 60);

    if (firstYDirection === "S") {
        firstY *= -1;
    }

    // Second Coordinates

    let secondX = secondXDegrees + (1.0 * secondXMinutes / 60) + (1.0 * secondXSeconds / 60 / 60);

    if (secondXDirection === "E") {
        secondX *= -1;
    }

    let secondY = secondYDegrees + (1.0 * secondYMinutes / 60) + (1.0 * secondYSeconds / 60 / 60);

    if (secondYDirection === "S") {
        secondY *= -1;
    }

    let beforeSqrt = (secondX - firstX) * (secondX - firstX) + (secondY - firstY) * (secondY - firstY);
    return Math.sqrt(beforeSqrt) * 111 / 1.852;
}

const PrintDistance = (props) => {
    return (
        <div className="col">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="display-6 text-center">Obliczanie dystansu</h2>
                        <form className="text-center">
                            <div className="container">
                                <div className="row g-2 mb-3">
                                    <div className="col">
                                        <h3 className="text-center">Pierwszy punkt:</h3>
                                        <div className="container text-center">
                                            <h4 className="text-center">Długość</h4>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Stopnie:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.firstXDegrees}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Minuty:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.firstXMinutes}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Sekundy:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.firstXSeconds}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Kierunek:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5">{props.firstXDirection}</p>
                                                </div>
                                            </div>

                                            <h4 className="text-center">Szerokość</h4>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Stopnie:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.firstYDegrees}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Minuty:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.firstYMinutes}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Sekundy:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.firstYSeconds}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Kierunek:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5">{props.firstYDirection}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h3 className="text-center">Drugi punkt:</h3>
                                        <div className="container text-center">
                                        <h4 className="text-center">Długość</h4>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Stopnie:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.secondXDegrees}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Minuty:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.secondXMinutes}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Sekundy:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.secondXSeconds}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Kierunek:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5">{props.secondXDirection}</p>
                                                </div>
                                            </div>

                                            <h4 className="text-center">Szerokość</h4>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Stopnie:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.secondYDegrees}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Minuty:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.secondYMinutes}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Sekundy:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5 text-start">{props.secondYSeconds}</p>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col text-start">
                                                    <p className="h5">Kierunek:</p>
                                                </div>
                                                <div className="col text-start">
                                                    <p class="h5">{props.secondYDirection}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <p className="h3">Wynik: </p>
                                </div>
                                <div className="col text-start">
                                    <p className="h3">{Math.round(calculateDistance(props) * 100) / 100} mil morskich</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

PrintDistance.propTypes = {
    firstXDegrees: PropTypes.number.isRequired,
    firstXMinutes: PropTypes.number.isRequired,
    firstXSeconds: PropTypes.number.isRequired,
    firstXDirection: PropTypes.string.isRequired,

    firstYDegrees: PropTypes.number.isRequired,
    firstYMinutes: PropTypes.number.isRequired,
    firstYSeconds: PropTypes.number.isRequired,
    firstYDirection: PropTypes.string.isRequired,

    secondXDegrees: PropTypes.number.isRequired,
    secondXMinutes: PropTypes.number.isRequired,
    secondXSeconds: PropTypes.number.isRequired,
    secondXDirection: PropTypes.string.isRequired,

    secondYDegrees: PropTypes.number.isRequired,
    secondYMinutes: PropTypes.number.isRequired,
    secondYSeconds: PropTypes.number.isRequired,
    secondYDirection: PropTypes.string.isRequired,
}

PrintDistance.defaultProps = {
    firstXMinutes: 0,
    firstXSeconds: 0,

    firstYMinutes: 0,
    firstYSeconds: 0,

    secondXMinutes: 0,
    secondXSeconds: 0,

    secondYMinutes: 0,
    secondYSeconds: 0,
}

export default PrintDistance;