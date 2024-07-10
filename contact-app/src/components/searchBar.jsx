import React from "react";

export const SearchBar = ({ handleSearch }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <input
        className="search"
        type="search"
        placeholder="search contact"
        onChange={handleSearch}
      />
    </div>
  );
};
