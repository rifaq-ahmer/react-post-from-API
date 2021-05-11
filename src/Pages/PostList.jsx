import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const PostList = () => {
	const [post, setPost] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getData = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.typicode.com/posts"
			);
			setPost(data);
		};
		getData();
	}, []);

	const filteredPost = post.filter(({ title }) =>
		title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div>
			<input
				type="text"
				id="search"
				name="search"
				onChange={(evt) => setSearch(evt.target.value)}
				placeholder="Search for Posts"
				value={search}
			/>
			<ul>
				{filteredPost.map(({ title, id }) => (
					<Link to={`/post-description/${id}`} key={id}>
						<li>{title}</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default PostList;
