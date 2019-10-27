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
      activities: [],
      filtered: []
    };
  }

  /**
   * Handle search-form component search
   * @param {string} val 
   */
  handleSearch(searchText) {
    this.fetchData(searchText);
  }

  /**
   * 
   * @param {string} filter 
   */
  fetchData(filter = null) {

    let activities = [
      {
        id: 1,
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
          id: 1, name: 'Nate',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Ari', text: 'Me too!' }]
      },
      {
        id: 2,
        timestamp: new Date().getTime(),
        text: "Woke up early for a beautiful run",
        user: {
          id: 2, name: 'Ari',
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [{ from: 'Nate', text: 'I am so jealous' }]
      },
    ];

    let filtered = null;
    if (filter) {
      filtered = activities.filter(a => a.user && a.user.name.match(filter))
    }

    this.setState({
      activities: activities,
      filtered: filtered
    }, this.onComponentRefresh);
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
            title="Timeline" />

          <Content
            requestRefresh={refreshing}
            updateData={this.fetchData.bind(this)}
            activities={this.state.activities}
            filtered={this.state.filtered}
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
