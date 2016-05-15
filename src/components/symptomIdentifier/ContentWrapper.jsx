import React from 'react';
import AreaList from './AreaList.jsx';
import ContentList from './ContentList.jsx';
import ContentStore from '../../stores/ContentStore';


class ContentWrapper extends React.Component {
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
                    <AreaList {...this.props} />
                    <ContentList />
                </div>
            </div>
        );
    }
}



export default ContentWrapper;
