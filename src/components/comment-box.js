import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
  }
  handleChange(e){
    this.setState({comment: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }
  render() {
    return (
      <form className='comment-box' onSubmit={this.handleSubmit.bind(this)}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
        <br />
        <button type='submit'>Submit Comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox)
