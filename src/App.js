import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Category, Detail, Checkout, Blog, BlogDetail } from "./pages";

import "./assets/styles/main.scss";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/category" component={Category} />
					<Route path="/detail" component={Detail} />
					<Route path="/blog" component={Blog} />
					<Route path="/blog-detail" component={BlogDetail} />
					<Route path="/checkout" component={Checkout} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
