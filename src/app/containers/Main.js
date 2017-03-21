
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'
import _ from 'lodash'

import ReviewList from '../components/Reviews/ReviewList'
import { fetchTokenIfNeeded } from '../actions/auth'
import { fetchReviewsIfNeeded } from '../actions/reviews'

class Main extends Component {
  leftButtonConfig = {
    title: 'Filter',
    tintColor: 'black',
    handler: () => this._onFilterPress(),
  }

  rightButtonConfig = {
    title: 'Map',
    tintColor: 'black',
    handler: () => this._onMapPress(),
  }

  titleConfig = {
    title: 'Yalp',
    style: styles.title
  }

  _onFilterPress() {
    console.log('filter pressed')
  }

  _onMapPress() {
    console.log('map pressed')
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchTokenIfNeeded())
  }

  componentWillReceiveProps(nextProps) {
    const { auth, dispatch } = nextProps
    if (!_.isEmpty(auth)) {
      dispatch(fetchReviewsIfNeeded())
    }
  }

  render() {
    return (
      <View>
        <NavigationBar
          style={styles.navbar}
          containerStyle={styles.navbar}
          title={this.titleConfig}
          leftButton={this.leftButtonConfig}
          rightButton={this.rightButtonConfig}
        />
        <View>
          <Text>
            Term Bar
          </Text>
        </View>
        <View>
          <Text>
            Location Bar
          </Text>
        </View>
        <View>
          <ReviewList />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#5ECC9C',
  },
  title: {
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold'
  },
})

const mapStateToProps = (state) => {
  const { auth } = state

  return {
    auth
  }
}

export default connect(mapStateToProps)(Main)
