import React from 'react';
import { View } from 'react-native';
import MaterialCardWithImageAndTitle from './Card';

const TableCell = ({ item, index }) => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'white', }}>
      <MaterialCardWithImageAndTitle entry={item} />
    </View>
  );
};

export default TableCell;