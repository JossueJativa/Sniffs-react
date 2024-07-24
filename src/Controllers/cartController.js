import { cartAPI } from './api';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const getCartCuantity = async({ refresh }) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;
    let total = 0;

    try {
        const response = await axios.get(
            cartAPI + `/getCartByUserId/?user_id=${user_id}&refresh=${refresh}`
        );

        for (const quantity of response.data) {
            total += quantity.quantity;
        }
        return total;
    } catch (error) {
        console.error(error);
        return null;
    }
}