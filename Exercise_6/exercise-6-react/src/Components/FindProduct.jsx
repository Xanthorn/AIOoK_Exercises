import React from "react";
import ProductsService from "../Services/ProductsService";
import ProductInSearch from "./ProductInSearch";

function FindProduct(props) {
    const [products, updateProducts] = React.useState([]);
    const [filteredProducts, updateFilteredProducts] = React.useState([]);
    const [searchedPhrase, updateSearchedPhrase] = React.useState("");

    React.useEffect(function effectFunction() {
        async function fetchProducts() {
            let productService = new ProductsService();
            let fetchedProducts = await productService.GetAllProducts();
            updateProducts(fetchedProducts);
        }
        fetchProducts();

    }, []);

    function filterProducts(phrase) {
        let filteredProducts = products;

        filteredProducts = filteredProducts.filter(x => {
            return x.name.toLowerCase().includes(phrase.toLowerCase());
        });

        updateFilteredProducts(filteredProducts);
    }

    function onChange(e) {
        updateSearchedPhrase(e.target.value);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-4 text-center">Wyszukaj produkt</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-7">
                    <input type="text" className="form-control form-control-lg form" id="searchedPhrase" placeholder="Szukana fraza" onChange={(e) => onChange(e)} />
                </div>
                <div className="col-2">
                    <button className="btn btn-lg btn-outline-dark" onClick={() => filterProducts(searchedPhrase)}>Wyszukaj</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Znalezione produkty</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Nazwa</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredProducts.map((product, key) => {
                                    return (
                                        <ProductInSearch
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
        </div>
    )
}

export default FindProduct;