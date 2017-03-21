
import React, { Component } from 'react'
import {
  ListView,
  Text,
  View
} from 'react-native'

import ReviewListCell from './ReviewListCell'

export default class ReviewList extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <ReviewListCell rowData={rowData} />
        }
      />
    );
  }
}
