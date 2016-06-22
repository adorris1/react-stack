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
                    <p>
                <span style={{color: Colors.darkBlack}}>Possible Symptom: </span>
                <span style={{color: Colors.darkblue}}>{this.props.symptomSet.symptom} </span>
                
                    </p>
                }
                secondaryText= {
                    <p>
                <span style={{color: Colors.darkBlack }}>  {this.props.symptomSet.sufferingFrom}</span>
                    
                   </p>
                 }
                
                />
        );
    }
}

export default Content;
