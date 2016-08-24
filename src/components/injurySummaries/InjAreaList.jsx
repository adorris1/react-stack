import React from 'react';
import Area from './Area.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import InjuryStore from '../../stores/InjuryStore';
import AreaStyles from './Area.scss';
var {Card, List, CircularProgress} = mui;

@connectToStores
class InjAreaList extends React.Component {
    constructor(props){
        super(props);
        this.state = {areas: null};
    }

    componentDidMount(){
        this.state.selectedArea = this.props.params.area;
        InjuryStore.getAreas(this.state.selectedArea);
    }

    componentWillReceiveProps(nextProps){
        if(this.state.selectedArea != nextProps.params.area){
            this.state.selectedArea = nextProps.params.area;
            InjuryStore.getAreas(this.state.selectedArea);
        }
    }

    static getStores(){
        return [InjuryStore];
    }

    static getPropsFromStores(){
        return InjuryStore.getState();
    }

    render(){
        if(!this.props.areas){
            return (
                <Card style={{
          flexGrow: 1
        }}>
                    <CircularProgress
                        mode="indeterminate"
                        style={AreaStyles.circularProgress}
                    />
                </Card>
            );
        }


        var areaNodes = _(this.props.areas)
            .keys()
            .map((k, i)=> {
                let area = this.props.areas[k];
                return (
                    <Area area={area} key={i}/>
                );
            })
            .value();

        return (
            <Card style={AreaStyles.card}>
                <List>
                    {areaNodes}
                </List>
            </Card>
        );
    }
}

export default InjAreaList;
