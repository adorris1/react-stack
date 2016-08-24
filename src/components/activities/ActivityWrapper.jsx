import React from 'react';
import TopicList from './TopicList.jsx';
import ActivityList from './ActivityList.jsx';
import ActivityStore from '../../stores/ActivityStore';
import Styles from './Activity.scss';
class ActivityWrapper extends React.Component {
    render(){

        return (

            <div className = {Styles.activityWrapper}>
                <TopicList {...this.props} />
                <ActivityList />
            </div>

        );
    }
}


export default ActivityWrapper;
