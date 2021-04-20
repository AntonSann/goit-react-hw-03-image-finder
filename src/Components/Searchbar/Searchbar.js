import React, { Component } from 'react';
import Styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
        <header className={Styles.Searchbar}>
  <form className={Styles.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={Styles.SearchForm_button}>
      <span className={Styles.SearchForm_button_label}>Search</span>
    </button>

    <input
      className={Styles.SearchForm_input}
      type="text"
      value={this.state.query}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
    );
  }
}

export default Searchbar;