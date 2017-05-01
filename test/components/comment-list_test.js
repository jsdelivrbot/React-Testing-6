import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList', () => {
  let component;
  beforeEach(() => {
    const props = {comments: ['hello1', 'i am a comment']};
    component = renderComponent(CommentList, null, props);
  });
  it('Shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });
  it('Shows every comment provided', () => {
    expect(component).to.contain('hello1');
    expect(component).to.contain('i am a comment');
  });
});
