import socket from './websocket';
import { jwtDecode } from 'jwt-decode';

export const addProduct = ({ product_id, refresh }) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;

    return new Promise((resolve, reject) => {
        socket.send(JSON.stringify({
            action: 'add',
            user: user_id,
            product: product_id,
            quantity: 1,
            refresh
        }));

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.action === 'add' && data.user === user_id) {
                resolve(data);
            }
        };

        socket.onerror = (error) => {
            reject(error);
        };
    });
};


export const getCartQuantity = ({ refresh }) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;

    return new Promise((resolve, reject) => {
        socket.send(JSON.stringify({
            action: 'getQuantity',
            user: user_id,
            refresh
        }));

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.action === 'getQuantity' && data.user === user_id) {
                let total = 0;
                for (const item of data.cart) {
                    total += item.quantity;
                }
                resolve(total);
            }
        };

        socket.onerror = (error) => {
            reject(error);
        };
    });
};


export const getCart = ({ refresh }) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;

    return new Promise((resolve, reject) => {
        socket.send(JSON.stringify({
            action: 'getCart',
            user: user_id,
            refresh
        }));

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.action === 'getCart' && data.user === user_id) {
                resolve(data.cart);
            }
        };

        socket.onerror = (error) => {
            reject(error);
        };
    });
};


export const deleteCartItem = ({ refresh, cart_id }) => {
    return new Promise((resolve, reject) => {
        socket.send(JSON.stringify({
            action: 'delete',
            cart_id,
            refresh
        }));

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.action === 'delete' && data.cart_id === cart_id) {
                resolve(data);
            }
        };

        socket.onerror = (error) => {
            reject(error);
        };
    });
};
