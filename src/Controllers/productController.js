import { productAPI } from './api';
import axios from 'axios';

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