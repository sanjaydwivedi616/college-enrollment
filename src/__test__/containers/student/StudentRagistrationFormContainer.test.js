import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer, { initialState } from "../../../redux/login/loginReducer";
import { mount } from "enzyme";
import StudentRagistrationFormContainer from "../../../container/student/StudentRagistrationFormContainer";


describe('Whene StudentRagistrationForm container component is render', () => {

     describe('Should component is render with user info', () => {
        let wrapper, mockStor;
        beforeEach(() => {
            mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user"}], loginStatus: false, errorMsg: "" } })
            mockStor.dispatch = jest.fn();
            wrapper = mount(<Provider store={mockStor}><StudentRagistrationFormContainer /></Provider>)
        })
        it('Should component render', () => {
            expect(wrapper.length).toBe(1)
        })
     })
   
})