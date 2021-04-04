import React from "react";
import "./SearchBox.css";
const SearchBox = ({ onInputChange }) => {
  return (
    <div className="search-container">
      <input
        onChange={(e) =>  onInputChange(e.target.value) }
        placeholder="Search keywords"
        className="search-input"
      />
    </div>
  );
};

export default SearchBox;
