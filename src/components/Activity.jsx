import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

var {ListItem} = mui;

class Activity extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

            var errors=[];// = this.props.activity.commonErros;
            errors = this.props.activity.commonErrors.map((error, i)=>{

                return (
                    <li key={i}>
                        {this.props.error= error.valueOf()}
                    </li>

                );
            });
        console.log("errors: " + errors);
        return (
            <ListItem
                primaryText={
                <p><span style={{color: Colors.darkBlack}}>Type: </span>

                {this.props.activity.type}

                </p>}
                secondaryText= {<p><span style={{color: Colors.darkBlack}}>Common Erros: </span><br/>
                                    {errors}<br/>
                                 {this.props.activity.purpose}


            </p>}
            />
        );
    }
}

export default Activity;