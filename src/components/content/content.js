import React from 'react';
import { ActivityItem } from './activities/item';

class Content extends React.Component {

  render() {

    const { activities } = this.props;

    return (
      <div className="content">
        <div className="line"></div>

        {activities.map(activity => <ActivityItem activity={activity} />)}

      </div>
    )
  }
}

export default Content;