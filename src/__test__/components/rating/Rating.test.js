import { mount } from "enzyme";
import Rating from "../../../components/rating/Rating"



describe('When rating page is render', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(<Rating />)
    })
    it('should rating will render', () => {
      expect(wrapper).not.toBeNull();
    });
  })