import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {RNHoleView} from 'react-native-hole-view';

const {height, width} = Dimensions.get('window');

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RNHoleView
        style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,.3)'}]}
        holes={[
          {
            x: width * 0.1,
            y: height / 2 - width * 0.4,
            width: width * 0.8,
            height: width * 0.8,
            borderRadius: width * 0.4,
          },
        ]}>
        <View style={{backgroundColor: 'red'}}></View>
      </RNHoleView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
