import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CollageDetailsContainer from "../../../container/collage/CollageDetailsContainer"
import loginReducer from "../../../redux/login/loginReducer";

describe('Whene collage details page is render', () => {

    let wrapper, mockStor;
    beforeEach(() => {
        mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user" }], loginStatus: false, errorMsg: "" } })
        mockStor.dispatch = jest.fn();
        wrapper = mount(<Provider store={mockStor}><CollageDetailsContainer /></Provider>)
    })

    it('Whene collage details showing.', () => {
        expect(wrapper.length).toBe(1)
    })

})