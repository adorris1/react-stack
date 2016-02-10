import React from 'react';
import Activity from './Activity.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ActivityStore from '../stores/ActivityStore';

var {Card, List, CircularProgress} = mui;

@connectToStores
class ActivityList extends React.Component {
    constructor(props){
        super(props);
    }

    static getStores(){
        return [ActivityStore];
    }

    static getPropsFromStores(){
        return  ActivityStore.getState();
    }

    render(){
        let activityNodes = null;

        if(!this.props.activitiesLoading){
            activityNodes = _.values(this.props.activities).map((activity, i)=> {
                return (
                    <Activity activity={activity} key={i} />
                );
            });
        }else{
            activityNodes = <CircularProgress mode="indeterminate"
                                                style={{
          paddingTop: 20,
          paddingBottom: 20,
          margin: '0 auto',
          display: 'block',
          width: '60px'
        }} />;
        }


        return (
            <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
                <List>
                    {activityNodes}
                </List>
            </Card>
        );
    }
}

export default ActivityList;
