import React from 'react';
import cn from 'classnames';
import message from './utils/messages';
import { navigate } from './utils/constants';

let Toolbar = React.createClass({

  render() {
    let { messages, label } = this.props;

    messages = message(messages)

    return (
      <div className='row rbc-toolbar'>
          <div className='col-md-2'>
              {this.viewNamesGroup(messages)}
          </div>
          <div className='col-md-2'>
              <button
                  type='button'
                  onClick={this.navigate.bind(null, navigate.TODAY)}
              >
                  {messages.today}
              </button>
          </div>
          <div className='col-md-2'>
              <button
                  className='ion-arrow-left-b arrow'
                  type='button'
                  onClick={this.navigate.bind(null, navigate.PREVIOUS)}
              >
              </button>
          </div>
          <div className='col-md-4'>
              <span className='rbc-toolbar-label'>
                  { label }
              </span>
          </div>
          <div className='col-md-2'>
              <button
                  className='col-md-1 ion-arrow-right-b arrow'
                  type='button'
                  onClick={this.navigate.bind(null, navigate.NEXT)}
              >
              </button>
          </div>
      </div>
    );
  },

  navigate(action){
    this.props.onNavigate(action)
  },

  view(view){
    this.props.onViewChange(view)
  },

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length == 2) {
        return (
            <span className='rbc-btn-group'>
                <button type='button' key={viewNames[0]}
                    className={cn({'rbc-active': view === viewNames[0]})}
                    onClick={this.view.bind(null, viewNames[0])}
                >
                    {messages[viewNames[0]]}
                </button>
                <input type="checkbox" id="checkbox" className="switcher" checked={(!(view == viewNames[0]))?"checked":""} />
                <button type='button' key={viewNames[1]}
                    className={cn({'rbc-active': view === viewNames[1]})}
                    onClick={this.view.bind(null, viewNames[1])}
                >
                    {messages[viewNames[1]]}
                </button>
            </span>
        )
    }else if (viewNames.length > 1) {
      return (
        <span className='rbc-btn-group'>
            {viewNames.map(name =>
                <button type='button' key={name}
                    className={cn({'rbc-active': view === name})}
                    onClick={this.view.bind(null, name)}
                >
                    {messages[name]}
                </button>
            )}
        </span>
      )
    }
  }
});

export default Toolbar;
