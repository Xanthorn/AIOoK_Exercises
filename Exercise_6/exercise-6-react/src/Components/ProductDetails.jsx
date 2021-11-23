import React from "react";
import ProductsService from "../Services/ProductsService";
import { Link } from "react-router-dom";
import ProductClass from "../Classes/ProductClass";

function ProductDetails(props) {
    const [product, updateProduct] = React.useState(ProductClass);

    React.useEffect(function effectFunction() {
        async function fetchProducts() {
            let productService = new ProductsService();
            let fetchedProduct = await productService.GetProductById(props.id);
            updateProduct(fetchedProduct);
        }
        fetchProducts();
    }, [props.id]);

    return (
        <div className="containter">
            <div className="row">
                <div className="col">
                    <h1 className="text-center display-4">Szczegóły produktu</h1>
                </div>
            </div>
            <div className="row justify-content-center mb-3">
                <div className="col-8">
                    <div className="container border border-dark rounded">
                        <div className="row">
                            <div className="col">
                                <p className="h3 display-5">Id:</p>
                            </div>
                            <div className="col">
                                <p className="h4">{product.id}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="h3 display-5">Nazwa:</p>
                            </div>
                            <div className="col">
                                <p className="h4">{product.name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="h3 display-5">Status:</p>
                            </div>
                            <div className="col">
                                <p className="h4">{product.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col text-center">
                    <Link className="btn btn-outline-dark" to={`/product/${product.id}/edit`}>Edytuj produkt</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;