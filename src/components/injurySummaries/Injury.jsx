import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import Image from '../activities/Image.jsx';
var {ListItem} = mui;

class Injury extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <ListItem
                primaryText={
                <p><span style={{color: Colors.darkBlack}}>Type: </span>

                {this.props.injury.sufferingFrom}

                </p>}>
            <Image src={this.props.injury.img} />

                </ListItem>
        );
    }
}

export default Injury;