import { mount } from "enzyme";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router";
import { createStore } from "redux";
import PageRouter from '../../../components/router/PageRouter';
import loginReducer from "../../../redux/login/loginReducer";

describe("when header page is render", () => {

  describe('Should PageRouter component is render with user info', () => {
    let wrapper, mockStor;
    beforeEach(() => {
      mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user" }], loginStatus: false, errorMsg: "" } })
      mockStor.dispatch = jest.fn();
      wrapper = mount(<Provider store={mockStor}><Router><Switch><PageRouter /></Switch></Router></Provider>)
    })
    it('Should component render', () => {
      expect(wrapper.length).toBe(1)
    })
  })
})