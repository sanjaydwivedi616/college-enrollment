import StudentRagistrationForm from "../../../components/student/StudentRagistrationForm";
import { mount } from "enzyme";


describe('Whene StudentRagistrationForm component is render', () => {

    describe('Should component is render with user info', () => {
        let wrapper;
        beforeEach(() => {
            //history = createBrowserHistory();
            // mockStor = createStore(loginReducer, { user: { userInfo: [{ "userName": "rohit", "userType": "user"}], loginStatus: false, errorMsg: "" } })
            // mockStor.dispatch = jest.fn();
            wrapper = mount(<StudentRagistrationForm />)
        })

        it('Should component render', () => {
            expect(wrapper.length).toBe(1)
        })

        it('Should submit button clicked', () => {
            let mock = jest.fn();
            let btns = wrapper.find("button");
            console.log(wrapper.debug());
            btns.at(0).simulate('click');
            expect(mock).toHaveBeenCalled()
        })
       
    })

   /*  describe('Should student is apply for collage Ragistration', () => {
        beforeEach(() => {
            let mock = new MockAdapter(axios);
            let mockData = [
                {
                    userName: "rohit",
                    firstName: "rohit",
                    lastName: "rohit",
                    email: "rohit@gmail.com",
                    contact: "3211234211",
                    tenthPercentage: "12",
                    twelvePercentage: "12",
                    selectCourse: "Electrical/electronic engineering",
                    status: "Approved",
                    id: 1
                }
            ]
            mock.onGet('/studentRagistration').reply(200, mockData);
        });

        it('renders events', () => {
            let component = shallow(<StudentRagistrationForm />);

            component.update();

            expect(component.find(EventRow).length).toEqual(1);
        })
    }) */


})

/* describe('Whene StudentRagistrationForm component is render', () => {

    it('Should component render', () => {
        const history = createMemoryHistory(['/', '/application-status']);
        const dataListText = renderer.create(
            <Route history={history}>
                <Switch>
                    <Route exact path='/' component={StudentRagistrationForm} />
                    <Route path='/application-status' render=> <div></div>StudentRagistrationForm} />
                </Switch>
                <StudentRagistrationForm />
            </Route>
        )
        expect(dataListText).toMatchSnapshot();
    })
}) */


/*
 it('Whene list data is render html.', () => {
        const dataListText = renderer.create(<StudentRagistrationForm />)
        expect(dataListText).toMatchSnapshot();
    })

    let wrapper, mockStor, history
    beforeEach(() => {
        history = createBrowserHistory();
        mockStor.dispatch = jest.fn();
        wrapper = mount(<Router history={history}><StudentRagistrationForm /></Router>)
    })

    describe('Whene StudentRagistrationForm component is render', () => {

        describe('should ragistration button is  clicked', () => {
            beforeEach(() => {
                let btn = wrapper.find('button')
                btn.at(0).simulate('click')
            })
            it("Should page is redirect to collage-details", () => {
                expect(history.location.pathname).toBe("/application-status")
            })
        })
    })
    */