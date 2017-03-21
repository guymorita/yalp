
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
  rightButtonConfig = {
    title: 'Next',
    handler: () => console.log('hi'),
  }

  titleConfig = {
    title: 'Yalp',
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
    backgroundColor: '#5ECC9C'
  }
})

const mapStateToProps = (state) => {
  const { auth } = state

  return {
    auth
  }
}

export default connect(mapStateToProps)(Main)
