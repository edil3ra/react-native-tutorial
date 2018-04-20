import React from "react"
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native"


const ListItem = props => {
  console.log(props)
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.ListItem}>
        <Image style={styles.PlaceImage} source={props.placeImage} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ListItem: {
    width: "100%",
    padding: 10,
    margin: 5,
    backgroundColor: "#ddd",
    flexDirection: "row"
  },

  PlaceImage: {
    width: 30,
    height: 30
  }
})

export default ListItem
