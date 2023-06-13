import css from './Searchbar.module.css'
const { Component } = require("react");

export class Searchbar extends Component {

  state = {
    inputTitle: "",
  }

  handleSetstate = (e) => {
    const { value } = e.target;
    this.setState({
      inputTitle: value,
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { inputTitle } = this.state;

    if (inputTitle.trim() === "") {
      alert('Should be valid request')
      return
    }

    this.props.onNameTransfer(inputTitle);

    this.setState({ inputTitle: '' });
  }

  render() {
    const { inputTitle } = this.state;

    return (
      <header >
        <form className={css.SearchForm} onSubmit={this.handleSubmitForm}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value = { inputTitle }
            onChange= { this.handleSetstate }
          />
        </form>
      </header>
    )
  }
}