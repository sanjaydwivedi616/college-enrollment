import ApplicationStatus from "../../../components/student/ApplicationStatus";
import renderer from 'react-test-renderer';
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import loginReducer, { initialState } from "../../../redux/login/loginReducer";

describe('Whene applicationstatus component is render', () => {

    describe('Should component is render with user info', () => {
        let wrapper, mockStor;
        beforeEach(() => {
            //history = createBrowserHistory();
            mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user"}], loginStatus: false, errorMsg: "" } })
            mockStor.dispatch = jest.fn();
            wrapper = mount(<Provider store={mockStor}><ApplicationStatus /></Provider>)
        })
        it('Should component render', () => {
            expect(wrapper.length).toBe(1)
        })
     })
     
    
    const res = [{
            userName: "rohit",
            firstName: "rohit",
            lastName: "rohit"
        }]

    it('Whene list data is render html.', () => {
        const dataListText = renderer.create(<ApplicationStatus />)
        expect(dataListText).toMatchSnapshot();
    })

    it('should render a proper table data', () => {
        const mock = new MockAdapter(axios);
        mock.onGet('http://localhost:3333/studentRagistration/?userName=test').reply(200, res.data);
        const component = mount(<ApplicationStatus />);
    });

})