
import React from 'react';
import { connect } from 'react-redux';
import {
  StackNavigator,
  addNavigationHelpers,
  DrawerNavigator
} from 'react-navigation';
import { BackHandler } from 'react-native'

import { addListener } from '../middleware/nav'

import SplashScreen from '../screens/SplashScreen'
import MainScreen from '../screens/MainScreen'
import AuthScreen from '../screens/AuthScreen'
import LoginScreen from '../screens/LoginScreen'
import SigninScreen from '../screens/SigninScreen'
import CompanyFormScreen from '../screens/CompanyFormScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ProfileSummaryScreen from '../screens/ProfileScreens'
import CategoriesScreen from '../screens/Categories'
import CategorySearchScreen from '../screens/Categories/CategorySearch'

export const AppNavigator = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  MainScreen: { screen: MainScreen },
  AuthScreen: { screen: AuthScreen },
  LoginScreen: { screen: LoginScreen },
  SigninScreen: { screen: SigninScreen },
  CompanyFormScreen: { screen: CompanyFormScreen },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen },
  ProfileSummaryScreen: { screen: ProfileSummaryScreen },
  CategoriesScreen: { screen: CategoriesScreen },
  CategorySearchScreen: { screen: CategorySearchScreen },
}, {
  headerMode: 'none',
}
);

class AppWithNavigationState extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', function () {
      const { dispatch, navigation, nav, token } = this.props;
      if (nav.index === 1) {
        BackHandler.exitApp();
      }
      dispatch({ type: 'Navigation/BACK' });
      return true;
    }.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return <AppNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav, addListener })} />
  }
}
const mapStateToProps = (state) => {
  return {
    nav: state.nav,
  }
};

const A = connect(mapStateToProps)(AppWithNavigationState);
export default A;