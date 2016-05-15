import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let InjurySummarySource = {
    getInjurySummaries: {
        remote(state){

            if(firebaseRef){
                firebaseRef.off();
            }

            firebaseRef = new Firebase('https://dorris-chiro-injury.firebaseio.com/injurySummaries/' +
                state.selectedArea.key);

            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot) => {
                    var injurySummaries = dataSnapshot.val();
                    resolve(injurySummaries);


                    setTimeout(()=> {
                        firebaseRef.on("child_added", ((inj) => {
                            let injVal = inj.val();
                            injVal.key = inj.key();
                            Actions.injurySummaryReceived(injVal);
                        }));
                    }, 10);

                })
            });
        },
        success: Actions.injurySummariesReceived,
        error: Actions.injurySummariesFailed,
        loading: Actions.injurySummariesLoading
    }

}

export default InjurySummarySource;
