import { Header, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.styled';

const { Component } = require("react");

export class Searchbar extends Component {

  state = {
    inputTitle: "",
  }

  handleSetstate = (e) => {
    this.setState({
      inputTitle: e.target.value,
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
    return (
      <Header >
        <SearchForm
          onSubmit={this.handleSubmitForm}>
          <SearchFormButton type="submit">
            <span>Search</span>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.inputTitle}
            onChange={this.handleSetstate}
          />
        </SearchForm>
      </Header>
    )
  }
}