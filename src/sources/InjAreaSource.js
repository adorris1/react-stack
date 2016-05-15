import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://dorris-chiro.firebaseio.com/areas');

let InjAreaSource = {
    getAreas: {
        remote(state, selectedAreaKey){
            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot)=> {
                    var areas = dataSnapshot.val();
                    selectedAreaKey = selectedAreaKey || _.keys(areas)[0];
                    var selectedArea = areas[selectedAreaKey];
                    if(selectedArea){
                        selectedArea.selected = true;
                    }
                    resolve(areas);
                });
            });
        },
        success: Actions.areasReceived,
        error: Actions.areasFailed
    }
}

export default InjAreaSource;
