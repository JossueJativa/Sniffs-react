import { billAPI, billDetailAPI } from "./api";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { deleteCartItem, getCart } from "./cartController";
import { createContract } from "./contractController";

export const createBill = async ({ refresh, bill }) => {
    const { name, address, email, phone } = bill;
    const decode = jwtDecode(refresh);

    const user_id = decode.user_id;
    try {
        const request = await axios.post(
            `${billAPI}/?refresh=${refresh}`,
            {
                user: user_id,
                name,
                address,
                email,
                phone
            }
        );

        const data = request.data;
        return data;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
};

export const getBillDetails = async ({ refresh, bill_id }) => {
    try {
        const request = await axios.get(
            `${billAPI}/${bill_id}/?refresh=${refresh}`
        );

        const data = request.data;
        return data;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export const userHistory = async({refresh}) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;
    try {
        const request = await axios.get(
            `${billDetailAPI}/?user_id=${user_id}&refresh=${refresh}`
        );

        const data = request.data;
        return data;
    } catch (error) {
        console.error(error);
        return { error: true };
    }
}

export const createBillDetail = async ({ refresh, bill_id }) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;

    try {
        // Obtener el carrito, asumiendo que getCart devuelve una lista de artículos
        const cartItems = await getCart({ refresh }) || [];

        // Asegúrate de que cartItems sea un array
        if (!Array.isArray(cartItems)) {
            throw new Error('El carrito no es un array');
        }

        // Enviar los detalles de la factura para cada artículo en el carrito
        const responses = await Promise.all(cartItems.map(async (item) => {
            const quantity = item.quantity || 0;
            const price = item.price || 0;
            const product = item.product_id || 0;
            
            const subtotal = (quantity * price).toFixed(2);
            const iva = (subtotal * 0.12).toFixed(2);
            const total = (parseFloat(subtotal) + parseFloat(iva)).toFixed(2);

            try {
                // Crear el contrato
                const contract = await createContract({ refresh, product_id: product, user_id });
                const contract_id = contract.id;

                // Realiza la solicitud para cada detalle de factura
                const response = await axios.post(
                    `${billDetailAPI}/?refresh=${refresh}&user_id=${user_id}`,
                    {
                        quantity,
                        price: subtotal,
                        iva,
                        total,
                        bill_header: bill_id,
                        product,
                        contract: contract_id,
                    }
                );

                // Eliminar el artículo del carrito después de crear el detalle de la factura
                await deleteCartItem({ refresh, cart_id: item.id });

                return response.data;
            } catch (contractError) {
                console.error('Error al crear el contrato:', contractError);
                throw new Error('Error al crear el contrato');
            }
        }));

        return responses;
    } catch (error) {
        console.error('Error al crear los detalles de la factura:', error);
        return { error: true };
    }
};