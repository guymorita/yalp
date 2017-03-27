
import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { connect } from 'react-redux'

import { resetFilters } from '../../actions/filters'
import { searchNew } from '../../actions/search'

class Search extends Component {
  state = {
    search: '',
    location: ''
  }

  _onSearchChange(search) {
    this.setState({
      search
    })
  }

  _onLocationChange(location) {
    this.setState({
      location
    })
  }

  _onSearchPress() {
    const { dispatch } = this.props
    const { location, search} = this.state
    dispatch(resetFilters())
    dispatch(searchNew(search, location))
  }

  render() {
    return (
      <View>
        <View style={styles.textInputBackground}>
          <TextInput
            style={styles.textInput}
            placeholder=" Pho"
            editable={true}
            maxLength={40}
            value={this.state.search}
            onChangeText={this._onSearchChange.bind(this)}
          />
        </View>
        <View style={styles.textInputBackground}>
          <View style={styles.bottomRow}>
            <TextInput
              style={[styles.textInput, styles.locationInput]}
              placeholder=" San Francisco"
              editable={true}
              maxLength={40}
              value={this.state.location}
              onChangeText={this._onLocationChange.bind(this)}
            />
            <Button
              title="Search"
              style={styles.searchButton}
              onPress={this._onSearchPress.bind(this)}
              color="black"
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInputBackground: {
    backgroundColor: '#5ECC9C'
  },
  bottomRow: {
    flexDirection: 'row'
  },
  textInput: {
    height: 40,
    margin: 10,
    paddingLeft: 0,
    backgroundColor: 'white',
    borderRadius: 8
  },
  locationInput: {
    marginTop: 0,
    flex: 1
  },
  searchButton: {
  }
})

const mapStateToProps = (state) => {
  const { search } = state

  return {
    search
  }
}

export default connect(mapStateToProps)(Search)
