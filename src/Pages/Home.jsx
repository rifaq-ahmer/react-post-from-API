import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<Link to="/posts-list">
				<button>Got to Post</button>
			</Link>
		</div>
	);
};

export default Home;
