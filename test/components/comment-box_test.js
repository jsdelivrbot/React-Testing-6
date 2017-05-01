import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment-box.js';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });
  it('Has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });
  it('Has a text area',() => {
    expect(component.find('textarea')).to.exist;
  });
  it('Has a button', () => {
    expect(component.find('button')).to.exist;
  });
  describe('Text-Area Functionality', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment')
    });
    it('Shows text that is entered', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });
    it('Clears text after comment submit', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  })
})
