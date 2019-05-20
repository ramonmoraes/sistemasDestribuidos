import { h, Component } from 'preact';
import axios from 'axios';
import style from './style';


const jokeURL = 'http://localhost:7000';
const commentsURL = 'http://localhost:5000';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jokes: []
		};
	}

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
		console.log(this.state);
		return (
			<div class={style.home}>
				<h1>Home</h1>
			</div>
		);
	}
}
