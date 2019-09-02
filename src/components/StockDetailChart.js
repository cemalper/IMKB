import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';

const StockDetailChart = ({data}) => {
  //this workaround is added because of when all values are same, linecharts(react-native-svg-charts and victory-base) are not working in react-native-svg
  if (data.every(x => x.value === 0)) {
    return (
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar data={data} x="day" y="value" />
      </VictoryChart>
    );
  }
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine data={data} x="day" y="value" />
    </VictoryChart>
  );
};

const styles = StyleSheet.create({});

export default StockDetailChart;
