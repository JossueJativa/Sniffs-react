import { productAPI } from './api';
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