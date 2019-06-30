/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, TextInput, View, FlatList, Platform, Text } from 'react-native';
import TableCell from './TableCell';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: `
      {
        "list": [
          {
            "type": "dish",
            "image": "https://source.unsplash.com/random",
            "identifier": "some_unique_identifier_of_this_entry1",
            "tags": [
              "aloo",
              "tamatar",
              "tarbooj",
              "khana",
              "peena"
            ],
            "name":"Dish 1",
            "kitchenMeta": {
              "kitchenIdentifier": "some_uniqe_identifier_for_kitchen",
              "location": {
                "latitude": "10000.1010110",
                "longitude": "10000.1010110"
              },
              "name": "Amrood ki dukaan"
            },
            "dishMeta": {
              "identifier": "we can ignore this if this is same as 'identifier' in root object",
              "rating": "1.0|2.0|3.0|4.0|5.0",
              "dishPreparationTime": "20 (in minutes)",
              "isVegetarian": false,
              "price": "1000000.00"
            }
          },
          {
            "type": "dish",
            "image": "https://source.unsplash.com/random",
            "identifier": "some_unique_identifier_of_this_entry2",
            "tags": [
              "aloo",
              "tamatar",
              "tarbooj",
              "khana",
              "peena"
            ],
            "name":"Dish 2",
            "kitchenMeta": {
              "kitchenIdentifier": "some_uniqe_identifier_for_kitchen",
              "location": {
                "latitude": "10000.1010110",
                "longitude": "10000.1010110"
              },
              "name": "Amrood ki dukaan"
            },
            "dishMeta": {
              "identifier": "we can ignore this if this is same as 'identifier' in root object",
              "rating": "1.0|2.0|3.0|4.0|5.0",
              "dishPreparationTime": "20 (in minutes)",
              "isVegetarian": false,
              "price": "1000000.00"
            }
          }
        ]
      }
      `
    };

  }

  tryParseJSON(jsonString) {
    try {
      var o = JSON.parse(jsonString);

      // Handle non-exception-throwing cases:
      // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
      // but... JSON.parse(null) returns null, and typeof null === "object", 
      // so we must check for that, too. Thankfully, null is falsey, so this suffices:
      if (o && typeof o === "object") {
        return o;
      }
    }
    catch (e) { }

    return false;
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: Platform.OS === 'web' ? 0.5 : 1.0, paddingTop: Platform.OS === 'web' ? 120 : 210, padding: Platform.OS === 'web' ? 16 : 0, }}
        >
          <View style={{ flex: 1, borderColor: Platform.OS === 'web' ? 'black' : null, borderWidth: Platform.OS === 'web' ? 1 : null, minHeight: '100%', }}>
            {
              this.tryParseJSON(this.state.text) ? <FlatList
                style={{ flex: 1, paddingTop: Platform.OS === 'web' ? 0 : 8 }}
                data={JSON.parse(this.state.text).list}
                renderItem={({ item, index }) => <TableCell index={index} item={item} />}
                contentContainerStyle={{ paddingBottom: Platform.OS === 'web' ? 0 : 120 }}
              /> : <Text>JSON is Not Valid</Text>
            }

          </View>
        </View>
        {
          Platform.OS === 'web' ?
            <View
              style={{ flex: 0.5, height: '100%', padding: 16, height: '100%' }}
            >
              <TextInput
                style={{ height: '100%', borderColor: 'gray', borderWidth: 1, padding: 2, height: 650 }}
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                multiline={true}
                editable={true}
              />
            </View> : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
});
