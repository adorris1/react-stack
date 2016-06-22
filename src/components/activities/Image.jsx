import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

class Image extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        var img = document.createElement('img');
        img.src = this.props.src;

    }
    render() {
        var style = {
            disImage: {
                resizeMode: 'cover'
            }
        };
            return(

                    <img src = {this.props.src } width = "80%" height = "80%"   />

        );
    }
}

export default Image;