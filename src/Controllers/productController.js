import { cartAPI, productAPI } from './api';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const getProduct = async({ product_id }) => {
    try {
        const response = await axios.get(
            productAPI + `/${product_id}/`
        );

        return response.data;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const addProduct = async({ product_id, refresh }) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;

    try {
        const response = await axios.post(
            cartAPI + '/?refresh=' + refresh,
            {
                user: user_id,
                product: product_id,
                quantity: 1
            }
        );

        if (response.status === 200) {
            return response.data;
        }

        return null;
    } catch (error) {
        return null;
    }
}