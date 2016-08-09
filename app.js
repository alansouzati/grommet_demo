import React, { Component } from 'react';
import UserLogin from './User-Login';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import {checkLogStatus, logOut} from '../actions/';
import {bindActionCreators} from 'redux';
import {App} from 'grommet';

export default class Main extends Component {

  render() {
    return (
    <App centered={true} className="_main">
	
    </App>
    );
  }
}
