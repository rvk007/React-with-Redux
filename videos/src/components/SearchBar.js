import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  OnInputChange = event => {
    this.setState({ term: event.target.value });
  };

  OnFormSubmit = event => {
    event.preventdefault();
    //TO DO Call API
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" OnSubmit={this.OnFormSubmit}>
          <div className="ui field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.OnInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
