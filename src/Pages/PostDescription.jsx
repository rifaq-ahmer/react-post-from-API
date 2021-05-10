import React, { useEffect, useState } from "react";
import axios from "axios";

const PostDescription = (props) => {
	const [singlePost, setSinglePost] = useState(null);
	const {
		match: {
			params: { id },
		},
	} = props;

	useEffect(() => {
		const getSinglePost = async () => {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			// console.log(res.data);
			setSinglePost(res.data);
		};

		getSinglePost();
	}, [id]);

	return (
		<div>
			<h1>Post with id {id} </h1>
			{singlePost && (
				<ul>
					<li> Title: {singlePost.title} </li>
					<li> Body: {singlePost.body} </li>
				</ul>
			)}
		</div>
	);
};
export default PostDescription;
