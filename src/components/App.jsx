import React from 'react';
import mui from 'material-ui';
import StylePropable from './mixins/style-propable';
import {RouteHandler} from 'react-router';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

class App extends React.Component {
  public get propTypes():{style: React.PropTypes.object, onRightIconButtonTouchTap: React.PropTypes.func, zDepth: PropTypes.zDepth}{
      return _propTypes;
      }

  public set propTypes(value:{style: React.PropTypes.object, onRightIconButtonTouchTap: React.PropTypes.func, zDepth: PropTypes.zDepth}){
      _propTypes=value;
      }

  private _propTypes: {
      style: React.PropTypes.object,
      onRightIconButtonTouchTap: React.PropTypes.func
      zDepth: PropTypes.zDepth

      };
  constructor(){
    super();

    this.state = {
      tooltipShown: true
    };
  ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }
  onRightIconButtonTouchTap(event) {
    if (this.props.onRightIconButtonTouchTap) {
      this.props.onRightIconButtonTouchTap(event);
    }
  }
  getInitialState() {
    return {
      muiTheme: this.context.muiTheme || getMuiTheme()
    };
  }

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  }
  getStyles() {
    const muiTheme = this.state.muiTheme;
    const rawTheme = muiTheme.rawTheme;

    let styles = {
      root: {
        position: 'relative',
        zIndex: muiTheme.zIndex.appBar,
        width: '100%',
        display: 'flex',
        minHeight: themeVariables.height,
        backgroundColor: themeVariables.color,
        paddingLeft: rawTheme.spacing.desktopGutter,
        paddingRight: rawTheme.spacing.desktopGutter,
      },
      title: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontSize: 24,
        fontWeight: Typography.fontWeightNormal,
        color: themeVariables.textColor,
        lineHeight: themeVariables.height + 'px',
      },
      mainElement: {
        boxFlex: 1,
        flex: '1'
      },
      iconButton: {
        style: {
          marginTop: (themeVariables.height - iconButtonSize) / 2,
          marginRight: 8,
          marginLeft: -16
        },
        iconStyle: {
          fill: themeVariables.textColor,
          color: themeVariables.textColor
        }
      },
      flatButton: {
        color: themeVariables.textColor,
        marginTop: (iconButtonSize - flatButtonSize) / 2 + 2
      }
    };

    return styles;
  }


  //static childContextTypes = {
  //  muiTheme: React.PropTypes.object
  //}
  //getChildContext(){
  //  return {
  //    muiTheme: ThemeManager.getCurrentTheme()
  //  };
  //}

  render(){

    return (
      <div>
        <AppBar title="Awesome Chat App"
                iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton
          style={iconRightStyle}
          iconStyle={this.mergeStyles(styles.iconButton.iconStyle)}
          iconClassName={iconClassNameRight}
          onTouchTap={this._onRightIconButtonTouchTap}          ><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
        />
        <RouteHandler />

      </div>
    );
  }

}

export default App;
