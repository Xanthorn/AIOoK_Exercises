import React from "react";

function ProductDetails(props) {
    return (
        <div className="containter">
            <div className="row">
                <div className="col">
                    <h1 className="text-center display-4">Product details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="h-3 display-5">Id:</p>
                </div>
                <div className="col">
                    <p className="h-3">{props.product.id}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="h-3 display-5">Nazwa:</p>
                </div>
                <div className="col">
                    <p className="h-3">{props.product.name}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="h-3 display-5">Status:</p>
                </div>
                <div className="col">
                    <p className="h-3">{props.product.status}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;