import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let SymptomSetSource = {
    getSymptomSets: {
        remote(state){

            if(firebaseRef){
                firebaseRef.off();
            }

            firebaseRef = new Firebase('https://dorris-chiro.firebaseio.com/symptomSets/' +
                state.selectedArea.key);

            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot) => {
                    var symptomSets = dataSnapshot.val();
                    resolve(symptomSets);


                    setTimeout(()=> {
                        firebaseRef.on("child_added", ((symp) => {
                            let sympVal = symp.val();
                            sympVal.key = symp.key();
                            Actions.symptomSetReceived(sympVal);
                        }));
                    }, 10);

                })
            });
        },
        success: Actions.symptomSetsReceived,
        error: Actions.symptomSetsFailed,
        loading: Actions.symptomSetsLoading
    }

}

export default SymptomSetSource;
