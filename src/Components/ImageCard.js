import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { span: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpan);
	}

	setSpan = () => {
		const height = this.imageRef.current.clientHeight;
		const span = Math.ceil(height / 10 + 1);

		this.setState({ span: span });
	};

	render() {
		return (
			<div style={{ gridRowEnd: `span ${this.state.span}` }}>
				<img
					alt={this.props.image.description}
					src={this.props.image.urls.regular}
					ref={this.imageRef}
				/>
			</div>
		);
	}
}

export default ImageCard;
