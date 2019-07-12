import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
	const slike = props.images.map(image => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image_list">{slike}</div>;
};

export default ImageList;
