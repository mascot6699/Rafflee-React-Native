
import React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BackHandler } from 'react-native'

import SplashScreen from '../screens/SplashScreen'
import MainScreen from '../screens/MainScreen'
import AuthScreen from '../screens/AuthScreen'
import LoginScreen from '../screens/LoginScreen'
import SigninScreen from '../screens/SigninScreen'
import CompanyFormScreen from '../screens/CompanyFormScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ProfileSummaryScreen from '../screens/ProfileScreens'
import UserAccountScreen from '../screens/ProfileScreens/UserAccount/Detail'
import CompanyAccountScreen from '../screens/ProfileScreens/CompanyAccount/Detail'
import CategoriesScreen from '../screens/Categories'
import CategorySearchScreen from '../screens/Categories/CategorySearch'
import CodeVerificationScreen from '../screens/ProfileScreens/UserAccount/CodeVerification'
import SocialNetworkScreen from '../screens/ProfileScreens/SocialNetworkScreen'
import SearchScreen from '../screens/SearchScreen'

const Stack = createStackNavigator();

function App() {
  const token = useSelector(state => state.userInfo.token)
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileSummaryScreen" component={ProfileSummaryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserAccountScreen" component={UserAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CompanyAccountScreen" component={CompanyAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CategorySearchScreen" component={CategorySearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CodeVerificationScreen" component={CodeVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SocialNetworkScreen" component={SocialNetworkScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        {!token && <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />}
        {!token && <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />}
        {!token && <Stack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false }} />}
        {!token && <Stack.Screen name="CompanyFormScreen" component={CompanyFormScreen} options={{ headerShown: false }} />}
        {!token && <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;