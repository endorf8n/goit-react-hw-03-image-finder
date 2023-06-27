import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchbarHeader,
} from './searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeValue = ({ target }) => {
    this.setState({ inputValue: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BsSearch size={25} />
          </SearchButton>

          <SearchInput
            value={inputValue}
            onChange={this.handleChangeValue}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
