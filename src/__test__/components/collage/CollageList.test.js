import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CollageList from "../../../components/collage/CollageList"
import collageReducer, { initialState } from "../../../redux/collageList/collageReducer"

describe('Whene collage details page is render', () => {
    let wrapper, mockStor;
    beforeEach(() => {
        mockStor = createStore(collageReducer, initialState)
        mockStor.dispatch = jest.fn();
        let collageList = [{id:1}]
        wrapper = mount(<Provider store={mockStor}><CollageList collagelist={collageList}/></Provider>)
    })
    
    it('Whene collage details showing.', () => {
        expect(wrapper.length).toBe(1)
    })

    it('Should submit button clicked', () => {

        let mock = jest.fn();
        let btns = wrapper.find("button");
        btns.at(0).simulate('click');
        expect(mock).toHaveBeenCalled()
    })
})

/*
 let wrapper, mockStor, history
    beforeEach(() => {
        history = createBrowserHistory();
        mockStor = createStore(collageReducer, { collageList: { collageList: [], massage: '' } })
        mockStor.dispatch = jest.fn();
        wrapper = mount(<Provider store={mockStor}><Router history={history}><CollageList /></Router></Provider>)
    })

    describe('Whene collage list empty', () => {
       
        it('Whene collage details showing.', () => {
            expect(wrapper.length).toBe(1)
        })
        it('Should no data in the list', () => {
            expect(wrapper.find('h3').text()).toBe('No data in the list')
        })
    })

    describe('Whene collage list is not empty', () => {
        let wrapper, mockStor;

        const item1 = {
            id: 1,
            collageName: "Indian Institute of Technology Delhi",
            rating: "4",
            location: "delhi"
        }

        it('Whene collage details showing.', () => {
            expect(wrapper.length).toBe(2)
        })

        it('Should collage list have 2 data.', () => {
            expect(mockStor.getState().collageList.collageList.length).toBe(2)
        })

        describe('should ragistration button is  clicked', () => {
            beforeEach(() =>{
                let btn = wrapper.find('button')
                btn.at(1).simulate('click')
            })
            it("Should page is redirect to collage-details", () =>{
                expect(history.location.pathname).toBe("collage-details/1")
            })
        })
    })
    */