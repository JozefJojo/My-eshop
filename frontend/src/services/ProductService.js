import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/products";

class ProductService {
    async getProducts(){
        try {
            const response = await axios.get(PRODUCT_API_BASE_URL);
            return response
            
        } catch (error) {
            console.error("Something went wrong!", error.message)
            return null
        }
    }
    getProductById(id) {
        return axios.get(`http://localhost:8080/products/${id}`)
    }
}

export default new ProductService ()
