import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let ActivitySource = {
    getActivities: {
        remote(state){

            if(firebaseRef){
                firebaseRef.off();
            }

            firebaseRef = new Firebase('https://dorris-chiro.firebaseio.com/activites/' +
                state.selectedTopic.key);

            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot) => {
                    var activites = dataSnapshot.val();
                    resolve(activites);


                    setTimeout(()=> {
                        firebaseRef.on("child_added", ((act) => {
                            let activityVal = act.val();
                            activityVal.key = act.key();
                            Actions.activityReceived(activityVal);
                        }));
                    }, 10);

                })
            });
        },
        success: Actions.activitiesReceived,
        error: Actions.activitiesFailed,
        loading: Actions.activitiesLoading
    }

}

export default ActivitySource;
