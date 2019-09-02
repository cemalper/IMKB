import React from 'react';
import {View, Button, Image, StyleSheet} from 'react-native';
import strings from '../i18n';
import {screenNames} from '../constants';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'center'}
        source={require('../../assets/veriparklogo.png')}
      />
      <Button
        title={strings.mainPageButton}
        color="red"
        onPress={() => navigation.navigate(screenNames.StockScreen)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
