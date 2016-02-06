import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';
var {ListItem} = mui;

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
        }

        return (
            <ListItem
                href={ '/#/ContentWrapper/' +this.props.topic.key}
                style={style}
                key={this.props.topic.key}
            >{this.props.topic.title}</ListItem>
        );
    }
}

export default Topic;
