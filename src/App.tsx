import React, { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import Giphys from "./Giphys";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="app">
			<SearchBar onSearch={(sq) => setSearchQuery(sq)} />
			<Giphys searchQuery={searchQuery} />
		</div>
	);
}

export default App;
