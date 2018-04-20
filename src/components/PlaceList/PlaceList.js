import React from "react"
import { View, ScrollView, StyleSheet, FlatList } from "react-native"
import ListItem from "../ListItem/ListItem"

const PlaceList = props => {
  return (
    <FlatList
      style={styles.placeList}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onPress={() => props.onPress(info.item.key)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  placeList: {
    width: "100%"
  }
})

export default PlaceList
