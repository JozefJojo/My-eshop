import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ProductService {
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
    getProductById(id) {
        return axios.get(`http://localhost:8080/products/${id}`)
    }
}

export default new ProductService ()
