import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

var {ListItem} = mui;

class Activity extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ListItem
                primaryText={
                <p><span style={{color: Colors.darkBlack}}>Type: </span><br/>

                {this.props.activity.type}
                </p>}
                secondaryText= {this.props.activity.purpose}
            />
        );
    }
}

export default Activity;
