import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILD } from "./loginType";
import axios from 'axios';

const baseUrl = "http://localhost:3333";

export const loginUser = (data) => {
    return (dispatch => {
        axios.get(`${baseUrl}/userList/?userName=${data.userName}&password=${data.password}`).then(res => {
            if (res.status === 200 && res.data.length > 0) {
                dispatch(updateUserDetail(res.data));
            } else {
                dispatch(faildLoginUer())
            }
        }).catch(() => {
            dispatch(faildLoginUer())
        })
    })
}

export const faildLoginUer = () => {
    return {
        type: LOGIN_FAILD,
        payload: "User name or password invalid"
    }
}

export const updateUserDetail = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const LogoutUser = (data) => {
    return {
        type: LOGOUT,
        payload: data
    }
}
