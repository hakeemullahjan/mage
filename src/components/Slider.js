import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

  
class Slider extends Component {
  
  render() {
    return (
      <View style={{ alignItems: 'center'}}>
        <TouchableOpacity style={styles.constainerStyle}>
          <ImageBackground
            source={require('../assets/sl.jpeg')}
            style={{width: '100%', height: 150}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 15,
              }}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  padding: 5,
                  borderRadius: 15,
                  paddingHorizontal: 10,
                }}>
                <Text style={{fontWeight: 'bold'}}>FEATURED</Text>
              </View>

              <View
                style={{
                  backgroundColor: '#000',
                  padding: 5,
                  borderRadius: 15,
                  paddingHorizontal: 10,
                }}>
                <Text style={{color: 'yellow', fontWeight: 'bold'}}>
                  09 QUESTIONS
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={{margin: 5, marginHorizontal: 15}}>
            <Text style={{fontWeight: 'bold', color: 'blue'}}>
              VETERANZ DAY
            </Text>
            <Text>By hakeemullah jan </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainerStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
    //    borderWidth:1,
    borderRadius: 10,
    width: '88%',
    backgroundColor: '#fff',
  },
});
export default Slider;
