
import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILD } from "../../../../redux/login/loginType"
import loginReducer, { loginData } from "../../../../redux/login/loginReducer"

describe('When user is login', () => {
    describe('When user is login with valide user name and password', () => {
        const data = [{
            id: "rohit",
            userType: "user"
        }]

        it("Should return updated login data", () => {
            const action = {
                type: LOGIN_SUCCESS,
                payload: data
            }

            const loginDetails = {
                userInfo: data,
                loginStatus: true,
                errorMsg: ""
            }

            const result = loginReducer(loginData, action)
            expect(result).toEqual(loginDetails)
        });

        it("When user is login with invalide user name and password.", () => {
            const errMsg = "User name or password invalid"

            const action = {
                type: LOGIN_FAILD,
                payload: errMsg
            }
            
            const loginDetails = {
                userInfo: {},
                loginStatus: false,
                errorMsg: errMsg
            }
            const result = loginReducer(loginData, action)
            expect(result).toEqual(loginDetails)
        })
    });

    describe('When user is logout', () => {
        it("Should user is logout", () => {
            const action = {
                type: LOGOUT,
                payload: false
            }
            const loginDetails = {
                userInfo: {},
                loginStatus: false,
                errorMsg: ""
            }

            const result = loginReducer(loginData, action)
            expect(result).toEqual(loginDetails)
        })
    })

})
