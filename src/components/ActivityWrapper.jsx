import React from 'react';
import TopicList from './TopicList.jsx';
import ActivityList from './ActivityList.jsx';
import ActivityStore from '../stores/ActivityStore';

class ActivityWrapper extends React.Component {
    render(){
        return (
            <div>
                <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
                    <TopicList {...this.props} />
                    <ActivityList />
                </div>
            </div>
        );
    }
}


export default ActivityWrapper;
