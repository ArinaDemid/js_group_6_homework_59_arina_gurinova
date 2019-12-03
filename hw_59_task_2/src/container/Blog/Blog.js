import React, {Component, Fragment} from 'react';
import './Blog.css';
import Joke from '../../components/Joke/Joke';
import Button from '../../components/Button/Button';

class Blog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {

    const apiRequest1 = await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      return response.json()
    });

    const apiRequest2 = await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      return response.json()
    });

    const apiRequest3 = await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      return response.json()
    });

    const apiRequest4 = await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      return response.json()
    });

    const apiRequest5 = await fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      return response.json()
    });

    let jokesState = [...this.state.jokes];
    jokesState = [];

    Promise.all([apiRequest1, apiRequest2, apiRequest3, apiRequest4, apiRequest5])
    .then(values => {
      for (let i = 0; i < 5; i++) {
        jokesState.push({id: values[i].id, value: values[i].value});
      }
      this.setState({jokes: jokesState});
      return jokesState;
    });
  }

render() {
  return (
    <Fragment>
      <section className="Jokes">
        {this.state.jokes.map(joke => (
          <Joke
            key={joke.id}
            title={joke.value}
          />
        ))}
      </section>
      <Button newJokes={() => this.componentDidMount()} flag={this.state.flag} />
    </Fragment>
    )
  }
}

export default Blog;
