import { Component } from 'preact'

import Video from './video'
import Image from './image'

export default class App extends Component {
	state = {
		imageURL: null
	}

	setImageURL = (imageURL) => {
		this.setState({ imageURL })
	}

	unsetImageURL = () => {
		this.setState({ imageURL: null })
	}

	render({}, { imageURL }) {
		const mode = imageURL
			? <Image imageURL={imageURL} unsetImageURL={this.unsetImageURL} />
			: <Video setImageURL={this.setImageURL} />
		return (
			<div class='container'>
				<h1 class='m-10'>Imagix</h1>
				{mode}
			</div>
		)
	}
}
