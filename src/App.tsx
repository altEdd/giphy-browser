import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="app">
			<SearchBar onSearch={(sq) => setSearchQuery(sq)} />
			{searchQuery}
		</div>
	);
}

export default App;
