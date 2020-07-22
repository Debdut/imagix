import { Component } from 'preact'

import Video from './video'

export default class App extends Component {
	state = {
		imageURL: null
	}

	setImageURL = (imageURL) => {
		this.setState({ imageURL })
	}

	render() {
		return (
			<div class='container'>
				<h1>Imagix</h1>
				<h4>Capture Face Data!</h4>
				<Video setImageURL={this.setImageURL} />
			</div>
		)
	}
}
