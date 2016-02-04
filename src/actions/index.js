import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  constructor(){
    this.generateActions(
        'areasReceived',
        'areasFailed',
        'symptomSetsReceived',
        'symptomSetsFailed',
        'areaOpened',
        'symptomSetsLoading',
        'symptomSetReceived',
        'topicsReceived',
        'topicsFailed',
        'topicOpened'
    );
  }
}

export default alt.createActions(Actions);
