import React, { useState } from "react";
import "./styles.css";

type TSearchBarProps = {
	onSearch: (searchQuery: string) => void;
};

function SearchBar(props: TSearchBarProps) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className={"search-bar"}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					props.onSearch(searchQuery);
				}}
			>
				<input
					className={"search-bar-input"}
					name="search-bar"
					placeholder="Search Giphy..."
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.currentTarget.value)}
				/>
				<input className={"search-bar-btn"} type="submit" value=" 🔍 " />
			</form>
		</div>
	);
}

export default SearchBar;
