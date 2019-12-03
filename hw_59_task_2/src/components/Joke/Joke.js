import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {

render() {
  return (
    <div className="Joke">
      <div className="Joke_text">{this.props.title}</div>
    </div>
    )
  }
}

export default Joke;