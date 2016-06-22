import React from 'react';
import Topic from './Topic.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ActivityStore from '../../stores/ActivityStore';

var {Card, List, CircularProgress, DropDownMenu, MenuItem} = mui;

@connectToStores
class TopicList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topics: null,
            value: 0
        };
    }

    componentDidMount(){
        this.state.selectedTopic = this.props.params.topic;
        ActivityStore.getTopics(this.state.selectedTopic);
    }

    componentWillReceiveProps(nextProps){
        if(this.state.selectedTopic != nextProps.params.topic){
            this.state.selectedTopic = nextProps.params.topic;
            ActivityStore.getTopics(this.state.selectedTopic);
        }
    }

    static getStores(){
        return [ActivityStore];
    }

    static getPropsFromStores(){
        return ActivityStore.getState();
    }

    render(){
        // if(!this.props.topics){
        //     return (
        // //         <Card style={{
        // //   flexGrow: 1
        // // }}>
        // //             <CircularProgress
        // //                 mode="indeterminate"
        // //                 style={{
        // //       paddingTop: '20px',
        // //       paddingBottom: '20px',
        // //       margin: '0 auto',
        // //       display: 'block',
        // //       width: '60px'
        // //     }}
        // //             />
        // //         </Card>
        //     );
        // }


        var topicNodes = _(this.props.topics)
            .keys()
            .map((k, i)=> {
                let topic = this.props.topics[k];
                return (
                    <Topic topic={topic} key={i}/>
                );
            })
            .value();

        return (
            <Card style={{
        flexGrow: 1
      }}>
                <List>
                    {topicNodes}
                </List>

            </Card>
        );
    }
}

export default TopicList;
