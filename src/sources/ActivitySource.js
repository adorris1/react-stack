import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let SymptomSetSource = {
    getActivities: {
        remote(state){

            if(firebaseRef){
                firebaseRef.off();
            }

            firebaseRef = new Firebase('https://dorris-chiro.firebaseio.com/topicData/' +
                state.selectedTopic.key);

            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot) => {
                    var topicData = dataSnapshot.val();
                    resolve(topicData);


                    setTimeout(()=> {
                        firebaseRef.on("child_added", ((item) => {
                            let topicItem = item.val();
                            topicItem.key = item.key();
                            Actions.topicItemReceived(topicItem);
                        }));
                    }, 10);

                })
            });
        },
        success: Actions.topicItemsReceived,
        error: Actions.topicItemsFailed,
        loading: Actions.topicItemsLoading
    }

}

export default SymptomSetSource;
