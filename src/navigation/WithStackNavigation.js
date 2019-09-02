import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, fontSizes} from '../styles';

const WithStackNavigation = (
  {title, hasHeaderLeft = true},
  HocComponent,
  params,
) =>
  createStackNavigator({
    HocComponent: {
      screen: HocComponent,
      navigationOptions: ({navigation}) => ({
        title,
        headerLeft: hasHeaderLeft && (
          <TouchableOpacity
            style={styles.headerStyle}
            onPress={navigation.openDrawer}>
            <Icon
              name="menu"
              color={colors.headerTextColor}
              size={fontSizes.headerFontSize}
            />
          </TouchableOpacity>
        ),
        headerTintColor: colors.headerTextColor,
        headerStyle: {backgroundColor: colors.headerBackgroundColor},
      }),
      params,
    },
  });

const styles = StyleSheet.create({
  headerStyle: {
    marginLeft: 15,
  },
});

export default WithStackNavigation;
