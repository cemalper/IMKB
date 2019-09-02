import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../styles';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.primaryMainColor} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Loading;
