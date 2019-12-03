import React, {Component} from 'react';
import AddMovie from './components/AddMovie/AddMovie';
import Movie from './components/Movie/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import nanoid from 'nanoid';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: this.getLocalStorage(),
      newMovie: {id: nanoid(), name: ''},
    };
  }

  getLocalStorage = () => {
    if(!localStorage.getItem('movies')) {
      localStorage.setItem('movies', JSON.stringify([]));
      return [];
    } 
    else {
      return JSON.parse(localStorage.getItem('movies'));
    }
  };

  removeMovie = id => {
    const index = this.state.movies.findIndex(p => p.id === id);
    const movies = [...this.state.movies];
    movies.splice(index, 1);
    
    this.setState({movies});

    let moviesLocal = [];
    moviesLocal = JSON.parse(localStorage.getItem('movies'));
    moviesLocal.splice(index, 1);

    localStorage.setItem('movies', JSON.stringify(moviesLocal));  
  };

  writeNewMovie = event => {
    let newMovie = {...this.state.newMovie};
    newMovie['name'] = event.target.value;
    this.setState({newMovie});
  };

  addMovie = event => {
    event.preventDefault();
    let newMovie = {...this.state.newMovie};

    const movies = [...this.state.movies];
    movies.push(newMovie);
    this.setState({movies, newMovie: {id: nanoid(), name: ''}});

    let moviesLocal = [];
    moviesLocal = JSON.parse(localStorage.getItem('movies'));

    moviesLocal.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(moviesLocal));  
  };

  changeMovie =(event, id) => {
    const index = this.state.movies.findIndex(p => p.id === id);
    const movie = {...this.state.movies[index]};
    movie.name = event.target.value;

    const movies = [...this.state.movies];
    movies[index] = movie;
    this.setState({movies});

    localStorage.setItem('movies', JSON.stringify(movies));  
  };

  render() {

    return (
      <div className='App'>
        <AddMovie add={this.writeNewMovie} 
          submit={this.addMovie} 
          name={this.state.newMovie.name}
        />
        <p className='AppTitle'>To watch list: </p>
        {
          this.state.movies.map(movie => {
            return <Movie 
              state={this.state.movies[movie.id]}
              key={movie.id}
              change={event => this.changeMovie(event, movie.id)}
              id={movie.id}
              name={movie.name}
              remove={() => this.removeMovie(movie.id)}
            />
          })
        }
      </div>
    )
  }
};

export default App;
