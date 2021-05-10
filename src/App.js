import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import PostList from "./Pages/PostList";
import PostDescription from "./Pages/PostDescription";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/posts-list" component={PostList}></Route>
				<Route
					exact
					path="/post-description/:id"
					component={PostDescription}
				></Route>
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default App;
