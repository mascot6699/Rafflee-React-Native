
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

export const AppNavigator = StackNavigator({
        SplashScreen: { screen: SplashScreen },
        MainScreen: { screen: MainScreen },
        AuthScreen: { screen: AuthScreen },
        LoginScreen: { screen: LoginScreen },
        SigninScreen: { screen: SigninScreen },
        CompanyFormScreen: { screen: CompanyFormScreen },
        ForgotPasswordScreen: { screen: ForgotPasswordScreen },
    },{
        headerMode: 'none',
    }
);

class AppWithNavigationState extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
            const { dispatch, navigation, nav } = this.props;

            console.log(nav)
            // if(nav.index == 2) {
            //     BackHandler.exitApp();
            // }

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
        nav: state.nav
    }
};

const A = connect(mapStateToProps)(AppWithNavigationState);
export default A;