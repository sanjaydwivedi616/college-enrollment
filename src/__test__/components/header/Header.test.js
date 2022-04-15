import Header from '../../../components/header/Header';
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer from "../../../redux/login/loginReducer";
import { LogoutUser } from '../../../redux/login/loginAction';
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from 'react-router-dom';

describe("when header page is render", () => {

  describe('Should header component is render with user info', () => {
    let wrapper, mockStor;
    beforeEach(() => {
      mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user" }], loginStatus: true, errorMsg: "" } })
      mockStor.dispatch = jest.fn();
      wrapper = mount(<Provider store={mockStor}><Header /></Provider>)
    })

    it('Should component render', () => {
      expect(wrapper.length).toBe(1)
    })
  })

  describe('Should header component is render with invalide user name and password', () => {
    let wrapper, mockStor, history;

    beforeEach(() => {
      history = createMemoryHistory();
      mockStor = createStore(loginReducer, { user: { userInfo: [], loginStatus: false, errorMsg: "User name or password invalid" } })
      mockStor.dispatch = jest.fn();
      wrapper = mount(<Provider store={mockStor}><Router history={history}><Header /></Router></Provider>)
    });

    it('Should component is render with error massage', () => {
      expect(wrapper.length).toBe(1)
    });

    it('if login status is false', () => {
      expect(history.location.pathname).toBe("/");
    })

    describe('when click on logout button', () => {

      beforeEach(() => {
        let btns = wrapper.find("Link")
        btns.at(3).simulate('click')
      });

      it('Button action have been called ', () => {
        expect(mockStor.dispatch).toHaveBeenCalled()
      })

      it('Button action have been called with action type', () => {
        expect(mockStor.dispatch).toHaveBeenCalled(LogoutUser(false))
      })
    })

  })

})
