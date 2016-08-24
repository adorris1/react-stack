import React from 'react';
import mui from 'material-ui';
import Styles from './Activity.scss';
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
        return(
            <img className= {Styles.image} src = {this.props.src }/>
        );
    }
}

export default Image;