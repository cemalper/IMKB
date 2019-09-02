import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StockDetail = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text>Sembol: {`${data.symbol}`}</Text>
        <Text>Fiyat: {`${data.price}`}</Text>
        <Text>% Fark: {`${data.difference}`}</Text>
        <Text>Hacim: {`${Number(data.volume).toFixed(2)}`}</Text>
        <Text>Alış: {`${data.bid}`}</Text>
        <Text>Satış: {`${data.offer}`}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.rightAlignedText}>
          Günlük Düşük: {`${data.lowest}`}
        </Text>
        <Text style={styles.rightAlignedText}>
          Günlük Yüksek: {`${data.highest}`}
        </Text>
        <Text style={styles.rightAlignedText}>Adet: {`${data.count}`}</Text>
        <Text style={styles.rightAlignedText}>Tavan: {`${data.maximum}`}</Text>
        <Text style={styles.rightAlignedText}>Taban: {`${data.minimum}`}</Text>
        <Text style={styles.rightAlignedText}>
          <Text>Değişim:</Text>
          <Text style={{color: data.isUp ? 'green' : 'red'}}>
            {data.isUp ? '▲' : '▼'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 15,
  },
  column: {
    width: '50%',
  },
  rightAlignedText: {
    textAlign: 'right',
  },
});

export default StockDetail;
