import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';


const source = {
    html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`
  };

const App = () => {

    
    const { width } = useWindowDimensions();
    return (
        <View>
      <RenderHtml
        contentWidth={width}
        source={source}
      />
      <Text>Abhijeet</Text>
      </View>
    );
}

export default App

const styles = StyleSheet.create({})