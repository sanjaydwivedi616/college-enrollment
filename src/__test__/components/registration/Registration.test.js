import { mount, shallow } from "enzyme";
import Registration from "../../../components/registration/Registration";


describe('Whene StudentRagistrationForm component is render', () => {


    describe('Should component is render with user info', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = mount(<Registration />)
        })

        it('Should component render', () => {
            expect(wrapper.length).toBe(1)
        })

        it('Should input feild render', () => {
            const event = {
                target: {
                    value: 'this is user Name'
                }
            }
            wrapper.find('input').at(0).simulate('change', event);
            expect(event.target.value).toEqual('this is user Name');
        })

        it('should call onChange of password feild', () => {
            const event = {
                target: { value: 'password' }
            };
            wrapper.find('input').at(1).simulate('change', event);
            expect(event.target.value).toEqual('password');
        });

        it('should call onChange of email feild', () => {
            const event = {
                target: { value: 'test@gmail.com' }
            };
            wrapper.find('input').at(2).simulate('change', event);
            expect(event.target.value).toEqual('test@gmail.com');
        });
    })

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