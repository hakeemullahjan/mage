import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import * as Router from '../components/index';

const MainNavigator = createStackNavigator({
  MainScreen: {
    screen: Router.MainScreen,
    navigationOptions: {
      header: null,
    },
  },
  RouteOne: {
    screen: Router.RouteOne,
  },
  RouteTwo: {
    screen: Router.RouteTwo,
  },
 
});

export default createAppContainer(MainNavigator);
