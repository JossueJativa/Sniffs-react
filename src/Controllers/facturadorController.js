import { billAPI } from "./api";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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