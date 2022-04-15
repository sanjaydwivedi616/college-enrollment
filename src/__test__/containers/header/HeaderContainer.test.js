import HeaderContainer from '../../../container/header/HeaderContainer';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer from "../../../redux/login/loginReducer";


describe("when header page is render", () => {

    describe('Should header component is render with user info', () => {
        let wrapper, mockStor;
        beforeEach(() => {
            mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user" }], loginStatus: true, errorMsg: "" } })
            mockStor.dispatch = jest.fn();
            wrapper = mount(<Provider store={mockStor}><HeaderContainer /></Provider>)
        })

        it('Should component render', () => {
            expect(wrapper.length).toBe(1)
        })

    })

    describe('Should header component is render with invalide user name and password', () => {
        let wrapper, mockStor;
        beforeEach(() => {
            mockStor = createStore(loginReducer, { user: { userInfo: [], loginStatus: false, errorMsg: "User name or password invalid" } })
            mockStor.dispatch = jest.fn();
            wrapper = mount(<Provider store={mockStor}><HeaderContainer /></Provider>)
        });

        it('Should component is render with error massage', () => {
            expect(wrapper.length).toBe(1)
        })
    })
})
