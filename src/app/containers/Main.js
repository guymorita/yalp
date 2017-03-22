
import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'
import _ from 'lodash'

import ReviewList from '../components/Reviews/ReviewList'
import Search from '../components/Search/Search'
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
    title: 'Phở ở đâu',
    style: styles.title
  }

  _onFilterPress() {
    console.log('filter pressed')
  }

  _onMapPress() {
    const { navigator } = this.props
    navigator.push({
      title: 'Map'
    })
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
        <Search />
        <ReviewList />
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
  }
})

const mapStateToProps = (state) => {
  const { auth } = state

  return {
    auth
  }
}

export default connect(mapStateToProps)(Main)
