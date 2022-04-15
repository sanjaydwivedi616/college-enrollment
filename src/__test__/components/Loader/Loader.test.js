import renderer from 'react-test-renderer';
import Loader from '../../../components/loader/Loader';

describe('When loader page is render', () => {
  it('When Loader is render', () => {
    const loaderText = renderer.create(<Loader />)
    expect(loaderText).toMatchSnapshot();
  });
})
