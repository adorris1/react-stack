import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import InjAreaSource from '../sources/InjAreaSource';
import InjurySummarySource from '../sources/InjurySummarySource';
import _ from 'lodash';

@datasource(InjAreaSource, InjurySummarySource)
@decorate(alt)
class InjuryStore {
    constructor(){
        this.state = {
            injurySummaries: null,
            injurySummariesLoading: true
        };
    }

    @bind(Actions.injurySummariesLoading)
    injurySummariesLoading(){
        this.setState({
            injurySummariesLoading: true
        });
    }

    @bind(Actions.injurySummariesReceived)
    receivedInjurySummaries(injurySummaries){
        _(injurySummaries)
            .keys()
            .each((k)=> {
                injurySummaries[k].key = k;
            })
            .value();

        this.setState({
            injurySummaries,
            injurySummariesLoading: false
        });
    }




    @bind(Actions.injurySummaryReceived)
    injurySummaryReceived(inj){
        if(this.state.injurySummaries[inj.key]){
            return;
        }

        this.state.injurySummaries[inj.key] = inj;

        this.setState({
            injurySummaries: this.state.injurySummaries
        });
    }

    @bind(Actions.areaOpened)
    areaOpened(selectedArea){
        _(this.state.areas)
            .values()
            .each((area)=> {
                area.selected = false;
            })
            .value();

        selectedArea.selected = true;

        this.setState({
            selectedArea,
            areas: this.state.areas
        });

        setTimeout(this.getInstance().getInjurySummaries, 100);
    }

    @bind(Actions.areasReceived)
    receivedAreas(areas){
        let selectedArea;
        _(areas)
            .keys()
            .each((key, index) => {
                areas[key].key = key;
                if(areas[key].selected){
                    selectedArea = areas[key];
                }
            })
            .value();

        this.setState({
            areas,
            selectedArea
        });

        setTimeout(this.getInstance().getInjurySummaries, 100);
    }


}

export default alt.createStore(InjuryStore);
