import {createDrawerNavigator} from 'react-navigation';
import {colors} from '../styles';
import withStackNavigation from '../navigation/WithStackNavigation';
import DrawerContent from '../components/DrawerContent';
import StockScreen from '../screen/StockScreen';
import strings from '../i18n';

const DrawerConfig = {
  drawerWidth: 240,
  contentComponent: DrawerContent,
  overlayColor: colors.drawerOverlayColor,
  contentOptions: {
    iconContainerStyle: {
      opacity: 1,
    },
    activeTintColor: colors.drawerActiveTintColor,
    activeBackgroundColor: colors.drawerActiveBackgroundColor,
  },
};

const DrawerNavigator = createDrawerNavigator(
  {
    all: {
      screen: withStackNavigation({title: strings.stocksIndices}, StockScreen, {
        stockIndexType: 'all',
      }),
      navigationOptions: () => ({
        title: strings.stocksIndices,
      }),
    },
    increasing: {
      screen: withStackNavigation({title: strings.increasing}, StockScreen, {
        stockIndexType: 'increasing',
      }),
      navigationOptions: () => ({
        title: strings.increasing,
      }),
    },
    decreasing: {
      screen: withStackNavigation({title: strings.decreasing}, StockScreen, {
        stockIndexType: 'decreasing',
      }),
      navigationOptions: () => ({
        title: strings.decreasing,
      }),
    },
    volume30: {
      screen: withStackNavigation({title: strings.volume30}, StockScreen, {
        stockIndexType: 'volume30',
      }),
      navigationOptions: () => ({
        title: strings.volume30,
      }),
    },
    volume50: {
      screen: withStackNavigation({title: strings.volume50}, StockScreen, {
        stockIndexType: 'volume50',
      }),
      navigationOptions: () => ({
        title: strings.volume50,
      }),
    },
    volume100: {
      screen: withStackNavigation({title: strings.volume100}, StockScreen, {
        stockIndexType: 'volume100',
      }),
      navigationOptions: () => ({
        title: strings.volume100,
      }),
    },
  },
  DrawerConfig,
);

export default DrawerNavigator;
