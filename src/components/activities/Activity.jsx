import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import Image from './Image.jsx';
import Styles from './Activity.scss';
var {ListItem} = mui;

class Activity extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var errors=[];
        errors = this.props.activity.commonErrors.map((error, i)=>{
            return (
                <li key={i}>
                    {this.props.error= error.valueOf()}
                </li>

            );
        });

        return (
            <ListItem
                primaryText = { <p>
                    <span className={Styles.activity}>Type: </span>
                        {this.props.activity.type}</p>}
                secondaryText = {<p>
                    <span className={Styles.activity}>Common Erros: </span><br/>
                        {errors}<br/>
                        {this.props.activity.purpose}<br/>
                        <figure>
                            <Image src={this.props.activity.img}  />
                        </figure> </p>}
            />
        );
    }
}

export default Activity;