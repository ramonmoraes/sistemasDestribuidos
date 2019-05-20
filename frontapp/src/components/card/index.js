import { h, Component } from 'preact';
import axios from 'axios';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    }
  }

  handleClick = (ev) => {
    const { id } = this.props;
    const commentsURL = `http://localhost:5000/doc/${id}`;
    const fetchOptions = {
      mode: 'cors'
    };

    axios.get(commentsURL, fetchOptions)
      .then(res => this.setState({ comments: res.data }));
  }
  renderComments = () => {
    const { comments } = this.state;
    return comments.length !== 0
      ? (<ul>
        {comments.map(text => <li> {text} </li>)}
      </ul>)
      : <div> Clique para carregar os comentarios ...</div>;

  }

  render() {
    const { title, text } = this.props;
    return (
      <div className="card" onClick={this.handleClick}>
        <h2>
          {title}
        </h2>
        <p>
          {text}
        </p>
        {this.renderComments()}
      </div>
    );
  }
}
