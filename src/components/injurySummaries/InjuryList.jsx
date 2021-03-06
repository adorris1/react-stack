import React from 'react';
import Injury from './Injury.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import InjuryStore from '../../stores/InjuryStore';
import AreaStyles from './Area.scss';

var {Card, List, CircularProgress} = mui;

@connectToStores
class InjuryList extends React.Component {
    constructor(props){
        super(props);
    }

    static getStores(){
        return [InjuryStore];
    }

    static getPropsFromStores(){
        return  InjuryStore.getState();
    }

    render(){
        let injuryNodes = null;

        if(!this.props.injurySummariesLoading){
            injuryNodes = _.values(this.props.injurySummaries).map((injury, i)=> {
                return (
                    <Injury injury={injury} key={i} />
                );
            });
        }
        else{
            injuryNodes = <CircularProgress mode="indeterminate" style={AreaStyles.circularProgress} />;
        }


        return (
            <Card style={AreaStyles.card}>
                <List>
                    {injuryNodes}
                </List>
            </Card>
        );
    }
}

export default InjuryList;
