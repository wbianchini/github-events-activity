import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './search-form/search-form';
import MenuButton from './menu/menu-button';

class Header extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    onSearch: PropTypes.func
  }
  
  static defaultProps = {
    title: 'Github activity'
  }

  constructor(props) {
    super(props);

    this.state = { searchVisible: false }
  }

  /**
   * Change search form input state
   * 
   */
  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }

  submitForm(val) {
    this.props.onSearch(val);
  }

  render() {

    const { title } = this.props;

    return (
      <div className="header">
        <div className="fa fa-more"></div>

        <MenuButton></MenuButton>

        <span className="title">{title}</span>

        <SearchForm
          searchVisible={this.state.searchVisible}
          onSubmit={this.props.onSearch} />

        <div onClick={this.showSearch.bind(this)} className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

export default Header;