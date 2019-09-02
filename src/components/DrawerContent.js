import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {Container, Content, Header, Body} from 'native-base';
import {DrawerItems} from 'react-navigation';
import {colors, fontSizes} from '../styles';
import strings from '../i18n';

const DrawerContentComponent = props => {
  return (
    <Container style={styles.container}>
      <Header style={styles.drawerHeader}>
        <Body>
          <Image
            style={styles.drawerImage}
            source={require('../../assets/logo.png')}
          />
          <Text style={styles.drawerLogoText}>{strings.headerTitle}</Text>
          <Text style={styles.drawerLogoText}>{strings.headerSubTitle}</Text>
        </Body>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.drawerBackgroundColor,
  },
  linearGradient: {
    flex: 1,
  },
  drawerHeader: {
    height: 200,
    backgroundColor: colors.drawerHeaderBackgroundColor,
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75,
  },
  drawerLogoText: {
    marginTop: 10,
    color: colors.drawerLogoTextColor,
    fontSize: fontSizes.drawerLogoTextSize,
  },
});

export default DrawerContentComponent;
