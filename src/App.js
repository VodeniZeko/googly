import React from "react";
import "./App.css";
import unsplash from "./Components/unsplash";
import styled from "styled-components";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async term => {
		const response = await unsplash.get("/search/photos", {
			params: { query: term, per_page: 50, order_by: "popular" }
		});
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div>
				<Search className="ui container" style={{ width: "50%" }}>
					<SearchBar onSearchSubmit={this.onSearchSubmit} />
				</Search>
				<div className="ui container">
					<ImageList images={this.state.images} />
				</div>
			</div>
		);
	}
}

export default App;

const Search = styled.a`
	 {
		position: relative;
		margin-top: 10em;
		-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
			0 0 40px rgba(0, 0, 0, 0.1) inset;
		-moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
			0 0 40px rgba(0, 0, 0, 0.1) inset;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
			0 0 40px rgba(0, 0, 0, 0.1) inset;
	}
	:before,
	:after {
		z-index: -1;
		-webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
		-moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
		top: 10px;
		bottom: 10px;
		left: 0;
		right: 0;
		-moz-border-radius: 100px / 10px;
		border-radius: 100px / 10px;
	}
	:after {
		right: 10px;
		left: auto;
		-webkit-transform: skew(8deg) rotate(3deg);
		-moz-transform: skew(8deg) rotate(3deg);
		-ms-transform: skew(8deg) rotate(3deg);
		-o-transform: skew(8deg) rotate(3deg);
		transform: skew(8deg) rotate(3deg);
	}
`;
