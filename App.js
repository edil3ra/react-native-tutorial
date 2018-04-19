import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      placeName: ''
    }
    this.placeNameChangeHandler = this.placeNameChangeHandler.bind(this)
  }


  placeNameChangeHandler(value) {
    this.setState({
      placeName: value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <TextInput
          style={{width: 300, border: 'black'}}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-start',
  },
})
