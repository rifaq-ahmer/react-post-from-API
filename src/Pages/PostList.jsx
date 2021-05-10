import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const PostList = () => {
	const [post, setPost] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setPost(data);
		};

		getData();
		// axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
		// 	const post = response.data;
		// 	console.log(post);
		// 	setPost(post);
		// });
	}, []);
	return (
		<div>
			<ul>
				{post.map((post) => (
					<Link to={`/post-description/${post.id}`}>
						<li>
							{console.log(post)}
							{post.title}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default PostList;
