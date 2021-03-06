import React from "react";
import Product from "./Product";
import "../Stylesheets/Product.css"
import AddProduct from "./AddProduct";
import ProductsService from "../Services/ProductsService";

function Products(props) {

    const [products, updateProducts] = React.useState([]);

    React.useEffect(function effectFunction() {
        async function fetchProducts() {
            let productService = new ProductsService();
            let fetchedProducts = await productService.GetAllProducts();
            updateProducts(fetchedProducts);
        }
        fetchProducts();

    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center col-4">Nazwa</th>
                                <th className="text-center col-1">Status</th>
                                <th className="text-center col-7">Zarządzanie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, key) => {
                                    return (
                                        <Product
                                            key={key}
                                            id={product.id}
                                            name={product.name}
                                            status={product.status}
                                        />
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <AddProduct />
                </div>
            </div>
        </div>
    )
}

export default Products;