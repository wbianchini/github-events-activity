import React from 'react';
import './App.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Content from '../content/content';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      searchText: '',
    };
  }

  /**
   * Handle search-form component search
   * @param {string} val 
   */
  handleSearch(searchText) {
    this.setState({searchText: searchText}, this.refresh);
  }

  refresh() {
    this.setState({ refreshing: true });
  }

  onComponentRefresh() {
    this.setState({ refreshing: false });
  }

  render() {

    const { refreshing } = this.state;

    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header
            onSearch={this.handleSearch.bind(this)}
            title="Github activity" />

          <Content
            filterText={this.state.searchText}
            requestRefresh={refreshing}
            onComponentRefresh={this.onComponentRefresh.bind(this)}
          />

          <Footer>
            <button onClick={this.refresh.bind(this)}>
              <i className="fa fa-refresh"></i>
              Refresh
            </button>
          </Footer>

        </div>
      </div>
    );
  }
}

export default App;
