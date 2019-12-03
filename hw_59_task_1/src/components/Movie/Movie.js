import React, {Component} from "react";
import './Movie.css';

class Movie extends Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.name !== this.props.name;
  }

  render() {
    return (
      <div className='Movie'>
        <input className='MovieName' 
          value={this.props.name} 
          onChange={this.props.change} 
        />
        <button className='MovieButton' type='button' onClick={this.props.remove}>
          <i className="far fa-times-circle"></i>
        </button>
      </div>
    )
  }
};

export default Movie;