import { faildLoginUer, loginUser, LogoutUser, updateUserDetail } from "../../../../redux/login/loginAction"
import { LOGIN_FAILD, LOGIN_SUCCESS, LOGOUT } from "../../../../redux/login/loginType"
import MockAdapter from "axios-mock-adapter"
import axios from "axios"

describe('When user is trying to login', () => {
    /*  let mock;
     beforeEach(() => {
         mock = new MockAdapter(axios)
     })
     it('Should Get User is successfully login', () => {
         const res = [{ id: "jon", password: "jon" }]
         const data = {userName : "test", password : "test"}
         mock.onGet(`http://localhost:3333/userList/?userName=${data.userName}&password=${data.password}`).reply(200, res);
 
         let actionfn = loginUser(res.data);
         let dispatch = jest.fn();
          updateUserDetail(res.data)
         let response = actionfn(dispatch);
         expect(dispatch.mock.calls).toEqual(res.data)
     })  */


    describe('When it is sucess', () => {
        let mock;
        beforeEach(() => {
            mock = new MockAdapter(axios)
        })

        it('should return logged in user data on sucess', () => {
            const res = [{
                id: 1,
                userName: "test",
                password: "test",
                userType: "user"
            }];
            const data = {
                userName: 'test',
                password: 'test'
            }
            mock.onGet(`http://localhost:3333/userList?userName=${data.userName}&password=${data.password}`).reply(200, res);
           
            let actionfn = loginUser(data);
            let dispatch = jest.fn();
            actionfn(dispatch);
            expect(jest.fn()).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch.mock.calls[0]).toEqual([updateUserDetail(res)]);
            
        });
    });




    describe('Whene user is trying to login', () => {

        it('When user is login and status is success.', () => {
            const data = { id: "test123", password: "test123" };
            const action = {
                type: LOGIN_SUCCESS,
                payload: data
            }
            const result = updateUserDetail(data);
            expect(result).toEqual(action)
        })

        it('When user login is faild.', () => {
            const data = "User name or password invalid";
            const action = {
                type: LOGIN_FAILD,
                payload: data
            }
            const result = faildLoginUer();
            expect(result).toEqual(action);
        })

        it('When user is logout', () => {
            const result = LogoutUser()
            expect(result).toEqual({ type: LOGOUT })
        })

        it('When user is logout', () => {
            const data = false;
            const action = {
                type: LOGOUT,
                payload: data
            }
            const result = LogoutUser(data)
            expect(result).toEqual(action)
        })
    })
})
