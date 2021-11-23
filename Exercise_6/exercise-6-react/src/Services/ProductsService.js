import axios from "axios"
import ProductClass from "../Classes/ProductClass";

const url = "https://localhost:44311/api/v1/products";

export default class ProductsService {

    async GetAllProducts() {
        try {
            let products = [];
            const response = await axios.get(url);
            for (let i = 0; i < response.data.products.length; i++) {
                let product = new ProductClass(response.data.products[i].id, response.data.products[i].name, response.data.products[i].status)
                products.push(product);
            }
            return products;
        }
        catch (error) {
            console.error(error);
        }
    }

    async GetProductById(id) {
        try {
            let product = {};
            const response = await axios.get(`${url}/${id}`);
            product = new ProductClass(response.data.product.id, response.data.product.name, response.data.product.status)
            return product;
        }
        catch (error) {
            console.error(error);
        }
    }

    async CreateProduct(name, status) {
        try {
            const response = await axios.post(url, {
                name: name,
                status: Number(status)
            });
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    async UpdateProduct(id, name, status) {
        try {
            const response = await axios.put(`${url}/${id}`, {
                name: name,
                status: Number(status)
            }); console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }
}