import React from 'react';
import mui from 'material-ui';
import Actions from '../../actions';

var {ListItem} = mui;

class Area extends React.Component{
    constructor(props){
        super(props);
    }

    // onClick(){
    //     Actions.areaOpened(this.props.area);
    // }

    render(){
        let style = {};

        if(this.props.area.selected){
            style.backgroundColor = '#f0f0f0';
        }

        return (
            <ListItem
                href={ '/#/ContentWrapper/' +this.props.area.key}
                style={style}
                key={this.props.area.key}
            >{this.props.area.name}</ListItem>
        );
    }
}

export default Area;
