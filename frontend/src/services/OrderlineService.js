import axios from 'axios';

const ORDERLINE_URL = "http://localhost:8080/orderlines";

class OrderlineService {
    async createOrderline(orderline){
        try {
            const response = await axios.post(ORDERLINE_URL, orderline);
            return response
            
        } catch (error) {
            console.error("Something went wrong!", error.message)
            return null
        }
    }
}

export default new OrderlineService ()
