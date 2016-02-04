import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

var {ListItem} = mui;

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ListItem
                primaryText={
                <p><span style={{color: Colors.darkBlack}}>Possible Symptom: </span><br/>

                {this.props.symptomSet.symptom}
                </p>}
            secondaryText= {this.props.symptomSet.sufferingFrom}
                />
        );
    }
}

export default Content;
