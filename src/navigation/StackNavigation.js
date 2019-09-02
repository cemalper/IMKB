import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from '../screen/MainScreen';
import StockDetailScreen from '../screen/StockDetailScreen';
import DrawerNavigation from './DrawerNavigation';
import WithStackNavigation from './WithStackNavigation';
import strings from '../i18n';
import {screenNames} from '../constants';

const stackNavigator = new createStackNavigator(
  {
    [screenNames.MainScreen]: WithStackNavigation(
      {title: strings.isoStocksIndices, hasHeaderLeft: false},
      MainScreen,
    ),
    [screenNames.StockScreen]: DrawerNavigation,
    [screenNames.StockDetailScreen]: WithStackNavigation(
      {title: strings.stocksIndices, hasHeaderLeft: false},
      StockDetailScreen,
    ),
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(stackNavigator);
