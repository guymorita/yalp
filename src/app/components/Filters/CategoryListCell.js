
import React, { Component } from 'react'
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { toggleCategoryFilter } from '../../actions/filters'

class CategoryListCell extends Component {
  _switchChange(category, bool) {
    const { dispatch } = this.props
    dispatch(toggleCategoryFilter(category, bool))
  }

  render() {
    const { name, filter} = this.props.rowData

    return (
      <View style={styles.container}>
        <View style={styles.categoryBox}>
          <Text style={styles.category}>
            {name}
          </Text>
        </View>
        <View style={styles.switchBox}>
          <Switch
            onValueChange={(bool) => this._switchChange(name, bool)}
            style={{marginBottom: 10}}
            value={filter}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5

  },
  categoryBox: {
    flex: 0.8
  },
  category: {
    fontWeight: 'bold',
    fontSize: 16
  },
  switchBox: {
    flex: 0.2
  }
})

export default connect()(CategoryListCell)