import React, { Component } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"
import ListItem from "./src/components/ListItem/ListItem"
import PlaceList from "./src/components/PlaceList/PlaceList"
import placeImage  from './src/assets/hello.jpg'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      placeName: "",
      places: []
    }
    this.placeNameChangeHandler = this.placeNameChangeHandler.bind(this)
    this.placeAddHandler = this.placeAddHandler.bind(this)
    this.placeDeleteHandler = this.placeDeleteHandler.bind(this)
  }

  placeNameChangeHandler(value) {
    this.setState({
      placeName: value
    })
  }

  placeAddHandler() {
    if (this.state.placeName == "") {
      return
    }

    return this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          name: prevState.placeName,
          image: placeImage
        }),
        placeName: ""
      }
    })
  }

  placeDeleteHandler(key) {
    return this.setState(prevState => {
      console.log(prevState.key)
      return {
        places: prevState.places.filter((place) => place.key !== key)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}
          />
          <Button
            style={styles.placeButton}
            onPress={this.placeAddHandler}
            title="add"
          />
        </View>
        <PlaceList
          places={this.state.places}
          onPress={this.placeDeleteHandler}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  listContainer: {
    width: "100%"
  },
  placeButton: {
    width: "30%"
  },
  placeInput: {
    width: "70%"
  }
})
