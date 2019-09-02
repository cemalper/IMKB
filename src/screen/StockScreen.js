import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {SearchBar, StockList, Loading} from '../components';
import {useStockList} from '../hooks/useStockList';
import strings from '../i18n';
import {screenNames} from '../constants';

const columnNames = [
  {key: 'symbol', title: 'Sembol', width: 65},
  {key: 'price', title: 'Fiyat', width: 40},
  {key: 'difference', title: 'Fark', width: 40},
  {
    key: 'volume',
    title: 'Hacim',
    width: 95,
    render: record => (
      <Text style={styles.alignText}>{Number(record.volume).toFixed(2)}</Text>
    ),
  },
  {key: 'bid', title: 'Alış', width: 40},
  {key: 'offer', title: 'Satış', width: 40},
  {
    key: 'isUp',
    title: 'Değişim',
    width: 55,
    render: record => {
      return (
        <Text
          style={[
            styles.alignText,
            styles.text,
            {
              color: record.isUp ? 'green' : 'red',
            },
          ]}>
          {record.isUp ? '▲' : '▼'}
        </Text>
      );
    },
  },
];

const StockScreen = ({navigation}) => {
  const {data, error, loading} = useStockList(
    navigation.state.params.stockIndexType,
  );
  const [filteredData, setFilteredData] = new useState(data);
  const [searchTerm, setSearchTerm] = new useState('');

  useEffect(() => {
    setFilteredData(data);
    setSearchTerm('');
  }, [data, setFilteredData, setSearchTerm]);

  const filterData = () => {
    setFilteredData(
      data.filter(x =>
        x.symbol.toUpperCase().includes(searchTerm.toUpperCase()),
      ),
    );
  };

  const onItemSelected = id => {
    navigation.navigate(screenNames.StockDetailScreen, {stockId: id});
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    Alert.alert(strings.unexpectedError, error.message || error, [
      {text: strings.OK, onPress: () => navigation.goBack(null)},
    ]);
    return <View />;
  }

  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.searchBarStyle}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearchCompleted={filterData}
      />
      <StockList
        columnNames={columnNames}
        data={filteredData}
        onItemSelected={onItemSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  searchBarStyle: {
    margin: 5,
  },
  indicator: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
  alignText: {
    alignSelf: 'center',
    textAlign: 'center',
  },
});

export default StockScreen;
