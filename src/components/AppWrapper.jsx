import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ActivityWrapper from './activities/ActivityWrapper.jsx';
import ContentWrapper from './symptomIdentifier/ContentWrapper.jsx';
import InjuryWrapper from './injurySummaries/InjuryWrapper.jsx';
//import InjuryIcon from './InjuryIcon.jsx';
//import MenuList from './dropDownMenu/MenuList.jsx';
//import FontIcon from 'material-ui/lib/font-icon';
//import SvgIcon from 'material-ui/lib/svg-icon';
//let IconBase = require('react-icon-base');
//import IconList from './IconList.jsx';

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
                        <Tab label="Symptom Identifier" value="b" >
                            <ContentWrapper {...this.props}/>
                        </Tab>
                        <Tab label="Injury Summaries" value="c" >
                            <InjuryWrapper {...this.props}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}



export default AppWrapper;