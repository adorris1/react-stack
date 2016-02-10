import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import ActivitySource from '../sources/ActivitySource';
import TopicSource from '../sources/TopicSource';
import _ from 'lodash';

@datasource(TopicSource, ActivitySource)
@decorate(alt)
class ActivityStore {
    constructor(){
        this.state = {
            activites: null,
            activitiesLoading: true
        };
    }

    @bind(Actions.activitiesLoading)
    activitiesLoading(){
        this.setState({
            activitiesLoading: true
        });
    }

    @bind(Actions.activitiesReceived)
    receivedActivites(activities){
        _(activities)
            .keys()
            .each((k)=> {
                activities[k].key = k;
            })
            .value();

        this.setState({
            activities,
            activitiesLoading: false
        });
    }




    @bind(Actions.activityReceived)
    activityReceived(act){
        if(this.state.activities[act.key]){
            return;
        }

        this.state.activities[act.key] = act;

        this.setState({
            activities: this.state.activities
        });
    }

    @bind(Actions.topicOpened)
    topicOpened(selectedTopic){
        _(this.state.topics)
            .values()
            .each((topic)=> {
                topic.selected = false;
            })
            .value();

        selectedTopic.selected = true;

        this.setState({
            selectedTopic,
            topics: this.state.topics
        });

        setTimeout(this.getInstance().getActivities, 100);
    }

    @bind(Actions.topicsReceived)
    receivedTopics(topics){
        let selectedTopic;
        _(topics)
            .keys()
            .each((key, index) => {
                topics[key].key = key;
                if(topics[key].selected){
                    selectedTopic = topics[key];
                }
            })
            .value();

        this.setState({
            topics,
            selectedTopic
        });

        setTimeout(this.getInstance().getActivities, 100);
    }


}

export default alt.createStore(ActivityStore);
