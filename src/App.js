import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="app">
			{/* header */}
			<Header />
			<div className="app__body">
				{/* sidebar */}
				<Sidebar />
				{/* react-router -> chat screen */}
			</div>
		</div>
	);
}

export default App;
