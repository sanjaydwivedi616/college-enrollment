import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILD } from "./loginType"

export let loginData = {
    userInfo : {},
    loginStatus: false,
    errorMsg: ""
}

const loginReducer = (state = loginData, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userInfo  : action.payload,
                loginStatus: true
            }
        case LOGIN_FAILD:
            return {
                ...state,
                errorMsg: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                loginStatus: action.payload,
                errorMsg: ""
            }
        default:
            return state
    }
}

export default loginReducer;
