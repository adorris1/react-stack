import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

var {ListItem} = mui;

class Activity extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var commonErrors = this.props.activity.commonErrors;
        return (
            <ListItem
                primaryText={
                commonErrors.map(function(err, i){

                <p><span style={{color: Colors.darkBlack}}>Type: </span><br/>

                {this.props.activity.type}
                </p>}
                secondaryText= {this.props.activity.purpose}
            />
        );
    }
}
var ActivityItem = React.createClass({
    render: function (){
        "use strict";
        return(<li></li>)
    }
})

export default Activity;
