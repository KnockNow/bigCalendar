import React from 'react';
import Api from './Api';
import Intro from './Intro.md';
import cn from 'classnames';
import { render } from 'react-dom';

import localizer from 'react-big-calendar/localizers/globalize';
import globalize from 'globalize';

localizer(globalize);

import 'react-big-calendar/less/styles.less';
import './styles.less';
import './prism.less';

let demoRoot = 'https://github.com/intljusticemission/react-big-calendar/tree/master/examples/demos'

const Example = React.createClass({
  getInitialState(){
    return {
      selected: 'basic'
    };
  },

  render() {
    let selected = this.state.selected;
    let Current = {
      basic: require('./demos/basic'),
    }[selected];

    return (
      <div className='app'>
          <div className='examples contain'>
              <div className='example'>
                  <Current className='demo' />
              </div>
          </div>
      </div>
    );
  },

  select(selected, e){
    e.preventDefault();
    this.setState({ selected })
  }
});

render(<Example/>, document.getElementById('root'));
