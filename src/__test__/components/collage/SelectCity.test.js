import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import SelectCity from "../../../components/collage/SelectCity";
import collageReducer from "../../../redux/collageList/collageReducer";

describe('Whene select city page is rendering', () => {

    describe('Should header component is render with user info', () => {
        let wrapper, mockStor;

        beforeEach(() => {
            mockStor = createStore(collageReducer, {
                collageList: [{ collageName: "iit Delhi", rating: "4", location: "delhi", }],
                massage: ''
            })

            mockStor.dispatch = jest.fn();
            wrapper = mount(<Provider store={mockStor}><SelectCity /></Provider>)
        })
        it('Should component render', () => {
            expect(wrapper.length).toBe(1)
        })
    })



    describe('Whene select city page is rendering', () => {
        let wrapper, mockStor;
        beforeEach(() => {
            mockStor = createStore(getCollageList, initialState)
            mockStor.dispatch = jest.fn();
            wrapper = mount(<SelectCity />)
        });

        it('Whene select city.', () => {
            expect(wrapper.length).toBe(1)
        })
    });

    it('should select correct select value', () => {
        const wrapper = mount(<SelectCity value='delhi' onChange={jest.fn()} />)
        expect(wrapper.find('select').props().value).toBe('delhi')
    })
})