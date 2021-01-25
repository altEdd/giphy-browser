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
					onChange={(e) => setSearchQuery(e.currentTarget.value.trim())}
				/>
				<input
					className={"search-bar-btn search-bar-btn-search"}
					type="submit"
					value=" 🔍 "
				/>
				<input
					className={"search-bar-btn search-bar-btn-clear"}
					type="button"
					value=" ❌ "
					onClick={() => setSearchQuery("")}
				/>
			</form>
		</div>
	);
}

export default SearchBar;
