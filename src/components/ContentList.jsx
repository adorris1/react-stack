import React from 'react';
import Content from './Content.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ContentStore from '../stores/ContentStore';

var {Card, List, CircularProgress} = mui;

@connectToStores
class ContentList extends React.Component {
    constructor(props){
        super(props);
    }

    static getStores(){
        return [ContentStore];
    }

    static getPropsFromStores(){
        return  ContentStore.getState();
    }

    render(){
        let symptomSetNodes = null;

        if(!this.props.symptomSetsLoading){
            symptomSetNodes = _.values(this.props.symptomSets).map((symptomSet, i)=> {
                return (
                    <Content symptomSet={symptomSet} key={i} />
                );
            });
        }else{
            symptomSetNodes = <CircularProgress mode="indeterminate"
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
                    {symptomSetNodes}
                </List>
            </Card>
        );
    }
}

export default ContentList;
