import React from 'react';
import InjuryList from './InjuryList.jsx';
import InjAreaList from './InjAreaList.jsx';
import InjuryStore from '../../stores/InjuryStore';
//import ImageWrapper from '../components/ImageWrapper.jsx';

class InjuryWrapper extends React.Component {
    render(){

        return (
            <div>
                <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
                    <InjAreaList {...this.props} />
                    <InjuryList />
                </div>
            </div>
        );
    }
}


export default InjuryWrapper;
