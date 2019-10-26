import React from 'react';

class Header extends React.Component {

  render() {

    const {title} = this.props;

    return (
      <div className="header">
        <div className="fa fa-more"></div>
        
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>

        <span className="title">{title}</span>

        <input type="text" className="searchInput" placeholder="Search ..." />

        <div className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

export default Header;