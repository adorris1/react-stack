import React from 'react';
import mui from 'material-ui';
import {RouteHandler} from 'react-router';
import AppWrapper from './AppWrapper.jsx';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };


  ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }


  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };
  handleRequestClose() {
    this.setState({
      open: false,
    });
  }
  handleTouchTap() {
    this.setState({
      open: true
    });
  }


  getChildContext(){
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render(){
    const standardActions = (
        <IconMenu
            label="Okey"
            secondary={true}
            onTouchTap={this.handleRequestClose}
        />
    );
    return (
      <div>
       <AppWrapper {...this.props}/>
        <RouteHandler />

      </div>
    );
  }

}

export default App;
