import React from 'react';
import PropTypes from 'prop-types';
import { ActivityItem } from './activities/item';

class Content extends React.Component {

  static propTypes = {
    filterText: PropTypes.string,
    requestRefresh: PropTypes.bool,
    onComponentRefresh: PropTypes.func,
  }

  static defaultProps = {
    filterText: '',
    requestRefresh: false,
    onComponentRefresh: () => { },
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      activities: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.requestRefresh) {
      this.setState({ loading: true }, this.fetchData);
    }
  }

  fetchData() {

    let apiUrl = 'https://api.github.com';

    const { filterText } = this.props;

    if (filterText) {
      apiUrl = `${apiUrl}/users/${filterText}`
    }

    fetch(`${apiUrl}/events`)
      .then(resp => {
        if (resp.status !== 200) {
          throw new Error('User not found');
        }
        return resp.json();
      })
      .then(resp => this.setState({ activities: resp }, this.props.onComponentRefresh))
      .catch(err => alert(err.message))
  }

  render() {

    let { activities } = this.state;

    return (
      <div className="content">
        <div className="line"></div>
        {activities.map(activity => <ActivityItem key={activity.id} activity={activity} />)}
      </div>
    )
  }
}

export default Content;