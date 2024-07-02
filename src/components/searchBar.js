import React from "react";
import { Input } from "semantic-ui-react";

const SearchBar = ({ search }) => (
  <Input
    data-test-id="search-field"
    icon="search"
    type="text"
    placeholder="Search Game"
    onChange={(e) => search(e)}
  />
);

export default SearchBar;
