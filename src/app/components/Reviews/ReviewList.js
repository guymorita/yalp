
import React, { Component } from 'react'
import {
  ListView,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

import ReviewListCell from './ReviewListCell'

class ReviewList extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([]),
      ds
    }
  }

  componentWillReceiveProps(nextProps) {
    const { lastReviews } = nextProps
    const { businesses } = lastReviews
    this.setState({
      dataSource: this.state.ds.cloneWithRows(businesses),
    })
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <ReviewListCell rowData={rowData} />
        }
        enableEmptySections={true}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { reviews } = state

  return {
    lastReviews: reviews[reviews.length -1]
  }
}

export default connect(mapStateToProps)(ReviewList)
