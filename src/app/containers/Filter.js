
import React, { Component } from 'react'
import {
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import NavigationBar from 'react-native-navbar'
import CategoryList from '../components/Filters/CategoryList'
import { fetchReviewsIfNeeded } from '../actions/reviews'


class Filter extends Component {
  leftButtonConfig = {
    title: 'Back',
    tintColor: 'black',
    handler: () => this._onBackPress(),
  }

  rightButtonConfig = {
    title: 'Save',
    tintColor: 'black',
    handler: () => this._onSavePress(),
  }

  titleConfig = {
    title: 'Filter',
    style: styles.title
  }

  _onBackPress() {
    const { navigator } = this.props
    navigator.pop()
  }

  _onSavePress() {
    const { auth, dispatch, navigator } = this.props
    if (!_.isEmpty(auth)) {
      dispatch(fetchReviewsIfNeeded())
    }
    navigator.pop()
  }

  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
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
        <CategoryList />
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

export default connect(mapStateToProps)(Filter)