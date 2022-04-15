import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CollageDetails from "../../../components/collage/CollageDetails"
import loginReducer from "../../../redux/login/loginReducer";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe('Whene collage details page is render', () => {

    const userType = "user";
    const id = 1;
    const collage = {
        collageName: "Bangalore Institute of Technology Bangalore",
        rating: "5",
        location: "bangalore",
        openYear: 2007,
        collageInfo: "was established in 1958 and is the second IIT on the list after IIT Delhi. IIT Bombay or IITB is ranked 4th in the NIRF 2020 rankings for its overall performance. IITB is best known for its CSE programs and for the same the institute has been ranked 3rd in the engineering category by the NIRF 2020.",
        Scholarships: "No",
        id: 36,
        img: "https://images.adsttc.com/media/images/51c3/5385/b3fc/4b58/1f00/00b1/large_jpg/228-05.jpg?1371755381",
        hostal: "yes",
        lib: "yes",
        sport: "yes"
    }

    let wrapper, history;
    beforeEach(() => {

        history = createMemoryHistory();
        wrapper = mount(
            <Router history={history}><CollageDetails userType={userType} id={id} collage={collage} /></Router>
        )
    })


    it('Whene collage details showing.', () => {
        expect(wrapper.length).toBe(1)
    })

    let mock;

    it('Should submit button clicked', () => {
        mock = jest.fn();
        let btns = wrapper.find("button");
        console.log(wrapper.debug());
        btns.at(0).simulate('click');
        expect(mock).toHaveBeenCalled()
    })

    it('if button is clicked redirect to studant-ragistration-form', () => {
        expect(history.location.pathname).toBe("studant-ragistration-form/1");
    })

})