import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';
import Image from './Image.jsx';
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

        //var src = "https://www.filestackapi.com/api/file/e7Mt2kNWT6OB24IsB5gY"
        var errors=[];// = this.props.activity.commonErros;
            errors = this.props.activity.commonErrors.map((error, i)=>{

                return (
                    <li key={i}>
                        {this.props.error= error.valueOf()}
                    </li>

                );
            });

        return (
            <ListItem
                primaryText={
                <p><span style={{color: Colors.darkBlack}}>Type: </span>

                {this.props.activity.type}

                </p>}
                secondaryText= {<p><span style={{color: Colors.darkBlack}}>Common Erros: </span><br/>
                                    {errors}<br/>
                                 {this.props.activity.purpose}<br/>
                                 <figure>
                                  <Image src={this.props.activity.img}  />
                                  </figure>

            </p>}
            />
        );
    }
}

export default Activity;