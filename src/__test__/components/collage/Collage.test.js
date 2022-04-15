import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CollageDetails from "../../../components/collage/CollageDetails"
import loginReducer from "../../../redux/login/loginReducer";
import Collage from "../../../components/collage/Collage";

describe('Whene collage details page is render', () => {

    let wrapper, mockStor;
    beforeEach(() => {

        mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user" }], loginStatus: false, errorMsg: "" } })
        mockStor.dispatch = jest.fn();
        wrapper = mount(<Provider store={mockStor}><Collage /></Provider>)
    })

    it('Whene collage details showing.', () => {
        expect(wrapper.length).toBe(1)
    })


    describe('Whene list data is render', () => {

        it('Whene list data is render html.', () => {
            const dataListText = renderer.create(<Collage />)
            expect(dataListText).toMatchSnapshot();
        })
        
        it('should render header list', () => {
            const wrapper = shallow(<Collage />);
            expect(wrapper.find('div').length).toBe(1);
        });
    })
})