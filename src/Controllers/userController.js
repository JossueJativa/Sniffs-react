import axios from "axios";
import { userAPI } from "./api";

export const getUser = async({ user_id, refresh }) => {
    try {
        const response = await axios.get(
            userAPI + `/${user_id}/?refresh=${refresh}`
        );
    
        if (response.status === 200) {
            return response.data;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error(error);
        return null;
    }
};

export const login = async({ username, password }) => {
    try {
        const response = await axios.post(
            userAPI + '/login/',
            { username, password }
        );
        
        if (response.status === 200) {
            return response.data;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error(error);
        return null;
    }
};

export const logout = async({ user_id, refresh }) => {
    try {
        const response = await axios.post(
            userAPI + '/logout/',
            { user_id, refresh }
        );
    
        if (response.status === 200) {
            return response.data;
        }
        else if (response.status === 400 ) {
            console.log(`Error + ${response.data.error}`);
            if (response.data.error === "Refresh token is expired.") {
                return response.data;
            }
        }
    }
    catch (error) {
        console.error(error);
        return null;
    }
};

export const register = async({ name, email, password, confirm, phone, identity }) => {
    if (password !== confirm) {
        return null;
    }

    try {
        const response = await axios.post(
            userAPI + '/',
            { username: name, email, password, phone, identity }
        );

        console.log(response);
    
        if (response.status === 201) {
            return response.data;
        }
        else {
            console.log(response);
            return null;
        }
    }
    catch (error) {
        console.error(error);
        return null;
    }
};