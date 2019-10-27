import React from 'react';
import { ActivityItem } from './activities/item';

class Content extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchText: '',
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
    this.props.updateData();
  }

  render() {

    let { activities, filtered } = this.props;
    if (filtered) {
      activities = filtered;
    }

    return (
      <div className="content">
        <div className="line"></div>
        {activities.map(activity => <ActivityItem key={activity.id} activity={activity} />)}

      </div>
    )
  }
}

export default Content;