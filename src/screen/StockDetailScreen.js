import React from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import useStockDetail from '../hooks/useStockDetail';
import {StockDetail, StockDetailChart, Loading} from '../components';
import strings from '../i18n';

const StockDetailScreen = ({navigation}) => {
  const {data, error, loading} = useStockDetail(
    navigation.state.params.stockId,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    Alert.alert(strings.unexpectedError, error.message || error, [
      {text: strings.OK, onPress: () => navigation.goBack()},
    ]);
    console.log(error);
    return <View />;
  }

  return (
    <View style={styles.container}>
      <StockDetail data={data} />
      <StockDetailChart data={data.graphicData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default StockDetailScreen;
