import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://dorris-chiro.firebaseio.com/topics');

let TopicSource = {
    getTopics: {
            remote(state, selectedTopicKey){
                return new Promise((resolve, reject) => {
                    firebaseRef.once("value", (dataSnapshot)=> {
                        var topics = dataSnapshot.val();
                        selectedTopicKey = selectedTopicKey || _.keys(topics)[0];
                        var selectedTopic = topics[selectedTopicKey];
                        if(selectedTopic){
                            selectedTopic.selected = true;
                        }
                        resolve(topics);
                    });
                });
            },
            success: Actions.topicsReceived,
            error: Actions.topicsFailed
        }
    }

    export default TopicSource;
