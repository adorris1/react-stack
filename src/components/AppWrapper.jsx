import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ActivityWrapper from './activities/ActivityWrapper.jsx';
import ContentWrapper from './symptomIdentifier/ContentWrapper.jsx';
import InjuryWrapper from './injurySummaries/InjuryWrapper.jsx';
import mui from 'material-ui';
import Styles from './App.scss';
var {Card} = mui;

class AppWrapper extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: 'a'

        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = (value) => {
        this.setState({
            value: value
        });
    };
    render(){
    
        return (
            <div className={Styles.defaultApp}>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                    >

                        <Tab label="Exercises and Stretches " value="a">
                            <div>
                                <Card>
                                    <img src = "https://cdn.filestackcontent.com/Miosh7c1SuevHE43i0Ob" height="50%" width="100%"/>
                                </Card>
                            </div>
                            <ActivityWrapper {...this.props} />
                        </Tab>
                        <Tab label="Symptom Identifier" value="b" >
                            <div>
                                <Card>
                                    <img src = "https://cdn.filestackcontent.com/2mNNeazHSPi009AEiyaM" height="100%" width="100%"/>
                                </Card>
                            </div>
                            <ContentWrapper {...this.props}/>
                        </Tab>
                        <Tab label="Injury Summaries" value="c" >
                            <div>
                                <Card>
                                    <img src = "https://cdn.filestackcontent.com/NbdPCTT3QSGj2H8Pvaqa" height="100%" width="100%"/>
                                </Card>
                            </div>
                            <InjuryWrapper {...this.props}/>
                        </Tab>
                    </Tabs>
                    
                </div>
        );
    }
}



export default AppWrapper;