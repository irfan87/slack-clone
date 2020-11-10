import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";

import "./App.css";

function App() {
	return (
		<div className="app">
			<Router>
				{/* header */}
				<Header />
				<div className="app__body">
					{/* sidebar */}
					<Sidebar />
					<Switch>
						<Route path="/" exact>
							<h1>Welcome!</h1>
						</Route>
						<Route path="/room/:roomId">
							<Chat />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
