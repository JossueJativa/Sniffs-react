import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { contractAPI } from "./api";

export const createContract = async ({ refresh, product_id, user_id }) => {
    var today = new Date();
    today.setDate(today.getDate() + 5);
    var expires = new Date();
    expires.setDate(today.getDate() + 30);

    // Poner fechas en formato yyyy-mm-dd sin la hora
    today = today.toISOString().split('T')[0];
    expires = expires.toISOString().split('T')[0];

    try {
        const request = await axios.post(
            `${contractAPI}/?refresh=${refresh}`,
            {
                product: product_id,
                user: user_id,
                date_start: today,
                date_end: expires
            }
        );

        const data = request.data;
        return data;
    } catch {
        return { error: true };
    }
}

export const getContract = async ({ refresh }) => {
    const decode = jwtDecode(refresh);
    const user_id = decode.user_id;

    try {
        const request = await axios.get(
            `${contractAPI}/?user_id=${user_id}&refresh=${refresh}`
        );

        const data = request.data;
        return data;
    } catch {
        return { error: true };
    }
}