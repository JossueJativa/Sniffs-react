import axios from "axios";
import { quotation_headerAPI, quotation_detailAPI } from "./api";

export const setQuotationHeader = async({ refresh, data }) => {
    try{
        const response = await axios.post(
            `${quotation_headerAPI}/?refresh=${refresh}`,
            data
        );
        return response.data.id;
    } catch (error) {
        return error;
    }
};

export const setQuotationDetail = async({ refresh, data }) => {
    try{
        const response = await axios.post(
            `${quotation_detailAPI}/?refresh=${refresh}`,
            data
        );
        return response.data;
    } catch (error) {
        return error;
    }
}