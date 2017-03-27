
import React, { Component } from 'react'
import {
  ListView,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

import CategoryListCell from './CategoryListCell'

class CategoryList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    const { categories } = props

    this.state = {
      dataSource: ds.cloneWithRows(categories),
      ds
    }
  }

  componentWillReceiveProps(nextProps) {
    const { categories } = nextProps
    this.setState({
      dataSource: this.state.ds.cloneWithRows(categories),
    })
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <CategoryListCell rowData={rowData} />
        }
        enableEmptySections={true}
      />
    );
  }
}

const mapStateToProps = function(state) {
  const { filters } = state

  return {
    categories: filters.categories
  }
}

export default connect(mapStateToProps)(CategoryList)
