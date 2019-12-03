import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <button className="Button" onClick={this.props.newJokes}>
        NEW JOKES
      </button>
    )
  }
}

export default Button;