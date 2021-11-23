import React from "react";
import Product from "./Product";
import "../Stylesheets/Product.css"
import AddProduct from "./AddProduct";
import ProductsService from "../Services/ProductsService";

function Products(props) {

    const [products, updateProducts] = React.useState([]);

    /*addProduct = (s) => {
        this.setState(state => {
            let productsList = state.products;

            let newProduct = new ProductClass(s.name, s.status);
            productsList.push(newProduct);

            return { products: productsList }
        });
    }

    setProductStatus = (id, status) => {
        this.setState(state => {
            let productsList = state.products;

            for (let i = 0; i < productsList.length; i++) {
                if (productsList[i].id === id) {
                    productsList[i].status = status;
                }
            }

            return { products: productsList }
        });
    }

    deleteProduct = (id) => {
        this.setState(state => {
            let productsList = state.products;

            productsList = productsList.filter(x => {
                return x.id !== id;
            });

            return { products: productsList }
        })
    }*/

    /*async componentDidMount() {
        let productsService = new ProductsService();
        let fetchedProducts = await productsService.GetAllProducts();

        if (fetchedProducts.length > 0) {
            this.setState(state => {
                return { products: fetchedProducts.products }
            });
        }
    }*/

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
                                <th className="text-center">Nazwa</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Zarządzanie</th>
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