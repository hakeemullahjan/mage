import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native';
import {Header} from './common';
import Slider from './Slider';
import Inprogress from './Inprogress';
import TopPicks from './TopPicks';
import {connect} from 'react-redux';

class MainScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.containerstyles}>
        <Header />
        <View style={{marginVertical: 8}} />
        <Slider />
        <Text style={{textAlign: 'center', fontSize: 22}}>o o o o</Text>
        <View style={{marginVertical: 10}} />
        <Inprogress />
        <View style={{marginVertical: 10}} />
        <TopPicks />

        
          <Button
            title="GO TO ROUTE ONE"
            onPress={() => this.props.navigation.navigate('RouteOne')}
          />
          <Button
            title="GO TO ROUTE TWO"
            onPress={() => this.props.navigation.navigate('RouteTwo')}
          />
       
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

const mapStateToProps = state => {
  // console.log(state);
  return {myData: state.myData};
};

export default connect()(MainScreen);
