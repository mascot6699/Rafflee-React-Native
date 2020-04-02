import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('SplashScreen');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);


function nav(state = initialNavState, action){
  
  let nextState
  switch(action.type){
    // case 'REMOVE_SCREEN':
    //   nextState = AppNavigator.router.getStateForAction(action, state)
    //   let newRoutes = []
    //   for (let i = 0; i < nextState.routes.length; i ++) {
    //     if (nextState.routes[i].routeName === 'LoginScreen') continue
    //     newRoutes.push(nextState.routes[i])
    //   }
    //   nextState.routes = newRoutes
    //   break;
    default: 
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export default nav;