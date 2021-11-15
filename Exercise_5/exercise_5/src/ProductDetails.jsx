import React from "react";

function ProductDetails(props) {
    return (
        <div className="containter">
            <div className="row">
                <div className="col">
                    <h1 className="text-center display-4">Product details</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="container border border-dark rounded">
                        <div className="row">
                            <div className="col">
                                <p className="h3 display-5">Id:</p>
                            </div>
                            <div className="col">
                                <p className="h4">{props.product[0].id}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="h3 display-5">Nazwa:</p>
                            </div>
                            <div className="col">
                                <p className="h4">{props.product[0].name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="h3 display-5">Status:</p>
                            </div>
                            <div className="col">
                                <p className="h4">{props.product[0].status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;