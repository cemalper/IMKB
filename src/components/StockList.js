import React from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const StockList = ({data, columnNames, onItemSelected, style}) => {
  return (
    <ScrollView horizontal style={[{flex: 1}, style]}>
      <FlatList
        data={data}
        ListHeaderComponent={
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'gray',
            }}>
            {columnNames.map(x => (
              <Text
                style={{
                  width: x.width,
                  textAlign: 'center',
                  borderWidth: 1,
                  borderColor: 'black',
                }}
                key={x.key}>
                {x.title}
              </Text>
            ))}
          </View>
        }
        keyExtractor={record => record.id.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => onItemSelected(item.id)}
            style={{
              flexDirection: 'row',
              backgroundColor: index % 2 && '#ffd4d0',
              borderWidth: 0.7,
              borderColor: 'black',
            }}>
            {columnNames.map(x => (
              <View
                style={{
                  width: x.width,
                  borderColor: 'gray',
                  borderLeftWidth: 0.5,
                  borderRightWidth: 0.5,
                  justifyContent: 'center',
                }}>
                {x.render ? (
                  x.render(item)
                ) : (
                  <Text style={{textAlign: 'center'}}>{item[x.key]}</Text>
                )}
              </View>
            ))}
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default StockList;
