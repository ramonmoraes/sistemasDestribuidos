import { h, Component } from 'preact';
import axios from 'axios';
import './style.css';
import Card from './components/card';

const jokeURL = 'http://localhost:7000';
const commentsURL = 'http://localhost:5000';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  };

  componentDidMount() {
    const fetchOptions = {
      mode: 'cors'
    };
    axios.get(jokeURL, fetchOptions)
      .then(res =>
        this.setState({
          jokes: res.data.docs
        })
      );
  }

  render() {
    const jokeList = this.state.jokes.map(j => <Card text={j.text} title={j.title} id={j.id} />)
    return (
      <div className="app">
        <h1>Projeto S.D</h1>
        <p> ... </p>
        {jokeList}
      </div>
    );
  }
}
