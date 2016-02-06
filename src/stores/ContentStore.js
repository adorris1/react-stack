import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import AreaSource from '../sources/AreaSource';
import TopicSource from '../sources/TopicSource';
import SymptomSetSource from '../sources/SymptomSetSource';
import _ from 'lodash';

@datasource(AreaSource, SymptomSetSource,TopicSource)
@decorate(alt)
class ContentStore {
    constructor(){
        this.state = {
            symptomSets: null,
            symptomSetsLoading: true
        };
    }

    @bind(Actions.symptomSetsLoading)
    symptomSetsLoading(){
        this.setState({
            symptomSetsLoading: true
        });
    }

    @bind(Actions.symptomSetsReceived)
    receivedSymptomSets(symptomSets){
        _(symptomSets)
            .keys()
            .each((k)=> {
                symptomSets[k].key = k;
            })
            .value();

        this.setState({
            symptomSets,
            symptomSetsLoading: false
        });
    }




    @bind(Actions.symptomSetReceived)
    symptomSetReceived(sym){
        if(this.state.symptomSets[sym.key]){
            return;
        }

        this.state.symptomSets[sym.key] = sym;

        this.setState({
            symptomSets: this.state.symptomSets
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

        setTimeout(this.getInstance().getSymptomSets, 100);
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

        setTimeout(this.getInstance().getSymptomSets, 100);
    }


}

export default alt.createStore(ContentStore);
