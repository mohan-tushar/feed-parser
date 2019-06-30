import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
export default class MaterialCardWithImageAndTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { entry } = this.props;
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.cardBody}>
          <Image
            style={styles.cardItemImagePlace}
            source={{ uri: entry.image }}
          />
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>{entry.name}</Text>
            <Text style={styles.subtitleStyle}>{entry.kitchenMeta.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.subtitleStyle}>{entry.dishMeta.rating}</Text>
              <Text style={styles.subtitleStyle}>{entry.dishMeta.isVegetarian ? "Veg" : "Non-Veg"}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.subtitleStyle}>{entry.dishMeta.dishPreparationTime}</Text>
              <Text style={styles.subtitleStyle}>{entry.dishMeta.price}</Text>
            </View>
          </View>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity style={styles.actionButton1}>
            <Text style={styles.actionText1}>{entry.tags.join(', ')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton2}>
            <Text style={styles.actionText2}>Add Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 4,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1,
  },
  titleStyle: {

    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {

    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    // height: 80,
    flex: 0.5,
    marginLeft: 8,
    marginTop: 8,
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  actionText2: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  }
});
