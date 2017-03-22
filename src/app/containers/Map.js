
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import NavigationBar from 'react-native-navbar'
import MapView from 'react-native-maps'
import _ from 'lodash'

import ReviewListCell from '../components/Reviews/ReviewListCell'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
let id = 0

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

class Map extends Component {
  constructor(props) {
    super(props)

    const { lastReviews } = this.props
    let rev = []
    let coord = {
      latitude: 0,
      longitude: 0
    }

    if (!_.isEmpty(lastReviews)) {
      const last = lastReviews[lastReviews.length -1]
      const { latitude, longitude } = last.coordinates
      coord.latitude = latitude
      coord.longitude = longitude
    }

    this.state = {
      region: {
        latitude: coord.latitude || LATITUDE,
        longitude: coord.longitude || LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: []
    }
  }

  _onBackPress() {
    const { navigator } = this.props
    navigator.pop()
  }

  render() {
    const { lastReviews } = this.props

    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
        >
          {lastReviews.map(review => (
            <MapView.Marker
              key={review.id}
              coordinate={review.coordinates}
              pinColor={randomColor()}
            >
              <MapView.Callout>
                <View>
                  <ReviewListCell rowData={review} />
                </View>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this._onBackPress.bind(this)}
            style={styles.bubble}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
})

const mapStateToProps = (state) => {
  const { reviews } = state
  let lastReviews = []

  if (!_.isEmpty(reviews)) {
    const last = reviews[reviews.length -1]
    const { businesses } = last
    lastReviews = businesses
  }

  return {
    lastReviews
  }
}

export default connect(mapStateToProps)(Map)


