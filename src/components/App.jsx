import React from 'react';
import mui from 'material-ui';
import {RouteHandler} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {
  constructor(){
    super();

    ThemeManager.setPalette({
      primary1Color: Colors.lightBlue800,
      primary2Color: Colors.lightBlue700,
      primary3Color: Colors.lightBlue600,
      accent1Color: Colors.grey400
    });
  }


  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render(){
    injectTapEventPlugin();

    return (
        <div>
          <AppBar title="Rehab Guide" />
          <RouteHandler />
        </div>
    );
  }
}

export default App;
