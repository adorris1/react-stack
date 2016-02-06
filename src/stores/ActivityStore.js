import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import TopicDataSource from '../sources/ActivitySource';
import TopicSource from '../sources/TopicSource';
import _ from 'lodash';

@datasource(TopicSource, TopicDataSource)
@decorate(alt)
class TopicStore {
    constructor(){
        this.state = {
            topicData: null,
            topicItemsLoading: true
        };
    }

    @bind(Actions.topicItemsLoading)
    topicItemsLoading(){
        this.setState({
            topicItemsLoading: true
        });
    }

    @bind(Actions.topicItemsReceived)
    receivedTopicItems(topicData){
        _(topicData)
            .keys()
            .each((k)=> {
                topicData[k].key = k;
            })
            .value();

        this.setState({
            topicData,
            topicItemsLoading: false
        });
    }




    @bind(Actions.topicItemReceived)
    topicItemReceived(data){
        if(this.state.topicData[data.key]){
            return;
        }

        this.state.topicData[data.key] = data;

        this.setState({
            topicData: this.state.topicData
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

        setTimeout(this.getInstance().getTopicItems, 100);
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
            areas,
            selectedTopic
        });

        setTimeout(this.getInstance().getTopicItems, 100);
    }


}

export default alt.createStore(TopicStore);
