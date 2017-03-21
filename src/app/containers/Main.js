
import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'

import { connect } from 'react-redux'

import { fetchTokenIfNeeded } from '../actions/auth'

class Main extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchTokenIfNeeded())
  }

  render() {
    return (
      <View>
        <Text>
          Hi
        </Text>
      </View>
    );
  }
}

export default connect(null)(Main)
