import React from "react";

class Searchbar extends React.Component {
	state = { term: "" };

	onFormSubmit = e => {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment" style={{ backgroundColor: "#ccc" }}>
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field" style={{ textAlign: "center" }}>
						<label style={{ fontSize: "1.4em" }}>
							<span style={{ color: " #4285F4" }}>G</span>
							<span style={{ color: "#DB4437" }}>o</span>
							<span style={{ color: "#F4B400" }}>o</span>
							<span style={{ color: " #4285F4" }}>g</span>
							<span style={{ color: "#0F9D58" }}>l</span>
							<span style={{ color: "#DB4437" }}>y</span>
							.images
						</label>
						<input
							onChange={e =>
								this.setState({ term: e.target.value })
							}
							value={this.state.term}
							type="text"
							placeholder="Search for images..."
							style={{ fontWeight: "bold" }}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default Searchbar;
