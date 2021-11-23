import axios from "axios"

const url = "https://localhost:44311/api/v1/products";

export default class ProductsService {

    async GetAllProducts() {
        let fetchedProducts = [];

        await axios.get(url)
            .then(
                response => {
                    console.log(response.data);
                    fetchedProducts = response.data.products;
                },
                error => {
                    console.log(error);
                }
            );

        return fetchedProducts;
    }
}