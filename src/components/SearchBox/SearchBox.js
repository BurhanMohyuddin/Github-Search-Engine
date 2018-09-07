import React from 'react';

const SearchBox = ({ username, searchChange }) => {
    return (
        <nav className="navbar navbar-light bg-black">
  <form className="form-inline">
    <div className="input-group">
      <div className="input-group-prepend">
      <span ><h4>Github Profile Search</h4></span>
        <span className="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"onChange = {searchChange}/>
    </div>
  </form>
</nav>
    )
}

export default SearchBox;