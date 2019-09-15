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
  state = {
    data: [],
  };
  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=2&limit=10')
      .then(res => res.json())
      .then(data => this.setState({data}));
  }
  render() {
    const {containerStyle} = styles;
    const {data} = this.state;
    console.log(data);
    return (
      <View style={{alignItems: 'center'}}>
        <View style={containerStyle}>
          <Text style={{fontWeight: 'bold'}}>IN PROGRESS</Text>
          <View style={{marginVertical: 7}} />
          <ScrollView horizontal>
            {/* Here we can use map or flatlist when we get data from API */}

            {!!data &&
              data.map((item, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    style={{borderRadius: 50, marginHorizontal: 10}}>
                    <ImageBackground
                      source={{uri: item.download_url}}
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
                );
              })}

          
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
