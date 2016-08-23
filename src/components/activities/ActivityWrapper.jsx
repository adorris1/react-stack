import React from 'react';
import TopicList from './TopicList.jsx';
import ActivityList from './ActivityList.jsx';
import ActivityStore from '../../stores/ActivityStore';
import Styles from './ActivityWrapper.scss';
class ActivityWrapper extends React.Component {
    render(){

        return (
            <div>
                <div className = {Styles.defaultActivity}>
                <TopicList {...this.props} />
                <ActivityList />
                </div>
            </div>
        );
    }
}


export default ActivityWrapper;
