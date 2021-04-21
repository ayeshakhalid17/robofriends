import React from 'react';
import './SearchBar.css'
function SearchBar({searchChange}) {
        return(
        <input className="bar"
        type='search' 
        placeholder="search robots"
        onChange={searchChange}
        />
        );
    }
export default SearchBar;