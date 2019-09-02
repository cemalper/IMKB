import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import strings from '../i18n';

const SearchBar = ({
  searchTerm,
  onSearchTermChange,
  onSearchCompleted,
  style,
}) => {
  return (
    <View style={[styles.backgroundStyle, style]}>
      <TextInput
        style={styles.inputStyle}
        placeholder={strings.search}
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchCompleted}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    borderWidth: 1,
  },
  inputStyle: {
    flex: 1,
  },
});

export default SearchBar;
