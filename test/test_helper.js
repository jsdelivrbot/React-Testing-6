import jsdom from 'jsdom'
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../src/reducers'
import chai, {expect} from 'chai'
import cjq from 'chai-jquery'

//make testing eviro run like a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = _$(global.window);

//renderComponent helper
function renderComponent(ComponentClass, props, state) {
  //Render the component
  const renderedComponent = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );
  //Get the HTML
  return $(ReactDOM.findDOMNode(renderedComponent));
}

//simulate events helper
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

//set up chai-jq
cjq(chai, chai.util, $)

export { renderComponent, expect }
