import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './search-form/search-form';

class Header extends React.Component {

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

        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>

        <span className="title">{title}</span>

        <SearchForm
          searchVisible={this.state.searchVisible}
          onSubmit={this.props.onSearch} />

        <div onClick={this.showSearch.bind(this)} className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  onSearch: PropTypes.func
}

Header.defaultProps = {
  title: 'Github activity'
}

export default Header;