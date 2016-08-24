import React from 'react';
import mui from 'material-ui';
import Actions from '../../actions';
var {MenuItem, ListItem} = mui;
import Styles from './Topic.scss';

class Topic extends React.Component{
    constructor(props){
        super(props);
    }

     onClick(){
         Actions.topicOpened(this.props.topic);
     }
    render(){
        let style = {};

        if(this.props.topic.selected){
            style.backgroundColor = '#f0f0f0';
            style.color = '#01567C';
            style.fontWeight = 'bold'
        }

        return (

                <ListItem
                    href={ '/#/ActivityWrapper/' +this.props.topic.key}
                    style={style}
                    key={this.props.topic.key}
                    value = {this.props.topic.value}>
                    {this.props.topic.title}
                </ListItem>

        );
    }
}

export default Topic;
