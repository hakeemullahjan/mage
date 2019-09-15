import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import * as Router from '../components/index';

const MainNavigator = createSwitchNavigator({
  MainScreen: {
    screen: Router.MainScreen,
  },
  RouteOne: {
    screen: Router.RouteOne,
  },
});

export default createAppContainer(MainNavigator);
