import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class Header extends Component {
  render() {
    const {headerContainer, headerStyles} = styles;
    return (
      <View style={headerContainer}>
        <View style={headerStyles}>
          <View>
            <TouchableOpacity>
              <Image source={require('../../assets/a.png')} style={{width:80,height:55}} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
            <Image source={require('../../assets/ht.png')} style={{width:100,height:55  }} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../../assets/yt.png')} style={{width:50,height:50  }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    // flexDirection:'row',
    height: 60,
    // padding: 5,
    // justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    // shadowRadius:2,
    elevation: 2,
    position: 'relative',
  },
  headerStyles: {
    flexDirection: 'row',
    // borderWidth: 1,
    // paddingTop: 'auto',
    // paddingBottom: 'auto',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});

export {Header};
