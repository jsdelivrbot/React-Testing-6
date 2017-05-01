import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app'

// Descrbe groups similar tests
describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  })
  it('Shows a comment-box component', () => {
    expect(component.find('.comment-box')).to.exist
  })
  it('Shows list of comments', () => {
    expect(component.find('.comment-list')).to.exist;
  })
});
