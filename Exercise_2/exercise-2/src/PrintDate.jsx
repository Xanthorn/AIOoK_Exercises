import React from "react";
import PropTypes from "prop-types";

function calculateDate(props) {
    let firstDateDay = parseInt(props.firstDateDay);
    let firstDateMonth = parseInt(props.firstDateMonth);
    let firstDateYear = parseInt(props.firstDateYear);
    
    let secondDateDay = parseInt(props.secondDateDay);
    let secondDateMonth = parseInt(props.secondDateMonth);
    let secondDateYear = parseInt(props.secondDateYear);

    let firstDate = new Date(firstDateYear, firstDateMonth, firstDateDay);
    let secondDate = new Date(secondDateYear, secondDateMonth, secondDateDay);

    let dateDifference = Math.round((secondDate - firstDate) / (1000*60*60*24));

    return dateDifference
}


const PrintDate = (props) => {
    return (
        <div className="col">
            <h2 className="display-6 text-center">Obliczanie daty</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">Kiedy wyruszono:</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 text-center">{props.firstDateDay}.{props.firstDateMonth}.{props.firstDateYear}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="text-center">Kiedy dotarto:</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 text-center">{props.secondDateDay}.{props.secondDateMonth}.{props.secondDateYear}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="h4 text-center">Podróż zajęła: {calculateDate(props)} dni</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

PrintDate.propTypes = {
    firstDateDay: PropTypes.number.isRequired,
    firstDateMonth: PropTypes.number.isRequired,
    firstDateYear: PropTypes.number.isRequired,

    secondDateDay: PropTypes.number.isRequired,
    secondDateMonth: PropTypes.number.isRequired,
    secondDateYear: PropTypes.number.isRequired
}

export default PrintDate;