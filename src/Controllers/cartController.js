import axios from "axios";
import { cartAPI }  from './api';
import { jwtDecode } from "jwt-decode";

export const getCartNumber = async({ refresh }) => {
    const { user_id } = jwtDecode(refresh);
    try{
        const response = await axios.get(
            `${cartAPI}/getCartByUserId/?user_id=${user_id}&refresh=${refresh}`
        );
        const data = response.data;
        
        var quantity = 0;
        for (let i = 0; i < data.length; i++) {
            quantity += data[i].quantity;
        };

        return quantity;
    } catch (error) {
        return error;
    }
};

export const addProductToCart = async({ refresh, product_id }) => {
    const { user_id } = jwtDecode(refresh);
    try{
        const response = await axios.post(
            `${cartAPI}/?refresh=${refresh}`,
            {
                user: user_id,
                product: product_id,
                quantity: 1,
            }
        );

        return response.data;
    } catch (error) {
        return error;
    }
}

export const getCart = async({ refresh }) => {
    const { user_id } = jwtDecode(refresh);
    try{
        const response = await axios.get(
            `${cartAPI}/getCartByUserId/?user_id=${user_id}&refresh=${refresh}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

export const deleteCartItem = async({ refresh, cart_id }) => {
    try{
        const response = await axios.delete(
            `${cartAPI}/${cart_id}/?refresh=${refresh}`
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

export const increaseItemQuantity = async({ refresh, product_id, quantity }) => {
    try{
        const response = await axios.patch(
            `${cartAPI}/${product_id}/?refresh=${refresh}`,
            {
                quantity: quantity + 1,
            }
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

export const decreaseItemQuantity = async({ refresh, product_id, quantity }) => {
    try{
        const response = await axios.patch(
            `${cartAPI}/${product_id}/?refresh=${refresh}`,
            {
                quantity: quantity - 1,
            }
        );
        return response.data;
    } catch (error) {
        return error;
    }
}