import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

class TopPicks extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=1&limit=10')
      .then(res => res.json())
      .then(data => this.setState({data}));
  }
  render() {
    const {data} = this.state;
    // console.log(data);
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.constianerStyles}>
          <Text style={{fontWeight: 'bold'}}>TOP-PICKS</Text>
          <View style={{marginVertical: 7}} />

          {/* Here we can use map or flatlist when we get data from API */}

          {!!data &&
            data.map((item, key) => {
              return (
                <View key={key}>
                  <TouchableOpacity style={styles.imageStyle}>
                    <ImageBackground
                      source={{uri: item.download_url}}
                      style={{width: '100%', height: 150}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          margin: 15,
                        }}>
                        <View
                          style={{
                            backgroundColor: '#000',
                            padding: 5,
                            borderRadius: 15,
                            paddingHorizontal: 10,
                          }}>
                          <Text style={{color: 'yellow', fontWeight: 'bold'}}>
                            {item.id} QUESTIONS
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>

                    <View
                      style={{
                        margin: 5,
                        marginHorizontal: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text style={{fontWeight: 'bold', color: 'blue'}}>
                          {item.author}
                        </Text>
                        <Text>By hakeemullah</Text>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 'auto',
                          marginBottom: 'auto',
                        }}>
                        <Text style={{fontSize: 11}}>Created 1 Year ago </Text>
                        <Text style={{fontSize: 11}}> 75.7K Plays</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <View style={{marginVertical: 10}} />
                </View>
              );
            })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constianerStyles: {
    width: '88%',
    // borderWidth: 1,
  },
  imageStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    position: 'relative',
    //    borderWidth:1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default TopPicks;
