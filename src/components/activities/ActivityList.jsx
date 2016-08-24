import React from 'react';
import Activity from './Activity.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ActivityStore from '../../stores/ActivityStore';
import Styles from './Activity.scss';
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
        }
        else {
            activityNodes = <CircularProgress mode="indeterminate"  style={Styles.circularProgress} />;

        }



        return (
            <div className={Styles.activityCard}>
                <Card>
                    <List>
                        {activityNodes}
                    </List>
                </Card>
            </div>
        );
    }
}

export default ActivityList;
