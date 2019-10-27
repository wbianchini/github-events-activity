import React from 'react';

export class ActivityItem extends React.Component {

  render() {

    const { activity } = this.props;

    return (
      <div className="item">
        <div className="avatar">
          <img alt={activity.actor.login} src={activity.actor.avatar_url} />
        </div>

        <span className="time">{activity.created_at}</span>

        <p>{activity.actor.login} {activity.type}</p>

        <div className="right">{activity.repo.name}</div>

      </div>
    )
  }
}

export default ActivityItem;