import React, { Component } from 'react';
import UserLogin from './User-Login';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import {checkLogStatus, logOut} from '../actions/';
import {bindActionCreators} from 'redux';
import {App} from 'grommet';

class Main extends Component {

  componentDidMount(){
  	this.props.checkLogStatus();
  }		

  render() {
    return (
    <App centered={true} className="_main">
      <Navbar logStatus={this.props.logStatus} logOut={this.props.logOut.bind(this)}/>
	    {this.props.children}
    </App>
    );
  }
}

function mapStateToProps(state){
    return {logStatus: state.logStatus};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({checkLogStatus, logOut}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);