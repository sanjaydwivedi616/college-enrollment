import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer from "../../../redux/login/loginReducer";
import LoginContainer from '../../../container/login/LoginContainer';

describe('When loader page is render', () => {
    describe('Should user login with valid information.', () => {
        let wrapper, mockStor;
        beforeEach(() => {
          mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user" }], loginStatus: false, errorMsg: "" } })
          mockStor.dispatch = jest.fn();
          wrapper = mount(<Provider store={mockStor}><LoginContainer /></Provider>)
        })
        it('Should component render', () => {
          expect(wrapper.length).toBe(1)
        })
      })

    describe('Should user login is faild', () => {
        let wrapper, mockStor;
        beforeEach(() => {
          mockStor = createStore(loginReducer, { user: { userInfo: [], loginStatus: false, errorMsg: "User name or password invalid" } })
          mockStor.dispatch = jest.fn();
          wrapper = mount(<Provider store={mockStor}><LoginContainer /></Provider>)
        })
        it('Should component render', () => {
          expect(wrapper.length).toBe(1)
        })
      })
})
