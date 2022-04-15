import renderer from 'react-test-renderer';
import App from '../../App';

describe('When App js is ', () => {

  it('When ', () => {
    const headerText = renderer.create(<App></App>)
    expect(headerText).toMatchSnapshot();
  });

})