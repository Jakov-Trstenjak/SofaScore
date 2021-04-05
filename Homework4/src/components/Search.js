import React from "react";

class Search extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A breed was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="input-field">
          <input type="text" value={this.state.value} onChange={this.handleChange}  className="search"/>
        </label>
        <button type="submit" className="search btn">
          Search
        </button>
      </form>
    );
  }

}




export default Search;