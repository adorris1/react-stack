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
        'topicOpened',
        'activitiesReceived',
        'activitiesFailed',
        'activitiesLoading',
        'activityReceived',
        'imagesReceived',
        'imagesFailed',
        'imagesLoading',
        'imageReceived',
        'imageTopicsReceived',
        'imageTopicsFailed',
        'imageTopicOpened',
        'injurySummariesReceived',
        'injurySummariesFailed',
        'injurySummariesLoading',
        'injurySummaryReceived'
    );
  }
}

export default alt.createActions(Actions);
