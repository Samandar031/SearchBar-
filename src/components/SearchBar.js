import React from "react";

// har doim yaratadigan componentamiz file nomi bn bir hil bo'lishi kk
class SearchBar extends React.Component {
  state = { kalitSoz: null };
  // constructor(props) {
  //   super(props);
  //   this.imputdanMalumotniOl = this.imputdanMalumotniOl.bind(this);
  // }

  // 1.arrrow function
  // 2.bind
  // 3.bitta bola element ga tenglab ishlatamiz

  imputdanMalumotniOl = (event) => {
    console.log(event.target.value);
    this.setState({ kalitSoz: event.target.value });
  };

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
