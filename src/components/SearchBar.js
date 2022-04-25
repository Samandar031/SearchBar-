import React from "react";

// har doim yaratadigan componentamiz file nomi bn bir hil bo'lishi kk
class SearchBar extends React.Component {
  state = { kalitSoz: "" };

  imputdanMalumotniOl(event) {
    console.log(event.target.value);
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <form className="ui search" onSubmit={this.onFormSubmit}>
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={this.imputdanMalumotniOl}
              className="prompt"
              type="text"
              placeholder="Search images..."
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
