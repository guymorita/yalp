
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

export default class ReviewListCell extends Component {
  render() {
    const { rowData } = this.props
    return (
      <View>
        <Text>
          {rowData}
        </Text>
      </View>
    );
  }
}
