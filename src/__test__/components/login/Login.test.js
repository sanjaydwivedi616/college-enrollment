import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Login from "../../../components/login/Login";
import loginReducer from "../../../redux/login/loginReducer";

describe('Whene Login component is render with login details data.', () => {

    describe('Should user login with valid information.', () => {
        let wrapper, mockStor;
        beforeEach(() => {
          mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user" }], loginStatus: false, errorMsg: "" } })
          mockStor.dispatch = jest.fn();
          wrapper = mount(<Provider store={mockStor}><Login /></Provider>)
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
          wrapper = mount(<Provider store={mockStor}><Login /></Provider>)
        })
        it('Should component render', () => {
          expect(wrapper.length).toBe(1)
        })
      })
})