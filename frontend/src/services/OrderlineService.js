import axios from 'axios';

const ORDERLINE_URL = "http://localhost:8080/orderlines";

class OrderlineService {
    async createOrderline(orderline){
        try {
            const response = await axios.post(ORDERLINE_URL, orderline);
            return response
            
        } catch (error) {
            console.error(error.message)
            return null
        }
    }

    async getOrderlines(userId) {
        try {
            const response = await axios.get(`${ORDERLINE_URL}?userId=${userId}`);
            return response
            
        } catch (error) {
            console.error(error.message)
            return null
        }
    }

    async removeOrderline(orderlineId) {
        try {
            const response = await axios.delete(`${ORDERLINE_URL}?orderlineId=${orderlineId}`);
            return response
            
        } catch (error) {
            console.error(error.message)
            return null
        }
    }

    async editOrderlineAmountById(orderlineId, amount) {
        try {
            const response = await axios.put(`${ORDERLINE_URL}?orderlineId=${orderlineId}&amount=${amount}`);
            return response
            
        } catch (error) {
            console.error(error.message)
            return null
        }
    }
}

export default new OrderlineService ()
