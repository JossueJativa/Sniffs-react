import axios from "axios";
import { quotation_headerAPI, quotation_detailAPI } from "./api";

export const setQuotationHeader = async({ refresh, data }) => {
    try{
        const response = await axios.post(
            `${quotation_headerAPI}/?refresh=${refresh}`,
            {
                name: data.name,
                phone: data.phone,
                validation_days: data.validation_days,
                attention: data.attention ? data.attention : null,
                RUC: data.RUC,
                seller: data.seller,
                address: data.address,
                date: data.date,
                user: data.user,
            }
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
            {
                quantity: data.quantity,
                quotation_mensual: data.quotation_mensual,
                total: data.total,
                quotation_header: data.quotation_header,
                product: data.product
            }
        );
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getLengthQuotation = async({ refresh }) => {
    try{
        const response = await axios.get(`${quotation_headerAPI}/?refresh=${refresh}`);
        return response.data.length;
    } catch (error) {
        return error;
    }
}

export const searchQuotationfn = async({ refresh, id }) => {
    try{
        const response = await axios.get(`${quotation_headerAPI}/${id}/?refresh=${refresh}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const searchQuotationDetailfn = async({ refresh, id }) => {
    try{
        const response = await axios.get(`${quotation_detailAPI}/getDetailsHeader/?refresh=${encodeURIComponent(refresh)}&id=${encodeURIComponent(id)}`);
        return response.data;
    } catch (error) {
        return error;
    }
}