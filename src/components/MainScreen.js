import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import {Header} from './common';
import Slider from './Slider';
import Inprogress from './Inprogress';
import TopPicks from './TopPicks';

class MainScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.containerstyles}>
        <Header />
        <View style={{marginVertical: 8}} />
        <Slider />
        <Text style={{textAlign:'center',fontSize:22}}>o o o o</Text>
        <View style={{marginVertical: 10}} />
        <Inprogress />
        <View style={{marginVertical: 10}} />
        <TopPicks />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  containerstyles: {
    flex: 1,
    backgroundColor: '#E5E7E9',
  },
});
export default MainScreen;
