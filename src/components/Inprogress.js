import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

class Inprogress extends Component {
  render() {
    const {containerStyle} = styles;
    return (
      <View style={{alignItems: 'center'}}>
        <View style={containerStyle}>
          <Text style={{fontWeight: 'bold'}}>IN PROGRESS</Text>
          <View style={{marginVertical: 7}} />
          <ScrollView horizontal>
            {/* Here we can use map or flatlist when we get data from API */}

            <TouchableOpacity style={{borderRadius: 50, marginHorizontal: 10}}>
              <ImageBackground
                source={require('../assets/sl.jpeg')}
                style={{width: 125, height: 100}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    marginTop: 'auto',
                    margin: 3,
                  }}>
                  How to learn more about Climate?
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius: 50, marginHorizontal: 10}}>
              <ImageBackground
                source={require('../assets/sl.jpeg')}
                style={{width: 125, height: 100}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    marginTop: 'auto',
                    margin: 3,
                  }}>
                  How to learn more about Climate?
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius: 50, marginHorizontal: 10}}>
              <ImageBackground
                source={require('../assets/sl.jpeg')}
                style={{width: 125, height: 100}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    marginTop: 'auto',
                    margin: 3,
                  }}>
                  How to learn more about Climate?
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius: 50, marginHorizontal: 10}}>
              <ImageBackground
                source={require('../assets/sl.jpeg')}
                style={{width: 125, height: 100}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    marginTop: 'auto',
                    margin: 3,
                  }}>
                  How to learn more about Climate?
                </Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius: 50, marginHorizontal: 10}}>
              <ImageBackground
                source={require('../assets/sl.jpeg')}
                style={{width: 125, height: 100}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    marginTop: 'auto',
                    margin: 3,
                  }}>
                  How to learn more about Climate?
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // width: '88%',
    marginLeft: 22,
    height: 150,
    // borderWidth: 1,
  },
});

export default Inprogress;
