import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ActivityWrapper from './ActivityWrapper.jsx';
import ContentWrapper from './ContentWrapper.jsx';
import FontIcon from 'material-ui/lib/font-icon';
import SvgIcon from 'material-ui/lib/svg-icon';
let IconBase = require('react-icon-base');
import IconList from './IconList.jsx';

class AppWrapper extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: 'a'
        };
    }
    handleChange = (value) => {
        this.setState({
            value: value
        });
    };
    render(){
        return (
            <div>
                <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >

                        <Tab label="Exercises and Stretches " value="a">
                            <ActivityWrapper {...this.props} />

                        </Tab>
                        <Tab icon = {<exersizeIcon className= "meterial-icons">label="Symptom Identifier" value="b" >
                            <ContentWrapper {...this.props}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}



export default AppWrapper;