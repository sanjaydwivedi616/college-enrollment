import StudentListData from "../../../components/student/StudentListData";
import renderer from 'react-test-renderer';
import { mount, shallow} from "enzyme";


describe('Whene student list is render', () => {

    it('Whene list data is render html.', () => {
        const dataListText = renderer.create(<StudentListData />)
        expect(dataListText).toMatchSnapshot();
    })
    /* 
    it('should render header list', () => {
        const wrapper = shallow(<StudentListData />);
        expect(wrapper.find('.table').length).toBe(1);
      }); */
})